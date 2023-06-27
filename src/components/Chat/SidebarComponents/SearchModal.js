import React, { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'flowbite-react';
import searchImg from '../../../images/searchImg.svg';
import { auth, fireDB } from '../../../firebase.config';
import { collection, doc, getDoc, getDocs, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";

const SearchModal = (props) => {
  //using anonymous function on this element causes re-rendering of parents thus it too
  // const searchInput = document.getElementById('searchInput');

  // Documents were being fetched twice leading to duplicate documents in user Array ref
  // so this isLoaded keeps track of whether documents have already been fetched on mount and prevent it 
  // from happening again
  const isLoaded = useRef(false);
  const users = useRef([]);       //array of document objects retrieved from firestore

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        if (isLoaded.current) return; //prevent re-fetching of docs

        isLoaded.current = true;
        //fetch all available users and add to users array apart from current user
        const querySnapshot = await getDocs(collection(fireDB, "user"));  

        querySnapshot.forEach((doc) => {
          if(doc.data().userID === auth.currentUser?.uid) return;
          users.current.push(doc.data())
        });

      } catch (err) {
        console.error(err);
      }
    }

    fetchDocs();
  }, [])

  const handleUserSelect = useCallback(async (user) => {
    //chats btn 2 people to be stored by combined IDs
    const combinedId = auth.currentUser?.uid > user.userID 
      ? auth.currentUser?.uid + user.userID 
      : user.userID + auth.currentUser?.uid;

    try {
      //check if chat btn current user and selected user exists if not create one 
      const docSnapshot = await getDoc(doc(fireDB, "chats", combinedId));

      if(!docSnapshot.exists()) {
        //create the chat in chats collection
        await setDoc(doc(fireDB, "chats", combinedId), { messages: [] }); //messages array to store all messages btn 2 users

        //update userChat in userChats collection to store chat information
        //each userChat doc stores chat info with other users
        await updateDoc(doc(fireDB, "userChats", auth.currentUser?.uid), { //for current user
          [combinedId + '.userInfo']: {
            userId: user.userID,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });

        await updateDoc(doc(fireDB, "userChats", user.userID), { //for other user
          [combinedId + '.userInfo']: {
            userId: auth.currentUser?.uid,
            displayName: auth.currentUser?.displayName,
            photoURL: auth.currentUser?.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });
      }

    } catch (err) {
      console.error(err);
    }
  }, []);

  return ReactDOM.createPortal(
    <Modal dismissible show={props.openModal === 'dismissible'} onClose={props.onClose} size="md">
        <Modal.Header>
            <div className='flex gap-2'>
                <input id='searchInput' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                    placeholder="Search user" 
                />

                <button className="py-1 px-1 rounded shadow text-xl btn-white btn-white:hover" >
                    <img className="w-10 h-7 rounded" src={searchImg} alt="searchUser"/>
                </button>
            </div>
        </Modal.Header>

        <Modal.Body>
          <div className="h-60 overflow-y-auto my-custom-scrollbar">
          {users.current.length !== 0 && 
            users.current.map((userDoc) => {
              return (
                <div key={userDoc.userID} className='rounded flex gap-4 items-center p-2 hover:bg-neutral-500 hover:bg-opacity-70 hover:cursor-pointer'
                  onClick={() => handleUserSelect(userDoc)}>
                  <img className="w-6 h-6 rounded-full" 
                    src={userDoc.photoURL} 
                    alt="user avatar" 
                  />

                  <p className='text-sm dark:text-slate-50'>{userDoc.displayName}</p>
                </div>
              )
            })}
          </div>
        </Modal.Body>

    </Modal>,
    document.getElementById('searchOverlay')
  )
}

export default SearchModal