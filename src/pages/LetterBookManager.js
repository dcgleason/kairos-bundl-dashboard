import React from "react";
import { useState } from "react";
import PageDiv from "../components/PageDiv";
import "./styles.css"

export const Box = ({setShowBox}) => {
  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <div className="frame">
            <div className="text-wrapper">Invite via Email</div>
          </div>
          <h1 className="h-1">Add Contributor(s) to Stevie Gleason’s LetterBook</h1>
          <p className="p">We’ll send an invitation to contribute to this letter book</p>
          <div className="div">
            <div className="frame-2">
              <div className="text-wrapper-2">First Name</div>
              <div className="div-wrapper">
                <div className="text-wrapper-3">eg. Johny</div>
              </div>
            </div>
            <div className="frame-2">
              <div className="text-wrapper-2">Last Name</div>
              <div className="div-wrapper">
                <div className="text-wrapper-3">eg. Boston</div>
              </div>
            </div>
            <div className="frame-2">
              <div className="text-wrapper-2">Email</div>
              <div className="div-wrapper">
                <div className="text-wrapper-4">eg. jboston@bc.edu</div>
              </div>
            </div>
          </div>
          <div onClick={() => setShowBox(false)}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
            </svg>
            </div>
          <div className="frame-3">
            <div>
                <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 10H14V14.5H12.5V10H8V8.5H12.5V4H14V8.5H18.5V10Z" fill="black"/>
                </svg>
          </div>
            <div className="text-wrapper-5">Add Contributor</div>
          </div>
        </div>
      </div>
    </div>
  );
};


const LetterBookManager = () => {
  const [email, setEmail] = useState("danny.c.gleason@gmail.com");
  const [contributorName, setContributorName] = useState("Danny Gleason");
  const [status, setStatus] = useState("Submitted");
  const [showBox, setShowBox] = useState(false);
  return (

    <div className={`relative bg-white w-full h-[1024px] overflow-hidden text-left text-xs text-black font-inter ${showBox ? 'gray-out' : ''}`}>
        {showBox && (
          <div className="fixed w-full h-full top-0 left-0 z-10 bg-black bg-opacity-5 flex items-center justify-center">
            <Box setShowBox={setShowBox} />
          </div>
        )}


          <div className="absolute top-[33px] left-[43px] rounded-8xs bg-maroon w-[1368px] h-[93px]" />
              <b className="absolute top-[304px] left-[574px] text-[40px] font-helvetica">
                Stevie Gleason’s Letterbook
              </b>
              <div className="absolute top-[258px] left-[574px] flex flex-row items-center justify-start gap-[16px] text-[21.74px] font-helvetica">
                <div className="relative">Kairos 201</div>
                <div className="rounded-[67px] flex flex-row py-[5px] px-2.5 items-center justify-center text-[16.06px] border-[1px] border-solid border-black">
                  <div className="relative">{`July 28, 29 & 30 `}</div>
                </div>
              </div>
              <b className="absolute top-[286px] left-[1243px] text-[10px] font-helvetica">
                {`Arrival by `}
                <span className="[text-decoration:underline]">July 30</span>
              </b>
              <b className="absolute top-[163px] left-[608px] text-[18px] font-helvetica">
                See Other Weekends
              </b>
              <div className="absolute top-[214px] left-[197px]">Name</div>
              <div className="absolute top-[214px] left-[68px]">#</div>
              <div className="absolute top-[214px] left-[97px]">Status</div>
              <div className="absolute top-[214px] left-[305px]">Email</div>
              <div className="absolute top-[373px] left-[574px] rounded-12xs bg-whitesmoke w-[374px] h-[532px]" />
              <div className="absolute top-[373px] left-[968px] rounded-12xs bg-whitesmoke w-[374px] h-[532px]" />
              <div className="absolute top-[874px] left-[598px] inline-block w-6 h-[13px]">
                03
              </div>
              <div className="absolute top-[874px] left-[1302px] text-right inline-block w-6 h-[13px]">
                03
              </div>
              <div className="absolute top-[307px] left-[1203px] rounded-[3px] bg-royalblue w-[139px] flex flex-row p-2.5 box-border items-center justify-center text-white">
                <b className="relative">{`Check out & Print `}</b>
              </div>
              <b className="absolute top-[447px] left-[628px] text-[17.46px] inline-block w-[265px] h-5">
                Anny Gleason
              </b>
              <img
                className="absolute top-[483px] left-[1008px] w-[294px] h-[327px] object-cover"
                alt=""
                src="/rectangle-9@2x.png"
              />
              <img
                className="absolute top-[41px] left-[130px] w-[138px] h-[78px] object-cover"
                alt=""
                src="/image-1@2x.png"
              />
              <b className="absolute top-[73px] left-[68px] font-helvetica text-white">
                Bundle
              </b>
              <div className="absolute top-[46px] left-[1248px] rounded-8xs bg-brown flex flex-col p-2.5 items-start justify-start text-white">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="flex flex-col items-end justify-start">
                    <b className="relative">Amy Eagles</b>
                    <div className="relative text-yellowgreen">Admin</div>
                  </div>
                  <img
                    className="relative rounded-[50%] w-[47px] h-[47px] object-cover"
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[153px] left-[61px] flex flex-row items-center justify-start gap-[151px] font-helvetica">
                <div className="flex flex-row items-start justify-start gap-[23px]">
                  <b className="relative">Contributors</b>
                  <div className="relative">50</div>
                </div>
                <div onClick={() => setShowBox(true)} className="rounded-8xs bg-wheat flex flex-col p-2.5 items-start justify-start font-inter">
                  <div className="flex flex-row items-end justify-start gap-[15px]">
                    <img className="relative w-3.5 h-3.5" alt="" src="/vector.svg" />
                    <b className="relative">Add Contributor(s)</b>
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[238.5px] left-[61px] w-[422px] h-px"
                alt=""
                src="/vector-4.svg"
              />
          <div className="absolute top-[249px] left-[59px] h-[699px] overflow-auto flex flex-col items-start justify-start gap-[2px]">
              <PageDiv email={email} status={status} name={contributorName} number={"1"}/>
              <PageDiv email={email} status={"Not submitted"} name={contributorName} number={"2"}/>
              <PageDiv email={email} status={"Not submitted"} name={contributorName} number={"3"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"4"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"5"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"6"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"7"}/>
              <PageDiv email={email} status={"Not submitted"} name={contributorName} number={"8"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"9"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"10"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"11"}/>
              <PageDiv email={email} status={"Not submitted"} name={contributorName} number={"12"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"13"}/>
              <PageDiv email={email} status={"Not submitted"} name={contributorName} number={"14"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"15"}/>
              <PageDiv email={email} status={"Not submitted"} name={contributorName} number={"16"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"17"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"18"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"19"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"20"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"21"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"22"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"23"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"24"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"25"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"26"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"27"}/>
              <PageDiv email={email} status={status} name={contributorName} number={"28"}/>
              </div>
              <div className="absolute top-[439px] left-[289px] w-[194px] h-[90px]">
              </div>
              <div className="absolute top-[503px] left-[628px] text-[10.95px] inline-block w-[271.83px] h-[322px]">
                <p className="m-0">Stevie,</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">I hope you’ve had a lovely weekend.sdkjldkfj</p>
                <p className="m-0">adsfkajsldfkja;sldfkjals;dkjfa;sldkjfa</p>
                <p className="m-0">sdfjalsdkfjals;dkjf;alsdkjfa</p>
                <p className="m-0">sdfjalsdkfjal;sdkjf</p>
                <p className="m-0">askdjfla;skdf</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">I hope you’ve had a lovely weekend.sdkjldkfj</p>
                <p className="m-0">adsfkajsldfkja;sldfkjals;dkjfa;sldkjfa</p>
                <p className="m-0">sdfjalsdkfjals;dkjf;alsdkjfa</p>
                <p className="m-0">sdfjalsdkfjal;sdkjf</p>
                <p className="m-0">askdjfla;skdf</p>
                <p className="m-0">I hope you’ve had a lovely weekend.sdkjldkfj</p>
                <p className="m-0">adsfkajsldfkja;sldfkjals;dkjfa;sldkjfa</p>
                <p className="m-0">sdfjalsdkfjals;dkjf;alsdkjfa</p>
                <p className="m-0">sdfjalsdkfjal;sdkjf</p>
                <p className="m-0">askdjfla;skdf</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">{`<3 `}</p>
                <p className="m-0">Anny</p>
              </div>
              <div className="absolute top-[926px] left-[574px] flex flex-row items-start justify-start gap-[531px]">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="rounded-[39.79px] bg-black w-5 h-5 flex flex-row p-[6.315789222717285px] box-border items-center justify-center [transform:_rotate(-180deg)] [transform-origin:0_0]">
                    <img
                      className="relative w-[5.34px] h-[8.89px]"
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                  <b className="relative">Previous Spread</b>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <b className="relative">Next Spread</b>
                  <div className="rounded-[39.79px] bg-black w-5 h-5 flex flex-row p-[6.315789222717285px] box-border items-center justify-center">
                    <img
                      className="relative w-[6.37px] h-[9.94px]"
                      alt=""
                      src="/vector-21.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[185px] left-[598px] rounded-[39.79px] bg-maroon w-6 flex flex-row p-[6.315789222717285px] box-border items-center justify-center [transform:_rotate(-180deg)] [transform-origin:0_0]">
                <img
                  className="relative w-[7.02px] h-[12.26px]"
                  alt=""
                  src="/vector-22.svg"
                />
              </div>
    
    </div>
    
    
  );
};

export default LetterBookManager;
