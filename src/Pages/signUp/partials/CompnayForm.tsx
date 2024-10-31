import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "~/Components/TextField";

import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Select } from "~/Components/Select";
import { CompanyFormData } from '~/Pages/signUp'


const CompanyForm = ({ nextStep, prevStep, setData, formData }: { nextStep: Function; prevStep: Function; setData: Function; formData: CompanyFormData }) => {

    const validationSchema = yup.object().shape({
        company_name: yup
            .string()
            .required("Please Enter Company Name"),
        company_address: yup
            .string()
            .required("Please Enter Company Address"),
            company_phone: yup
            .string()
            .required("Please Enter Company Phone Number"),
        company_business_email: yup
            .string()
            .nullable()
            .matches(
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                `PLease Enter Valid email`
            )
            .required(`Please Enter Email this is required field`),
    });



    const {
        register,
        handleSubmit,
        control,
        reset,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm<{}>({ resolver: yupResolver(validationSchema) ,  mode: 'onChange' });

    useEffect(() => {
        if (formData) {
            reset(formData)
        }
    }, [formData])

    const submitHandler = async data => {
        setData({ ...formData, ...data })
        nextStep()


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
                        name="company_name"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        placeholder={'Enter Your Address'}
                        required
                        title={'Address'}
                        name="company_address"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        placeholder={'Enter Your Business Email'}
                        required
                        title={'Company Business Email'}
                        name="company_business_email"
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
                        name="company_phone"
                        register={register}
                        errors={errors}
                    />
                </div>
                <div className="flex w-100 justify-end my-10 w-full flex-wrap">
                    <button className="btn border bg-gray-300 text-gray-500 p-2 px-4 lg:px-8 rounded-md m-4" onClick={() => prevStep()}>Previous</button>
                    <button className="btn bg-blue-600 text-white p-8 lg:px-32 py-4 rounded-md m-4" type="submit">Next</button>
                </div>
            </form>

        </div >

    )
}

export default CompanyForm;
