const NoAttendees = () => {
  return (
   <>
   <div>
      <b className="absolute top-[780px] left-[481px] text-[30px]">{`There aren’t any attendees for this retreat yet! `}</b>
      <div className="absolute top-[486px] left-[741px] w-[142px] h-[207px] text-[16px]">
        <div className="absolute top-[50px] left-[0px] w-[142px] h-[157px]">
          <b className="absolute top-[138px] left-[0px]">
            FYI, this is Tucker.
          </b>
          <img
            className="absolute bottom-[29px] left-[calc(50%_-_52px)] w-28 h-32"
            alt=""
            src="/body.png"
          />
        </div>
        <img
          className="absolute top-[0px] left-[calc(50%_-_46px)] w-[100.18px] h-[125px]"
          alt=""
          src="/head.png"
        />
      </div>
      {/* <div className="absolute top-[377px] left-[730px] rounded-10xs bg-royalblue-100 w-[130px] flex flex-row p-2.5 box-border items-center justify-start gap-[10px] text-white">
        <img className="relative w-[11px] h-[11px]" alt="" src="/vector.svg" />
        <b className="relative">Add Attendee</b>
      </div>
      <div className="absolute top-[377px] left-[363px] flex flex-row items-start justify-start gap-[11px] text-dimgray-100">
        <div className="rounded-8xs box-border w-[103px] flex flex-row p-2.5 items-center justify-start border-[1px] border-solid border-gainsboro-200">
          <div className="relative">First Name</div>
        </div>
        <div className="rounded-8xs box-border w-[103px] flex flex-row p-2.5 items-center justify-start border-[1px] border-solid border-gainsboro-200">
          <div className="relative">Last Name</div>
        </div>
        <div className="rounded-8xs box-border w-[121px] flex flex-row p-2.5 items-center justify-start border-[1px] border-solid border-gainsboro-200">
          <div className="relative">{`Email `}</div>
        </div>
      </div>
      <div className="absolute top-[387px] left-[285px] text-dimgray-100">
        1
      </div>
      <b className="absolute top-[415px] left-[801px] text-[10px] text-darkgray">
        {" "}
        press enter
      </b> */}
      {/* <div className="absolute top-[937px] left-[32px] rounded-10xs bg-wheat w-[205px] h-[49px] flex flex-row p-2.5 box-border items-center justify-center gap-[10px]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/plus.png"
        />
        <b className="relative">Add Weekend</b>
      </div> */}
    </div>
    </>
  );
};

export default NoAttendees;
