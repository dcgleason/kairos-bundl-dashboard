import React from "react";

const Modal = () => {
    return (
      <div className="absolute top-[236px] left-[330px] w-[780px] h-[553px] text-center">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white w-[780px] h-[553px]" />
        <div className="absolute top-[476px] left-[344px] rounded-8xs bg-royalblue flex flex-row p-2.5 items-center justify-center text-white">
          <b className="relative">Send Emails</b>
        </div>
        <b className="absolute top-[61px] left-[96px] text-[24px]">
          Add Contributor(s) to Stevie Gleason’s LetterBook
        </b>
        <div className="absolute top-[103px] left-[184px] text-[16px]">{`We’ll send an invitation to contribute to this letter book `}</div>
        <div className="absolute top-[146px] left-[41px] flex flex-row items-start justify-start gap-[14px] text-left">
          <div className="flex flex-col items-start justify-start gap-[5px]">
            <b className="relative">First Name</b>
            <div className="rounded-8xs box-border w-[158px] flex flex-row p-[5px] items-center justify-start text-darkgray border-[1px] border-solid border-silver-100">
              <div className="relative">{`eg. Johny `}</div>
            </div>
          </div>
          <div className="w-[158px] flex flex-col items-start justify-start gap-[5px]">
            <b className="relative">Last Name</b>
            <div className="rounded-8xs box-border w-[158px] flex flex-row p-[5px] items-center justify-start text-darkgray border-[1px] border-solid border-silver-100">
              <div className="relative">{`eg. Boston `}</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[5px]">
            <b className="relative">Email</b>
            <div className="rounded-8xs box-border w-[158px] flex flex-row p-[5px] items-center justify-start text-silver-200 border-[1px] border-solid border-silver-100">
              <div className="relative">eg. jboston@bc.edu</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[361px] left-[41px] w-[541px] h-[86px] text-left">
          <b className="absolute top-[0px] left-[0px]">Invite via email (2):</b>
          <div className="absolute top-[25px] left-[0px] rounded-2xl bg-whitesmoke-300 w-64 h-[27px] flex flex-row py-[5px] px-2.5 box-border items-center justify-start">
            <div className="relative">Amy Gleason, agleason1221@gmail.com</div>
          </div>
          <div className="absolute top-[25px] left-[267px] rounded-2xl bg-whitesmoke-300 w-[274px] h-[27px] flex flex-row py-[5px] px-2.5 box-border items-center justify-start">
            <div className="relative">
              Stevie Gleason, stephenkgleason@gmail.com
            </div>
          </div>
          <div className="absolute top-[59px] left-[0px] rounded-2xl bg-whitesmoke-300 w-[274px] h-[27px] flex flex-row py-[5px] px-2.5 box-border items-center justify-start">
            <div className="relative">David Gleason, dgleason56@hotmal.com</div>
          </div>
        </div>
        <img
          className="absolute h-[2.53%] w-[1.79%] top-[4.88%] right-[3.08%] bottom-[92.59%] left-[95.13%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector4.png"
        />
        <div className="absolute top-[166px] left-[605px] rounded-8xs bg-wheat w-[133px] flex flex-row py-[3px] px-0 box-border items-center justify-start gap-[8px] text-left">
          <div className="overflow-hidden flex flex-row py-1 pr-1 pl-2 items-center justify-start">
            <img
              className="relative w-[10.5px] h-[10.5px]"
              alt=""
              src="/vector5.png"
            />
          </div>
          <div className="relative">Add Contributor</div>
        </div>
        <div className="absolute top-[245px] left-[43px] rounded-[7px] bg-white box-border w-[695px] h-[89px] border-[1px] border-dashed border-silver-100" />
        <div className="absolute top-[208px] left-[292px] w-[197px] h-[15px] text-left text-silver-100">
          <div className="absolute top-[0px] left-[93px]">or</div>
          <img
            className="absolute top-[7.5px] left-[0px] w-[85px] h-px"
            alt=""
            src="/vector-14.svg"
          />
          <img
            className="absolute top-[7.5px] left-[112px] w-[85px] h-px"
            alt=""
            src="/vector-14.svg"
          />
        </div>
        <div className="absolute top-[282px] left-[359px] rounded-[3.77px] bg-gray-100 h-[18.83px] flex flex-row p-[7.5308637619018555px] box-border items-center justify-center text-[9.04px] text-white">
          <div className="relative">Import csv</div>
        </div>
      </div>
    );
  };
  

  export default Modal;
