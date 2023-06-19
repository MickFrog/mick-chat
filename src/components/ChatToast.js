import React from "react"
import { Toast } from 'flowbite-react'

const ChatToast = () => {
    return (
        <div>
        <Toast className="fixed top-2 left-[15%]">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Check icon</span>
            </div>

            <div className="ml-3 text-sm font-normal">Signed in successfully.</div>
            <Toast.Toggle />
        </Toast>

        </div>
    );
}

export default ChatToast;
