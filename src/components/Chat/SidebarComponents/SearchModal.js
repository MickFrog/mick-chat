import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'flowbite-react';
import searchImg from '../../../images/searchImg.svg';
import { auth, fireDB } from '../../../firebase.config';
import { collection, getDocs } from "firebase/firestore";

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
        //fetch all users and add to user array available apart from current user
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
                <div key={userDoc.userID} className='flex gap-4 items-center p-2'>
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