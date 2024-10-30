import React, { useState, } from "react";
import Stepper from "../../components/stepper";
import TellUsMoreForm from './partials/TellUsMoreForm';
import CompanyForm from './partials/CompnayForm';
import CompanyLogo from './partials/CompanyLogo';
import ConfirmMessage from './partials/ConfirmMessage';
import '../Shared.css';

const Main = () => {
    const stepsLength = 4;
    const [currentStep, setCurrentStep] = useState(0)

    const nextStep = () => {
        console.log(currentStep)
        console.log(stepsLength)
        if (currentStep < stepsLength) {
            setCurrentStep(currentStep + 1)
        }
    };
    const prevStep = () => {
        if (currentStep !== 0) {
            setCurrentStep(currentStep - 1)
        }
    };



    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-col justify-center items-center">
                <Stepper currentStep={currentStep} numberOfSteps={stepsLength} />
                {currentStep === 0 && (
                    <TellUsMoreForm nextStep={nextStep} />

                )}
                {currentStep === 1 && (
                    <CompanyForm nextStep={nextStep} prevStep={prevStep}/>

                )}
                {currentStep === 2 && (
                 <CompanyLogo nextStep={nextStep} prevStep={prevStep}/>

                )}
                {currentStep === 3 && (
                 <ConfirmMessage nextStep={nextStep} prevStep={prevStep}/>

                )}



               


            </div>
        </div>
    )
}

export default Main;