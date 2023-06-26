import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'flowbite-react';
import searchImg from '../../../images/searchImg.svg';

const SearchModal = (props) => {

  return ReactDOM.createPortal(
    <Modal dismissible show={props.openModal === 'dismissible'} onClose={props.onClose} size="md">
        <Modal.Header>
            <div className='flex gap-2'>
                <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                    placeholder="Search user" 
                />

                <button className="py-1 px-1 rounded shadow text-xl btn-white btn-white:hover" >
                    <img className="w-10 h-7 rounded" src={searchImg} alt="searchUser"/>
                </button>
            </div>
        </Modal.Header>

        <Modal.Body>
          <div className="space-y-6 h-60 overflow-y-scroll my-custom-scrollbar">
            <div className='flex gap-4 items-center'>
                <img className="w-6 h-6 rounded-full" 
                    src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.1.1057706089.1669122497&semt=sph" 
                    alt="Large avatar" 
                />

                <p className='text-xs dark:text-slate-50'>Kalooli Omujulizi</p>
            </div>
          </div>
        </Modal.Body>

    </Modal>,
    document.getElementById('searchOverlay')
  )
}

export default SearchModal