import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "~/Components/TextField";

import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Select } from "~/Components/Select";


const TellUsMoreForm = ({ nextStep }) => {

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

        nextStep()
        try {

        } catch (e) {
        }
    };

    return (
        <div className="mt-20 w-full">
            <h2 className="text-3xl text-center text-gray-900">Tell Us More About You.</h2>
            <form action="#" method="POST" onSubmit={handleSubmit(submitHandler)}>
                <div className="bg-white p-8 mt-8 rounded-md">
                    <TextField
                        required
                        title={'Full Name'}
                        placeholder={'Enter your Full Name'}
                        name="fullName"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        placeholder={'Enter Your business email'}
                        required
                        title={'Business email'}
                        name="email"
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

                        <TextField
                            placeholder={'Enter Your Phone Number'}
                            required
                            title={'Phone Number'}
                            name="phoneNumber"
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <TextField
                        placeholder={'Choose Password'}
                        required
                        title={'password'}
                        name="password"
                        type="password"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        placeholder={'Repeat your Password'}
                        required
                        title={'Repeat your password'}
                        name="confirmPassword"
                        type="password"
                        register={register}
                        errors={errors}
                    />
                </div>
                <div className="flex w-100 justify-end my-10 w-full ">
                    <button className="btn bg-blue-600 text-white p-8 lg:px-32 py-4 rounded-md m-4" type="submit">Next</button>
                </div>
            </form>

        </div >

    )
}

export default TellUsMoreForm;
