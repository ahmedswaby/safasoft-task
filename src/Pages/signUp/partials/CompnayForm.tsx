import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "~/Components/TextField";

import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Select } from "~/Components/Select";


const CompanyForm = ({nextStep , prevStep}) => {

    const validationSchema = yup.object().shape({
        fullName: yup
            .string()
            .required("Please Enter Your Name")
    });



    const {
        register,
        handleSubmit,
        control,
        reset,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm<{}>({ resolver: yupResolver(validationSchema) });

    const submitHandler = async data => {
        console.log(data);
        try {

        } catch (e) {
        }
    };

    return (
        <div className="mt-20 w-full">
            <h2 className="text-3xl text-center text-gray-900">Verify Your Company.</h2>
            <form action="#" method="POST" onSubmit={handleSubmit(submitHandler)}>
                <div className="bg-white p-8 mt-8 rounded-md">
                <p className="text-gray-700 text-center mb-6">Entering this information correctly will facilliate the company verification process</p>
                    <TextField
                        required
                        title={'Company Name'}
                        placeholder={'Enter your Company Name'}
                        name="companyName"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        placeholder={'Enter Your Address'}
                        required
                        title={'Address'}
                        name="address"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        placeholder={'Enter Your Business Email'}
                        required
                        title={'Business Email'}
                        name="businessEmail"
                        register={register}
                        errors={errors}
                    />
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                 
                     <Select
                            register={register}
                            name="country"
                            options={Array(12)
                                .fill(null)
                                .map((_, ind) => ({ Id: ind, Name: ind }))}
                            errors={errors}
                            title={'Country'}
                            selectText={'Choose Country'}
                            required
                        />
          
                     <Select
                            register={register}
                            name="city"
                            options={Array(12)
                                .fill(null)
                                .map((_, ind) => ({ Id: ind, Name: ind }))}
                            errors={errors}
                            title={'City'}
                            selectText={'Choose City'}
                            required
                        />
                   </div>
                   <TextField
                        placeholder={'Enter Your Company Phone Number'}
                        required
                        title={'Company Phone Number'}
                        name="companyPhoneNumber"
                        register={register}
                        errors={errors}
                    />
                </div>
                <div className="flex w-100 justify-end my-10 w-full flex-wrap">
                    <button className="btn border bg-gray-300 text-gray-500 p-2 px-4 lg:px-8 rounded-md m-4" onClick={() => prevStep()}>Previous</button>
                    <button className="btn bg-blue-600 text-white p-8 lg:px-32 py-4 rounded-md m-4" type="submit" onClick={() => nextStep()}>Next</button>
                </div>
            </form>

        </div >

    )
}

export default CompanyForm;
