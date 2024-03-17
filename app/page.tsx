"use client"

import { useState } from "react";
import MeetingPage from "../MeetingPage/page"

export default function Home() {
  const [show, setShow] = useState(false);
  const payload = {
      role:'0',
      sdkKey:'D3D689iDTzuGtvl3xlG7xg',
      sdkSecret:'Q7eMapJsOQqMTLTc13ruiO9BjAhxNM4E',
      passWord:'xnAKP2',
      userName:'Arjun',
      userEmail:'random@gmail.com',
      url:'http://localhost:3000',
      meetingNumber:'74109435376'
  }
  return (<div className="flex h-full w-full justify-center items-center mt-[30%]">
    <button onClick={() => setShow(true)} className="bg-black text-white p-3 rounded cursor-pointer">Enter a meeting</button>
    {
      show && (
        <MeetingPage payload={payload}/>
      )
    }
  </div>
  );
}
