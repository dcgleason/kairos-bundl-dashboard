import React from "react";

const Modal = () => {
    return (
      <div className="absolute top-0 right-5 w-[194px] h-[90px] z-50">
        <div className="rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col p-2.5 items-start justify-start">
          <div className="flex flex-col items-start justify-start">
            <div className="rounded-8xs bg-gainsboro-100 w-[174px] flex flex-row p-2.5 box-border items-center justify-start">
              <div className="relative">Send Reminder(s) via Email</div>
            </div>
            <div className="rounded-8xs w-[174px] flex flex-row p-2.5 box-border items-center justify-start">
              <div className="relative">Remove Contribution(s)</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  export default Modal;
