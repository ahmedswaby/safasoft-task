import React from "react"
import './stepper.css';
import user from '~/Assets/icons/user.svg';
import Company from '../../assets/icons/company';
import User from '../../assets/icons/user';
import MultieImages from '../../assets/icons/multiple-images';
import ShieldCheck from '../../assets/icons/shield-check';
import checkShield from '~/Assets/icons/shield-check.svg';

function Stepper({ currentStep, numberOfSteps }: { currentStep: number, numberOfSteps: number }) {

    const activeColor = (index: number) => currentStep === index ? 'border-[#ff6059] bg-white' : currentStep > index ? 'bg-white border-blue-500' : 'bg-white';
    const isFinalStep = (index: number) => index === numberOfSteps - 1;

    const icons = [ <User color={currentStep === 0 ? '#ff6059' : currentStep > 0 ? '#54A0FF' : '#EE5253'} /> ,  <Company color={currentStep === 1 ? '#ff6059' : currentStep > 1 ? '#54A0FF' : '#EE5253'} /> , <MultieImages color={currentStep === 2 ? '#ff6059' : currentStep > 2 ? '#54A0FF' : '#EE5253'} /> , <ShieldCheck color={currentStep === 3 ? '#ff6059' : currentStep > 3 ? '#54A0FF' : '#EE5253'}/>]


    return (
        <div className="flex justify-between min-w-[80%]">
            {Array.from({ length: numberOfSteps }).map((_, index) => (
                // shouldn't be index but it's an empty array
                <React.Fragment key={index}>
                    <div className={`w-16 h-16 border rounded-full flex items-center justify-center ${activeColor(index)}`}>
                    {icons[index]}
                    </div>
                    {isFinalStep(index) ? null : <div className={`${activeColor(index)}`}>
                        
                    </div>
                    }
                </React.Fragment>

            ))}

        </div>
    )
}

export default Stepper;