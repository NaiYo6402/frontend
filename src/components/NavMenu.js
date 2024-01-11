import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function NavMenu({page}) {
    const history = useHistory()
  return (
    <div className="flex bg-[#222831] px-[10%] h-10 ">
      <button
        className="px-4 font-bold"
        style={{ backgroundColor: page == "บันทึกรายการปัญหา" ? "white" : "#222831", color: page == "บันทึกรายการปัญหา" ? "#222831" : "white"}}
        onClick={ () => history.push("/") }
      >
        บันทึกรายการปัญหา
      </button>

      <button
        className="px-4 font-bold "
        style={{ backgroundColor: page == "ออกสรุปผลงาน" ? "white" : "#222831", color: page == "ออกสรุปผลงาน" ? "#222831" : "white"}}
        onClick={ () => history.push("/report") }
      >
        ออกสรุปผลงาน
      </button>
      {/* <button>4</button> */}
    </div>
  );
}

export default NavMenu;
