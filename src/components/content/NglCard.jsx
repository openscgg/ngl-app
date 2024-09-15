import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./content.css";
const NglCard = ({ className }) => {
  return (
    <div className={className}>
      <div className="ngl-card-container flex flex-col justify-center items-center bg-purple-400 rounded-xl w-[300px] h-[220px]">
        <div className="flex flex-col items-center gap-y-10">
          <div className="profile-img relative w-[80px] h-[80px] rounded-full bg-gray-100">
            <img src="" alt="" />
            <FontAwesomeIcon
              className="absolute text-sm bottom-[-1px] right-[-1px] bg-slate-100 rounded-full p-[6px] border-[2px] border-purple-400"
              icon={faPen}
            />
          </div>
          <div className="message-text">
            <h2 className="text-white text-xl font-black drop-shadow-lg">
              Your Message Broker
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardContainer = () => {
  return (
    <>
      <div className="card-centent flex justify-center">
        <div className="card-container mt-10 overflow-hidden w-[350px] overflow-x-scroll flex">
          <div className="card-scroll p-5 flex gap-10">
            <NglCard className="card-item"></NglCard>
            <NglCard className="card-item"></NglCard>
            <NglCard className="card-item"></NglCard>
            <NglCard className="card-item"></NglCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
