import React from 'react';
import * as yup from "yup";

const CompanyLogo = ({nextStep , prevStep}) => {
    
    return (
        <div className="mt-20 w-full">
            <h2 className="text-3xl text-center text-gray-900">Verify Your Company.</h2>
            <form action="#" method="POST">
                <div className="bg-white p-8 mt-8 rounded-md">
                    <p className="text-center">
                        Company Logo under maintenance
                    </p>
                </div>
                <div className="flex w-100 justify-end my-10 w-full ">
                    <button className="btn border bg-gray-300 text-gray-500 p-2 px-4 lg:px-8 m-4 rounded-md" onClick={() => prevStep()}>Previous</button>
                    <button className="btn bg-blue-600 text-white p-8 lg:px-32 py-4 rounded-md m-4" type='button' onClick={() => nextStep()}>Next</button>
                </div>
            </form>

        </div >

    )
}

export default CompanyLogo;
