import React from "react"
import './stepper.css';
import user from '~/Assets/icons/user.svg';
import Company from '../../assets/icons/company';
import User from '../../assets/icons/user';
import MultieImages from '../../assets/icons/multiple-images';
import ShieldCheck from '../../assets/icons/shield-check';
import checkShield from '~/Assets/icons/shield-check.svg';

function Stepper({ currentStep, numberOfSteps }: { currentStep: number, numberOfSteps: number }) {

    const activeBgColor = (index: number) => currentStep === index ? 'border-[#ff6059] bg-white' : currentStep > index ? 'bg-white border-blue-500' : 'bg-white';
    const activeLineColor = (index: number) => currentStep === index ? 'bg-[#ff6059]' : currentStep > index ? 'bg-blue-500' : 'bg-white';
    const iconColor = (index: number) =>  currentStep === index ? '#ff6059' /* active */  : currentStep > index ? '#54A0FF' /* done */ : '#909A9F';


    const isFinalStep = (index: number) => index === numberOfSteps - 1;



    const icons = [ <User color={iconColor(0)} /> ,  <Company color={iconColor(1)} /> , <MultieImages color={iconColor(2)} /> , <ShieldCheck color={iconColor(3)}/>]


    return (
        <div className="flex justify-between min-w-[80%]">
            {Array.from({ length: numberOfSteps }).map((_, index) => (
                // shouldn't be index but it's an empty array
                <div key={index} className="w-1/4 flex justify-center items-center relative">
                    <div className={`w-16 h-16 border rounded-full flex items-center justify-center ${activeBgColor(index)}`}>
                    {icons[index]}
                    </div>
                    {isFinalStep(index) ? null : <span className={`absolute w-full h-[5px] -z-10 left-[50%] ${activeLineColor(index)}`}>
                        
                    </span>
                    }
                </div>

            ))}

        </div>
    )
}

export default Stepper;