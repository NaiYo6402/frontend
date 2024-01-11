import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../components/Header";
import { configAXIOS } from "../helper/configAxios";
import axios from "axios";
import MaterialTable from "material-table";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoadingScreen from "../components/LoadingScreen";
import Swal from "sweetalert2";

function ListCommuSupport() {
  const history = useHistory();
  const [dataListGetHelp, setDataListGetHelp] = useState([]);
  const [loading, setLoading] = useState(false);
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
          setDataListGetHelp(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

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

  const handleDelete = (id) => {
    Swal.fire({
      text: `ยืนยันลบรายการที่ ${id}`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "กลับ",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        const updateDataGetHelpAPI = configAXIOS(
          "post",
          `user/deleteDataGetHelp`,
          { id }
        );
        axios(updateDataGetHelpAPI)
          .then((response) => {
            if (response.status == 200) {
              console.log("response", response);
              setLoading(false);
              window.location.reload();
            }
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }
    });
  };

  const columns = [
    { title: "ลำดับ", field: "id" },
    { title: "วันที่แจ้ง", field: "dateTimeGetHelp" },
    { title: "สอท./สกญ.", field: "office" },
    { title: "ระบบที่แก้ไข", field: "systemSupport" },
    { title: "แจ้งเรื่อง", field: "getHelp" },
    { title: "ผู้แจ้ง", field: "nameInform" },
    { title: "โทรศัพท์", field: "phoneNumber" },
    { title: "การจัดการ", field: "type" },
    { title: "วันที่แก้ไข", field: "dateTimeSupport" },
    { title: "ชื่อผู้แก้ไข", field: "nameSupport" },
    { title: "รายละเอียดการแก้ไข", field: "detail" },
    { title: "สถานะ", field: "status" },
    { title: "หมายเหตุ", field: "note" },
    {
      title: "Action",
      render: (row) => {
        return (
          <div className="flex flex-row">
            <button
              onClick={() => {
                console.log("แก้ไอดี", row.id);
                history.push({
                  pathname: "/edit",
                  state: {
                    dateTimeGetHelpEdit: row.dateTimeGetHelp,
                    officeEdit: row.office,
                    systemSupportEdit: row.systemSupport,
                    typeEdit: row.type,
                    getHelpEdit: row.getHelp,
                    nameInformEdit: row.nameInform,
                    phoneNumberEdit: row.phoneNumber,
                    detailEdit: row.detail,
                    dateTimeSupportEdit: row.dateTimeSupport,
                    nameSupportEdit: row.nameSupport,
                    statusEdit: row.status,
                    noteEdit: row.note,
                    id: row.id,
                  },
                });
              }}
              className=" bg-[#FF9800] text-white w-16 py-2 rounded-md "
            >
              แก้ไข
            </button>
            <button
              onClick={() => handleDelete(row.id)}
              className=" bg-[#B80000] text-white w-16 py-2 rounded-md ml-2 "
            >
              ลบ
            </button>
          </div>
        );
      },
    },
  ];
  const rowStyle = (rowData) => {
    return rowData.status == "ดำเนินการสำเร็จ"
      ? { color: "black" }
      : { color: "red", fontWeight: "bold", backgroundColor: "#f0f0f0" };
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Header page={"บันทึกรายการปัญหา"} />
      <div className="px-[2%] my-10  ">
        <p className=" font-semibold text-[20px] text-center ">
          {" "}
          รายการการแก้ไขปัญหาต่างๆให้กับ สอท./สกญ./คผถ./สนง.การค้าฯ ปี 2567
        </p>
        <div className=" flex  w-full justify-end  mt-4">
          <button
            className="bg-[#00ADB5] p-2 text-white font-bold rounded-lg "
            onClick={() => history.push("/gethelpcommu")}
          >
            {" "}
            <AddCircleIcon style={{ color: "#ffffff" }} /> เพิ่มรายการ
          </button>
        </div>
        <div className="text-[14px] mt-4">
          <MaterialTable
            columns={columns}
            data={dataListGetHelp}
            title=""
            options={{
              grouping: true,
              filtering: true,
              columnsButton: true,
              exportButton: {
                csv: true,
              },
              exportAllData: true,
              pageSize: 20,
              pageSizeOptions: [10, 20, 40, 60, 80, 100],
              search: true,
              rowStyle: rowStyle,
              headerStyle: {
                fontSize: 16,
                fontFamily: "Prompt",
                fontWeight: "bold",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ListCommuSupport;
