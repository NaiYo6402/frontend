import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CanvasJSReact from "@canvasjs/react-charts";
import { configAXIOS } from "../helper/configAxios";
import axios from "axios";
function Report() {
  const [loading, setLoading] = useState(false);
  const [dataListGetHelp, setDataListGetHelp] = useState([]);
  const [dataPicSystem, setDataPicSystem] = useState({});
  const [dataPicSystemCount, setDataPicSystemCount] = useState([]);
  useEffect(() => {
    setLoading(true);
    const getListGetHelp = configAXIOS("get", "user/getListGetHelp");
    axios(getListGetHelp)
      .then((res) => {
        if (res.status == 200) {
          const dataRespones = res.data.data;
          const data = [];
          dataRespones.map((element) => {
            const {
              dateTimeGetHelp,
              office,
              systemSupport,
              type,
              getHelp,
              nameInform,
              phoneNumber,
              detail,
              dateTimeSupport,
              nameSupport,
              status,
              note,
              id,
            } = element;
            data.push({
              dateTimeGetHelp: formatDate(new Date(dateTimeGetHelp)),
              office,
              systemSupport,
              type,
              getHelp,
              nameInform,
              phoneNumber,
              detail,
              dateTimeSupport: formatDate(new Date(dateTimeSupport)),
              nameSupport,
              status,
              note,
              id,
            });
          });
          createPicSystem(data);
          setDataListGetHelp(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const createPicSystem = (data) => {
    const systemSupportCount = {};
    data.forEach((item) => {
      if (item.systemSupport) {
        systemSupportCount[item.systemSupport] =
          (systemSupportCount[item.systemSupport] || 0) + 1;
      }
    });

    //แปลงเป็นจำนวน Array
    const convertedDataCount = Object.entries(systemSupportCount).map(
      ([systemSupport, count]) => ({
        systemSupport:
          systemSupport.charAt(0).toUpperCase() +
          systemSupport.slice(1).toLowerCase(),
        count,
      })
    );
    setDataPicSystemCount(convertedDataCount);
    const total = Object.values(systemSupportCount).reduce(
      (acc, val) => acc + val,
      0
    );
    // แปลงตัวเลขในออบเจ็กต์เป็นเปอร์เซ็นต์
    const convertedData = Object.entries(systemSupportCount).map(
      ([label, value]) => ({
        label,
        y: parseFloat(((value / total) * 100).toFixed(2)),
      })
    );

    setDataPicSystem(convertedData);
  };

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join("-") +
      " " +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(":")
    );
  }

  const CanvasJS = CanvasJSReact.CanvasJS;
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    title: {
      text: "สถิติระบบที่แจ้งปัญหา",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: dataPicSystem,
      },
    ],
  };

  return (
    <div>
      <Header page={"ออกสรุปผลงาน"} />
      <div className="px-[2%] mt-10 ">
        <p className=" font-semibold text-[20px] text-center">
          ออกรายงาน (อยู่ในช่วงการทดสอบ)
        </p>
      </div>
      <div className="flex justify-center mt-10 mb-20">
        <div className="w-[500px]">
          <CanvasJSChart options={options} />
          <p className=" font-bold ">รายละเอียด</p>
          <div>
            {dataPicSystemCount.map((data, idx) => {
              return (
                <p key={idx}>
                  {data.systemSupport} จำนวน{" "}
                  <span className="text-red-500 font-bold">{data.count}</span>{" "}
                  ครั้ง
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
