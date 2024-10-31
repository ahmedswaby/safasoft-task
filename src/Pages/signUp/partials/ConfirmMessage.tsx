import React from 'react';
import openMailBox from '~/Assets/icons/open-mailbox.svg';
import { CompanyFormData } from '~/Pages/signUp';
import { useCreateNewCompanyMutation } from '~/API/store/RegisterCompany';

const Confirmation = ({ prevStep, formData }: { prevStep: Function; formData: CompanyFormData }) => {

    const [createNewCompany] = useCreateNewCompanyMutation();

    const onSubmit = async () => {
        const form_data = new FormData();
        Object.keys(formData).forEach(key => form_data.append(key, formData[key]));
        try {
            await createNewCompany(form_data).unwrap().then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err)
            })
        }
        catch {
            console.log("there's error happened");

        }

    }

    return (
        <div className="mt-20 w-full">
            <div className="bg-white p-8 mt-8 rounded-md">
                <div className="text-center">
                    <img src={openMailBox} alt="img-fluid" className="w-44 m-auto mb-4" />
                    <h2 className="text-3xl text-center text-[#ff6059]">  we will send a message for this email.</h2>
                    <h3 className="text-2xl mt-2 text-gray-500">{formData.user_email}</h3>

                </div>
            </div>  
            <div className="flex w-100 justify-end my-10 w-full ">
                <button className="btn border bg-gray-300 text-gray-500 p-2 px-4 lg:px-8  rounded-md m-4" onClick={() => prevStep()}>Previous</button>
                <button className="btn bg-blue-600 text-white p-8 lg:px-32 py-4 rounded-md m-4 " type="button" onClick={() => onSubmit()}>Confirm</button>
            </div>

        </div >

    )
}

export default Confirmation;
