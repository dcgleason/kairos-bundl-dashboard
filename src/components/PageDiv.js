import React, { useState } from 'react';
import Modal from './Modal';

const PersonDiv = ({name, status, email, number}) => {

  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  

  return (
          <div 
          className={`flex flex-col p-2.5 items-start justify-start ${isHovered ? 'bg-slate-200' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center justify-start">
            <div className="relative w-[404px] h-auto flex items-center">
            <div className="w-[15px] ml-1 mr-2">
                {number}
              </div>
              <div className={`w-[122px] flex flex-row py-1 px-2.5 items-center justify-center  rounded-2xl ${status == 'Submitted' ? 'bg-green-200' : 'bg-white'} box-border`}>
                <div className="relative">{status}</div>
              </div>
              <div className="w-[60px] ml-4">
                {name}
              </div>
              <div className="ml-1 w-[200px]">
                {email}
              </div>
              {showModal && <Modal />}
              <div onClick={() => setShowModal(!showModal)} className="ml-1 w-[16px]">
                <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C12 1.46957 12.2107 0.96086 12.5858 0.585787C12.9609 0.210714 13.4696 0 14 0C14.5304 0 15.0391 0.210714 15.4142 0.585787C15.7893 0.96086 16 1.46957 16 2C16 2.53043 15.7893 3.03914 15.4142 3.41421C15.0391 3.78929 14.5304 4 14 4C13.4696 4 12.9609 3.78929 12.5858 3.41421C12.2107 3.03914 12 2.53043 12 2ZM6 2C6 1.46957 6.21071 0.96086 6.58579 0.585787C6.96086 0.210714 7.46957 0 8 0C8.53043 0 9.03914 0.210714 9.41421 0.585787C9.78929 0.96086 10 1.46957 10 2C10 2.53043 9.78929 3.03914 9.41421 3.41421C9.03914 3.78929 8.53043 4 8 4C7.46957 4 6.96086 3.78929 6.58579 3.41421C6.21071 3.03914 6 2.53043 6 2ZM0 2C0 1.46957 0.210714 0.96086 0.585786 0.585787C0.960859 0.210714 1.46957 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585787C3.78929 0.96086 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2Z" fill="black"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
  
  );
};

export default PersonDiv;
