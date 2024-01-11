import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import background from "../assets/images/bg1.webp";
const LogoMFA = require("../assets/images/mfa-svg.png");
function Homepage() {
  const history = useHistory();
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
      className=" h-screen flex justify-center items-center "
    >
      <div className="flex flex-col items-center">
        <img src={LogoMFA} width={160} height={160} />
        <p className="text-white font-bold text-[32px]">
          Commu ICT Application
        </p>
        <p className="text-white text-[18px]">
          รวมแอปพลิเคชั่นใช้ภายในของฝ่ายระบบสื่อสาร
        </p>
        <div className="bg-white p-10  rounded-[20px] mt-4 flex flex-col">
          <p className="font-bold">เลือกระบบที่ต้องการเข้าใช้งาน</p>
          <button
            className="mt-2 w-[350px] border-[1px] p-2 border-black hover:bg-sky-700 hover:text-white"
            onClick={() => window.open("http://10.0.142.62:3033", "_blank")}
          >
            ระบบบันทึกการแก้ไขปัญหา
          </button>
          <button
            className="mt-2 w-[350px] border-[1px] p-2 border-black hover:bg-sky-700 hover:text-white"
            onClick={() => window.open("http://10.0.142.62", "_blank")}
          >
            ระบบสร้างใบปะหน้าโทรเลขลับ
          </button>
          <button
            className="mt-2 w-[350px] border-[1px] p-2 border-black hover:bg-sky-700 hover:text-white"
            onClick={() => window.open("http://10.0.142.30", "_blank")}
          >
            ระบบจัดการวิทยุสื่อสารและยืมคืน
          </button>
          <button
            className="mt-2 w-[350px] border-[1px] p-2 border-black hover:bg-sky-700 hover:text-white"
            onClick={() => window.open("http://10.0.142.54", "_blank")}
          >
            ระบบ WebCentric (LAB)
          </button>
          <button className="mt-2 w-[350px] border-[1px] p-2 border-black hover:bg-sky-700 hover:text-white">
            ระบบจัดตารางเข้าเวรสื่อสาร
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
