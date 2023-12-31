import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import NoAttendees from "../components/NoAttendees"


const KairosWeekend = ({weekend, date, selectedWeekend}) => {
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
      className={`flex flex-col p-2.5 items-start justify-start rounded-8xs ${selectedWeekend === weekend ? 'bg-gainsboro-200' : isHovered ? 'bg-gainsboro-100' : 'bg-white'}`}
    >
      <div className="flex flex-row items-start justify-start gap-[112px]">
        <b className="relative">{weekend}</b>
        <div className="relative">{date}</div>
      </div>
    </div>
  );
};


const LetterBook = ({name, email, number, linked, total, place}) => {
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
          <div className="absolute top-[10px] left-[733px]">{number}/{total}</div>
          <div className="absolute top-[0px] left-[939px] rounded-3xs bg-wheat flex flex-row p-2.5 items-center justify-center">
       {linked?  <Link to="/K201/1"> <b className="relative">Manage Palanca</b></Link> :  <b className="relative">Manage Palanca</b> }
          </div>
          <div className="absolute top-[10px] left-[81px]">
            {name}
          </div>
          <div className="absolute top-[10px] left-[316px]">
            {email}
          </div>
          <div className="absolute top-[10px] left-[0px]">{place}</div>
          <div className="absolute top-[10px] left-[513px]">{total}</div>
        </div>
      </div>
    </div>
  );
}


const ManyWeekends = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [selectedWeekend, setSelectedWeekend] = useState(null);



  return (
    <>
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xs text-black font-inter">
      <div className="absolute top-[199px] left-[47px] h-[787px]  overflow-y-auto flex flex-col items-start justify-start gap-[2px]">
          <div onClick={() => setSelectedWeekend("K201") } >
           <KairosWeekend weekend={"K201"} date={"9/5"} selectedWeekend={selectedWeekend}/>
          </div> 
          <div onClick={() => { setSelectedWeekend("K202") }}>
           <KairosWeekend weekend={"K202"} date={"9/5"} selectedWeekend={selectedWeekend}/>
          </div>   
          <div onClick={() => { setSelectedWeekend("K203")}}  >
   
          <KairosWeekend weekend={"K203"} date={"9/12"}  selectedWeekend={selectedWeekend}/>
          </div>
        <div onClick={() => {  setSelectedWeekend("K204") }}  >

        <KairosWeekend weekend={"K204"} date={"9/12"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K205") }}  >

        <KairosWeekend weekend={"K205"} date={"9/21"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K206") }}  >

        <KairosWeekend weekend={"K206"} date={"9/21"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K207") }}  >

        <KairosWeekend weekend={"K207"} date={"10/1"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K208") }}  >

        <KairosWeekend weekend={"K208"} date={"10/1"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K209") }}  >

        <KairosWeekend weekend={"K209"} date={"10/1"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K210") }}  >

        <KairosWeekend weekend={"K210"} date={"10/8"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K211") }} >
        <KairosWeekend weekend={"K211"} date={"10/8" } selectedWeekend={selectedWeekend} />
        </div>



        <div onClick={() => {  setSelectedWeekend("K212") }}  >
        <KairosWeekend weekend={"K212"} date={"10/8"}  selectedWeekend={selectedWeekend}/>
        </div>


        <div onClick={() => {  setSelectedWeekend("K213") }} >
        <KairosWeekend weekend={"K213"} date={"10/15"} selectedWeekend={selectedWeekend} />
        </div>


        <div onClick={() => {  setSelectedWeekend("K214") }} >
        <KairosWeekend weekend={"K214"} date={"10/15"} selectedWeekend={selectedWeekend}  />
        </div>


        <div onClick={() => {  setSelectedWeekend("K215") }}  >
        <KairosWeekend weekend={"K215"} date={"10/15"} selectedWeekend={selectedWeekend}/>
        </div>


        <div onClick={() => {  setSelectedWeekend("K216") }}  >
        <KairosWeekend weekend={"K216"} date={"10/22"} selectedWeekend={selectedWeekend} />
        </div>


        <div onClick={() => {  setSelectedWeekend("K217") }} >
        <KairosWeekend weekend={"K217"} date={"10/22"} selectedWeekend={selectedWeekend} />
        </div>


        <div onClick={() => {  setSelectedWeekend("K218") }} >
        <KairosWeekend weekend={"K218"} date={"10/22"} selectedWeekend={selectedWeekend}  />
        </div>


        <div onClick={() => {  setSelectedWeekend("K219") }}  >
        <KairosWeekend weekend={"K219"} date={"10/29"} selectedWeekend={selectedWeekend} />
        </div>


        <div onClick={() => {  setSelectedWeekend("K220") }}   >
        <KairosWeekend weekend={"K220"} date={"10/29"} selectedWeekend={selectedWeekend} />
        </div>


        <div onClick={() => {  setSelectedWeekend("K221") }}   >
        <KairosWeekend weekend={"K221"} date={"10/29"} selectedWeekend={selectedWeekend} />
        </div>

        <div onClick={() => {  setSelectedWeekend("K222") }}  >
        <KairosWeekend weekend={"K222"} date={"10/29"}  selectedWeekend={selectedWeekend} />
        </div>


        <div onClick={() => {  setSelectedWeekend("K223") }} selectedWeekend={selectedWeekend}  >
        <KairosWeekend weekend={"K223"} date={"11/5"} />
        </div>

        <div onClick={() => {  setSelectedWeekend("K224") }}  >

        <KairosWeekend weekend={"K224"} date={"11/5"}  selectedWeekend={selectedWeekend}/>
        </div>


        <div onClick={() => {  setSelectedWeekend("K225") }}  >

        <KairosWeekend weekend={"K225"} date={"11/5"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K226")}}  >

        <KairosWeekend weekend={"K226"} date={"11/5"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K227") }}  >

        <KairosWeekend weekend={"K227"} date={"11/12"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K228") }}  >

        <KairosWeekend weekend={"K228"} date={"11/12"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K229") }}  >

        <KairosWeekend weekend={"K229"} date={"11/12"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K230") }}  >

        <KairosWeekend weekend={"K230"} date={"11/19"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K231") }}  >

        <KairosWeekend weekend={"K231"} date={"11/19"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K232") }}  >

        <KairosWeekend weekend={"K232"} date={"11/19"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K233") }}  >

        <KairosWeekend weekend={"K233"} date={"11/19"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K234") }}  >

        <KairosWeekend weekend={"K234"} date={"11/26"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K235") }}  >

        <KairosWeekend weekend={"K235"} date={"11/26"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K236") }}  >

        <KairosWeekend weekend={"K236"} date={"11/26"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K236") }}  >

        <KairosWeekend weekend={"K237"} date={"12/3"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K338") }}  >

        <KairosWeekend weekend={"K238"} date={"12/3"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K339") }}  >

        <KairosWeekend weekend={"K239"} date={"12/3"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K340") }}  >

        <KairosWeekend weekend={"K240"} date={"12/10"} selectedWeekend={selectedWeekend}/>
        </div>

        <div onClick={() => {  setSelectedWeekend("K341") }}  >

        <KairosWeekend weekend={"K241"} date={"12/10"} selectedWeekend={selectedWeekend}/>
        </div>

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
        Kairos 201
      </b>
      <div className="absolute top-[220.27px] left-[806px] text-[25.21px] text-dimgray text-right">
        (20)
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

      {selectedWeekend !== "K201" ? <NoAttendees/> : ( 
      <div className="absolute top-[383px] left-[273px] h-[585px] overflow-y-auto flex flex-col items-center gap-[7px]">
       <LetterBook place={1} name={"Stevie Gleason"} email={"skgleason@bc.edu"} number={25} total={28} linked={true}/>
       <LetterBook place={2} name={"Sara Gleason"} email={"sgleason@bc.edu"} number={45} total={62}/>
       <LetterBook place={3} name={"Amy Gleason"} email={"agleason@bc.edu"} number={42} total={69} />
       <LetterBook place={4} name={"David Gleason"} email={"dgleason@bc.edu"} number={59} total={59} />

       <LetterBook place={5} name={"Eliza Gleason"} email={"egleason@bc.edu"} number={57} total={62} />

       <LetterBook place={6} name={"Paul Koontz III"} email={"pkoontz3@bc.edu"} number={60}  total={68}/>

       <LetterBook place={7} name={"Arden Koontz"} email={"akoontz@bc.edu"} number={61} total={82}/>

       <LetterBook place={8} name={"Paul Koontz Jr."} email={"pkoontz2@bc.edu"} number={48} total={52} />

       <LetterBook place={9} name={"Caden Koontz"} email={"ckoontz@bc.edu"} number={35} total={42}/>

       <LetterBook place={10} name={"Rosie Koontz"} email={"rkoonz@bc.edu"} number={39} total={42} />

       <LetterBook place={11} name={"Griffen Koontz"} email={"gkoontz@bc.edu"} number={40} total={52}/>

       <LetterBook place={12} name={"Stephen Sullivan"} email={"ssullivan@bc.edu"} number={42} total={12} />

       <LetterBook place={13} name={"Sean Smith"} email={"ssmith@bc.edu"} number={41} total={53} />

       <LetterBook place={14} name={"Joe Smith"} email={"jsmith@bc.edu"} number={60} total={81} />

       <LetterBook place={15} name={"Nick Chappealear"} email={"nchappealear@bc.edu"} number={61} total={89} />

       <LetterBook place={16} name={"Elle Young"} email={"eyoung@bc.edu"} number={58} total={81} />

       <LetterBook place={17} name={"Adam Young"} email={"ayoung@bc.edu"} number={55} total={90}/>

       <LetterBook place={18} name={"Bob Irwin"} email={"bobirwin@bc.edu"} number={54} total={80} />

       <LetterBook place={19} name={"MB Irwin"} email={"mbirwin@bc.edu"} number={41} total={58}/>

       <LetterBook place={20} name={"Barry Gleason"} email={"bgleason@bc.edu"} number={51} total={72}/>

      </div>
      )}
      <div className="absolute top-[33px] left-[43px] rounded-8xs bg-maroon w-[1368px] h-[93px]" />
      <img
        className="absolute top-[41px] left-[130px] w-[138px] h-[78px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
      <b className="absolute top-[73px] left-[68px] font-helvetica text-white">
        Kairos
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
        <b className="relative">{`Print Palanca Notebooks`}</b>
      </div>
  </div>
  </>
  );
};


export default ManyWeekends;