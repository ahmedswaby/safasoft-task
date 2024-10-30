import React from 'react';
import * as yup from "yup";
import openMailBox from '~/Assets/icons/open-mailbox.svg'
const Confirmation = ({nextStep , prevStep}) => {

    return (
        <div className="mt-20 w-full">
            <form action="#" method="POST">
                <div className="bg-white p-8 mt-8 rounded-md">
                    <p className="text-center">
                        <img src={openMailBox} alt="img-fluid" className="w-44 m-auto mb-4" />
                        <h2 className="text-3xl text-center text-[#ff6059]">  we will send a message for this email.</h2>

                    </p>
                </div>
                <div className="flex w-100 justify-end my-10 w-full ">
                    <button className="btn border bg-gray-300 text-gray-500 p-2 px-4 lg:px-8  rounded-md m-4" onClick={() => prevStep()}>Previous</button>
                    <button className="btn bg-blue-600 text-white p-8 lg:px-32 py-4 rounded-md m-4" type='button' onClick={() => nextStep()}>Next</button>
                </div>
            </form>

        </div >

    )
}

export default Confirmation;
