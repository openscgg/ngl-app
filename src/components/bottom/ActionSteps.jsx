import React, { useState } from "react";

const StepOne = ({}) => {
  return (
    <>
      <div className="step-one w-[350px] h-[180px] bg-gray-100 rounded-xl flex flex-col justify-center items-center gap-5">
        <h1 className="text-xl text-gray-900 font-bold">
          Langkah 1 : Salin Tautanmu
        </h1>
        <h3>www.skibudi.bud</h3>
        <button className="px-3 py-2 font-bold rounded-full border-[2px] bg-white text-orange-400 border-orange-400">
          Salin Tautan
        </button>
      </div>
    </>
  );
};
const StepTwo = ({}) => {
  return (
    <>
      <div className="step-one w-[350px] h-[180px] bg-gray-100 rounded-xl flex flex-col justify-center items-center gap-5">
        <h1 className="text-xl text-gray-900 font-bold text-center">
          Langkah 2 : Bagikan tautan ke Instagaram Story mu
        </h1>
        <button className="px-10 font-bold py-2 rounded-full border-[1px] bg-green-400">
          Salin Tautan
        </button>
      </div>
    </>
  );
};

const ActionSteps = () => {
  return (
    <>
      <div className="steps-container flex flex-col items-center gap-5 justify-center mt-10">
        <StepOne></StepOne>
        <StepTwo></StepTwo>
      </div>
    </>
  );
};

export default ActionSteps;
