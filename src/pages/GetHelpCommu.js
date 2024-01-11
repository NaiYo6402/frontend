import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../components/Header";
import { configAXIOS } from "../helper/configAxios";
import axios from "axios";
import SaveIcon from "@mui/icons-material/Save";
import Swal from "sweetalert2";
import LoadingScreen from "../components/LoadingScreen";
import embassies from "../data/embassy.json";
import user from "../data/user.json";

function GetHelpCommu() {
  const history = useHistory();
  const [dateTimeGetHelp, setDateTimeGetHelp] = useState("");
  const [office, setOffice] = useState("");
  const [system, setSystem] = useState("MFA-ePeer");
  const [type, setType] = useState("แก้ไข ผ่านการรีโมทต์(TW)");
  const [getHelp, setGetHelp] = useState("");
  const [nameInform, setNameInform] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [detail, setDetail] = useState("");
  const [dateTimeSupport, setDateTimeSupport] = useState("");
  const [nameSupport, setNameSupport] = useState("");
  const [status, setStatus] = useState("ดำเนินการสำเร็จ");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (
      dateTimeGetHelp === "" ||
      office === "" ||
      system === "" ||
      type === "" ||
      getHelp === "" ||
      detail === "" ||
      dateTimeSupport === "" ||
      nameSupport === "" ||
      status === ""
    ) {
      return Swal.fire({
        text: "กรุณากรอกข้อมูลให้ครบ",
        icon: "info",
        confirmButtonText: "กลับ",
      });
    }

    let codeEmbassy = "";
    const foundEmbassy = embassies.find(
      (embassy) => embassy.abbreviation === office.toUpperCase()
    );

    if (foundEmbassy) {
      codeEmbassy = foundEmbassy.embassy;
    } else {
      return Swal.fire({
        text: `ไม่พบ สอท./สกญ./สนง.การค้าฯ ${office.toUpperCase()}`,
        icon: "info",
        confirmButtonText: "กลับ",
      });
    }

    Swal.fire({
      text: "ยืนยันเพิ่มรายการ",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "กลับ",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const dataReq = {
          dateTimeGetHelp,
          office: codeEmbassy,
          systemSupport: system,
          type,
          getHelp,
          nameInform,
          phoneNumber,
          detail,
          dateTimeSupport,
          nameSupport,
          status,
          note,
        };
        setLoading(true);
        const setDataGetHelpAPI = configAXIOS(
          "post",
          `user/setDataGetHelp`,
          dataReq
        );
        axios(setDataGetHelpAPI)
          .then((response) => {
            if (response.status == 200) {
              console.log("response", response);
              setLoading(false);
              history.push("/");
            }
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }
    });
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Header page={"บันทึกรายการปัญหา"} />
      <div className="px-[10%] my-10  ">
        <p className=" font-semibold text-[20px] text-center ">
          {" "}
          บันทึกรายการแก้ไขปัญหา ปี 2567
        </p>
        <div className="mt-6 flex flex-col items-center">
          <div className="flex flex-row ">
            <div className="mx-2">
              <p className="text-[16px] font-bold ">
                วัน/เวลาแจ้งปัญหา <span className="text-red-500">*</span>
              </p>
              <input
                className="border-[1px] border-black rounded-[5px] pl-2 py-[2px] w-[450px] "
                type="datetime-local"
                value={dateTimeGetHelp}
                onChange={(e) => setDateTimeGetHelp(e.target.value)}
              />
            </div>
            <div className="mx-2">
              <p className="text-[16px] font-bold ">
                สอท./สกญ. <span className="text-red-500">เช่น ANK *</span>
              </p>
              <input
                className="border-[1px] border-black rounded-[5px] pl-2 py-[2px] w-[450px] "
                type="text"
                value={office}
                onChange={(e) => setOffice(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-row mt-4 ">
            <div className="mx-2">
              <p className="text-[16px] font-bold ">
                ระบบที่จัดการแก้ไข <span className="text-red-500">*</span>
              </p>
              <select
                className="border-[1px] border-black rounded-[5px] pl-2 py-[2px] w-[450px] "
                value={system}
                onChange={(e) => setSystem(e.target.value)}
              >
                <option value="MFA-ePeer">MFA-ePeer</option>
                <option value="WebCentric">WebCentric</option>
                <option value="VoIP">VoIP</option>
                <option value="TheSuriya">TheSuriya</option>
                <option value="อื่นๆ ">อื่นๆ</option>
              </select>
            </div>
            <div className="mx-2">
              <p className="text-[16px] font-bold ">
                จัดการโดย <span className="text-red-500">*</span>
              </p>
              <select
                className="border-[1px] border-black rounded-[5px] pl-2 py-[2px] w-[450px] "
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="แก้ไข ผ่านการรีโมทต์(TW)">
                  แก้ไข ผ่านการรีโมทต์(TW)
                </option>
                <option value="ติดตั้งใหม่ ผ่านการรีโมทต์(TW)">
                  ติดตั้งใหม่ ผ่านการรีโมทต์(TW)
                </option>
                <option value="แก้ไขจากที่ทำงาน">แก้ไข จากที่ทำงาน</option>
                <option value="ติดตั้งใหม่ จากที่ทำงาน">
                  ติดตั้งใหม่ จากที่ทำงาน
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-row mt-4 ">
            <div className="mx-2">
              <p className="text-[16px] font-bold">ชื่อผู้แจ้งปัญหา</p>
              <input
                className="border-[1px] border-black rounded-[5px] pl-2 py-[2px] w-[450px] "
                type="text"
                value={nameInform}
                onChange={(e) => setNameInform(e.target.value)}
              />
            </div>
            <div className="mx-2">
              <p className="text-[16px] font-bold">หมายเลขโทรศัพท์</p>
              <input
                className="border-[1px] border-black rounded-[5px] pl-2 py-[2px] w-[450px] "
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row mt-4 ">
            <div className="mx-2">
              <p className="text-[16px] font-bold">
                อาการ/ปัญหา ที่เกิดขึ้น <span className="text-red-500">*</span>
              </p>
              <input
                className="border-[1px] border-black rounded-[5px] pl-2 py-[2px] w-[450px] "
                type="text"
                value={getHelp}
                onChange={(e) => setGetHelp(e.target.value)}
              />
            </div>
            <div className="mx-2">
              <p className="text-[16px] font-bold">
                รายละเอียดการแก้ไข <span className="text-red-500">*</span>
              </p>
              <input
                className="border-[1px] border-black rounded-[5px] pl-2 py-[2px] w-[450px] "
                type="text"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row mt-4 ">
            <div className="mx-2">
              <p className="text-[16px] font-bold">
                วันที่ดำเนินการแก้ไข <span className="text-red-500">*</span>
              </p>
              <input
                className="border-[1px] border-black rounded-[5px] pl-2 py-[2px] w-[450px] "
                type="datetime-local"
                value={dateTimeSupport}
                onChange={(e) => setDateTimeSupport(e.target.value)}
              />
            </div>
            <div className="mx-2">
              <p className="text-[16px] font-bold">
                ผู้ดำเนินการแก้ไข <span className="text-red-500">*</span>
              </p>
              <select
                className="border-[1px] border-black rounded-[5px] pl-2 py-[2px] w-[450px] "
                value={nameSupport}
                onChange={(e) => setNameSupport(e.target.value)}
              >
                <option value={""}>เลือกรายชื่อ</option>
                {user.map((data, key) => (
                  <option key={key} value={data.name}>
                    {" "}
                    {data.name}{" "}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-row mt-4 ">
            <div className="mx-2">
              <p className="text-[16px] font-bold">
                สถานะดำเนินการ <span className="text-red-500">*</span>
              </p>
              <select
                className="border-[1px] border-black rounded-[5px] pl-2 py-[2px] w-[450px] "
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="ดำเนินการสำเร็จ">ดำเนินการสำเร็จ</option>
                <option value="อยู่ระหว่างดำเนินการ(ติดปัญหา)">อยู่ระหว่างดำเนินการ(ติดปัญหา)</option>
              </select>
            </div>
            <div className="mx-2">
              <p className="text-[16px] font-bold">
                ติดปัญหาเนื่องจาก{" "}
                <span className="text-red-500"> กรณีเกิดปัญหา</span>
              </p>
              <input
                className="border-[1px] border-black rounded-[5px] pl-2 py-[2px] w-[450px] "
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-10">
            <button
              className="bg-[#820300] text-[20px] text-white font-bold px-6 py-[8px] rounded-lg"
              onClick={handleSubmit}
            >
              {" "}
              <SaveIcon style={{ color: "#ffffff" }} /> บันทึกรายการ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetHelpCommu;
