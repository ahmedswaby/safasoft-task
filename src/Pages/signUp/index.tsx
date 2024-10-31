import React, { useState, } from "react";
import Stepper from "../../components/stepper";
import TellUsMoreForm from './partials/TellUsMoreForm';
import CompanyForm from './partials/CompnayForm';
import CompanyLogo from './partials/CompanyLogo';
import ConfirmMessage from './partials/ConfirmMessage';
import '../Shared.css';

export interface CompanyFormData {
    user_full_name: string;
    user_email: string;
    user_phone: number;
    user_password: string;
    user_password_confirmation: string;
    lang: string;
    company_name: string;
    company_address: string;
    
    company_phone: number;
    company_business_email: string
    company_avatar?: string;
    company_country_id: number;
    company_city_id: number;
    company_extra_data?: {
        phone: number
    };
    user_position?: string;
    user_nationality?: string;
    user_status: string;
    user_is_admin?: number;
}

const Main = () => {
    const stepsLength = 4;
    const [currentStep, setCurrentStep] = useState(0)
    const [formData, setFormData] = useState<FormData>({})

    const nextStep = () => {
        if (currentStep < stepsLength) {
            setCurrentStep(currentStep + 1)
        }
    };
    const prevStep = () => {
        if (currentStep !== 0) {
            setCurrentStep(currentStep - 1)
        }
    };

    const getFormData = (data) => {
        setFormData({...formData, ...data})
    }



    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-col justify-center items-center">
                <Stepper currentStep={currentStep} numberOfSteps={stepsLength} />

                {currentStep === 0 && (
                    <TellUsMoreForm nextStep={nextStep} setData={getFormData} formData={formData} />
                )}

                {currentStep === 1 && (
                    <CompanyForm nextStep={nextStep} prevStep={prevStep} setData={getFormData} formData={formData} />
                )}

                {currentStep === 2 && (
                    <CompanyLogo nextStep={nextStep} prevStep={prevStep}/>
                )}

                {currentStep === 3 && (
                    <ConfirmMessage nextStep={nextStep} prevStep={prevStep} formData={formData}/>
                )}

            </div>
        </div>
    )
}

export default Main;