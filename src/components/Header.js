import React from "react";
import NavMenu from "./NavMenu";
function Header({page}) {
  return (
    <div>
      <div className="bg-[#00ADB5] p-5">
        <p className=" text-[24px] font-bold text-white text-center">
          แจ้งขอความช่วยเหลือฝ่ายระบบสื่อสาร Commu....GetHelp
        </p>
      </div>
      <NavMenu page={page} />
    </div>
  );
}

export default Header;
