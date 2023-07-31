import React, { useState } from "react";
import "./styles.css";



const KairosWeekend = ({weekend, date, clicked}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className={`bg-white flex flex-col p-2.5 items-start justify-start ${clicked? 'rounded-8xs bg-[#cccccc]' : ''} ${isHovered ? 'rounded-8xs bg-[#dfdfdf]' : ''}`}
    >
    <div className="flex flex-row items-start justify-start gap-[112px]">
      <b className="relative">{weekend}</b>
      <div className="relative">{date}</div>
    </div>
  </div>
  );
};


const LetterBook = ({name, email, number}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex flex-col p-2.5 items-start justify-start ${isHovered ? 'rounded-8xs bg-gainsboro-100' : ''}`}
    >
      <div className="flex flex-col items-start justify-start">
        <div className="relative w-[1074px] h-[35px]">
          <div className="absolute top-[10px] left-[733px]">{number}/61</div>
          <div className="absolute top-[0px] left-[939px] rounded-3xs bg-wheat flex flex-row p-2.5 items-center justify-center">
            <b className="relative">Manage LetterBook</b>
          </div>
          <div className="absolute top-[10px] left-[81px]">
            {name}'sLetter Book
          </div>
          <div className="absolute top-[10px] left-[316px]">
            {email}
          </div>
          <div className="absolute top-[10px] left-[0px]">{number}</div>
          <div className="absolute top-[10px] left-[513px]">61</div>
        </div>
      </div>
    </div>
  );
}


const ManyWeekends = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");


  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xs text-black font-inter">
      <div className="absolute top-[199px] left-[47px] h-[787px]  overflow-y-auto flex flex-col items-start justify-start gap-[2px]">
          <KairosWeekend weekend={"K201"} date={"9/5"} clicked={true}/>
          <KairosWeekend weekend={"K202"} date={"9/5"}/>

          <KairosWeekend weekend={"K203"} date={"9/12"}/>

        <KairosWeekend weekend={"K204"} date={"9/12"}/>

        <KairosWeekend weekend={"K205"} date={"9/21"}/>

        <KairosWeekend weekend={"K206"} date={"9/21"}/>

        <KairosWeekend weekend={"K207"} date={"10/1"}/>

        <KairosWeekend weekend={"K208"} date={"10/1"}/>

        <KairosWeekend weekend={"K209"} date={"10/1"}/>

        <KairosWeekend weekend={"K210"} date={"10/8"}/>

        <KairosWeekend weekend={"K211"} date={"10/8"}/>

        <KairosWeekend weekend={"K212"} date={"10/8"}/>

        <KairosWeekend weekend={"K213"} date={"10/15"}/>

        <KairosWeekend weekend={"K214"} date={"10/15"}/>

        <KairosWeekend weekend={"K215"} date={"10/15"}/>

        <KairosWeekend weekend={"K216"} date={"10/22"}/>

        <KairosWeekend weekend={"K217"} date={"10/22"}/>

        <KairosWeekend weekend={"K218"} date={"10/22"}/>

        <KairosWeekend weekend={"K219"} date={"10/29"}/>

        <KairosWeekend weekend={"K220"} date={"10/29"}/>

        <KairosWeekend weekend={"K221"} date={"10/29"}/>

        <KairosWeekend weekend={"K222"} date={"10/29"}/>

        <KairosWeekend weekend={"K223"} date={"11/5"}/>

        <KairosWeekend weekend={"K223"} date={"11/5"}/>

        <KairosWeekend weekend={"K224"} date={"11/5"}/>

        <KairosWeekend weekend={"K226"} date={"11/5"}/>

        <KairosWeekend weekend={"K227"} date={"11/12"}/>

        <KairosWeekend weekend={"K228"} date={"11/12"}/>

        <KairosWeekend weekend={"K229"} date={"11/12"}/>

        <KairosWeekend weekend={"K230"} date={"11/19"}/>

        <KairosWeekend weekend={"K231"} date={"11/19"}/>

        <KairosWeekend weekend={"K232"} date={"11/19"}/>

        <KairosWeekend weekend={"K233"} date={"11/19"}/>

        <KairosWeekend weekend={"K234"} date={"11/26"}/>

        <KairosWeekend weekend={"K235"} date={"11/26"}/>

        <KairosWeekend weekend={"K236"} date={"11/26"}/>

        <KairosWeekend weekend={"K237"} date={"12/3"}/>

        <KairosWeekend weekend={"K238"} date={"12/3"}/>

        <KairosWeekend weekend={"K239"} date={"12/3"}/>

        <KairosWeekend weekend={"K240"} date={"12/10"}/>

        <KairosWeekend weekend={"K241"} date={"12/10"}/>

      </div>
      <img
        className="absolute top-[356px] left-[273px] w-[1094px] h-0.5"
        alt=""
        src="/vector-8.svg"
      />
      <img
        className="absolute top-[187px] left-[53px] w-[181px] h-0.5"
        alt=""
        src="/vector-9.svg"
      />
      <img
          className="absolute top-[143px] left-[270px] w-[1097px] h-[175px] object-cover"
          alt=""
          src={process.env.PUBLIC_URL + '/rectangle-26.jpg'}
        />
      <div className="absolute top-[160.5px] left-[58px] text-sm">Retreat</div>
      <div className="absolute top-[161px] left-[157px] text-sm">
        Start Date
      </div>
      <b className="absolute top-[207px] left-[326px] text-[40px] text-white">
        Kairos 201 Letter Books
      </b>
      <div className="absolute top-[220.27px] left-[806px] text-[25.21px] text-dimgray text-right">
        (41)
      </div>
      <div className="absolute top-[328px] left-[365px]">Attendees</div>
      <div className="absolute top-[328px] left-[284px]">#</div>
      <div className="absolute top-[328px] left-[795px]">
        Contributors Invited
      </div>
      <div className="absolute top-[328px] left-[1014px]">
        Letters Submitted
      </div>
      <div className="absolute top-[328px] left-[600px]">Email</div>
      <div className="absolute top-[383px] left-[273px] h-[585px] overflow-y-auto flex flex-col items-center gap-[7px]">
       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={1} />
       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={2} />
       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={3} />
       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={4} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={5} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={6} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={7} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={8} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={9} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={10} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={11} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={12} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={13} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={14} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={15} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={16} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={17} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={18} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={19} />

       <LetterBook name={"Sara Glesaon"} email={"sgleason@bc.edu"} number={20} />

      </div>
      <div className="absolute top-[33px] left-[43px] rounded-8xs bg-maroon w-[1368px] h-[93px]" />
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
      <div className="absolute top-[267px] left-[1184px] rounded-[3px] bg-royalblue w-[167px] flex flex-row p-2.5 box-border items-center justify-center text-white">
        <b className="relative">{`Print 41 Letter Books `}</b>
      </div>
  </div>
  );
};


export default ManyWeekends;