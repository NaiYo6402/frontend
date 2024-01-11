

// ข้อมูล JSON
const data = [
    {
        "dateTimeGetHelp": "2024-01-09 15:50:00",
        "office": "สอท. ณ กรุงเบอร์ลิน(BLN)",
        "systemSupport": "MFA-ePeer",
        "type": "ผ่านการรีโมทต์(TW)",
        "getHelp": "test",
        "nameInform": "",
        "phoneNumber": "",
        "detail": "tset",
        "dateTimeSupport": "2024-01-09 15:51:00",
        "nameSupport": "คนที่1",
        "status": "เสร็จสิ้น",
        "note": "",
        "id": 10
    },
    {
        "dateTimeGetHelp": "2024-01-09 14:43:00",
        "office": "BKK",
        "systemSupport": "WebCentric",
        "type": "ติดตั้งใหม่ ผ่านการรีโมทต์(TW)",
        "getHelp": "สอท.บางกอก มีโทรเลขขอติดตั้ง WCT",
        "nameInform": "",
        "phoneNumber": "",
        "detail": "Remote เข้าไปตรวจสอบและทำการติดตั้ง",
        "dateTimeSupport": "2024-01-09 14:45:00",
        "nameSupport": "คนที่",
        "status": "เสร็จสิ้น",
        "note": "",
        "id": 8
    },
    {
        "dateTimeGetHelp": "2024-01-09 14:15:00",
        "office": "SYD5",
        "systemSupport": "MFA-ePeer",
        "type": "ผ่านการรีโมทต์(TW)",
        "getHelp": "ขอติดตั้งใหม่",
        "nameInform": "",
        "phoneNumber": "",
        "detail": "ทำการติดตั้งให้ใหม่",
        "dateTimeSupport": "2024-01-09 15:17:00",
        "nameSupport": "คนที่2",
        "status": "เสร็จสิ้น",
        "note": "",
        "id": 7
    },
    {
        "dateTimeGetHelp": "2023-01-09 00:00:00",
        "office": "OTT",
        "systemSupport": "MFA-ePeer",
        "type": "ติดตั้งใหม่",
        "getHelp": "ขอติดตั้ง ePeer",
        "nameInform": "smith",
        "phoneNumber": "52203",
        "detail": "รีโมทต์เข้าไปติดตั้ง",
        "dateTimeSupport": "2023-01-09 00:00:00",
        "nameSupport": "ศตวรรษ",
        "status": "ดำเนินการแล้ว",
        "note": "ไม่มี",
        "id": 6
    },
    {
        "dateTimeGetHelp": "2023-01-09 00:00:00",
        "office": "CAI",
        "systemSupport": "MFA-ePeer",
        "type": "ติดตั้งใหม่",
        "getHelp": "ขอติดตั้ง ePeer",
        "nameInform": null,
        "phoneNumber": null,
        "detail": "รีโมทต์เข้าไปติดตั้ง",
        "dateTimeSupport": "2023-01-09 00:00:00",
        "nameSupport": "ชวลิต",
        "status": "ดำเนินการแล้ว",
        "note": null,
        "id": 5
    },
    {
        "dateTimeGetHelp": "2023-01-09 00:00:00",
        "office": "CAI",
        "systemSupport": "MFA-ePeer",
        "type": "ติดตั้งใหม่",
        "getHelp": "ขอติดตั้ง ePeer",
        "nameInform": null,
        "phoneNumber": null,
        "detail": "รีโมทต์เข้าไปติดตั้ง",
        "dateTimeSupport": "2023-01-09 00:00:00",
        "nameSupport": "ชวลิต",
        "status": "ดำเนินการแล้ว",
        "note": null,
        "id": 3
    },
    {
        "dateTimeGetHelp": "2023-01-08 00:00:00",
        "office": "BLN",
        "systemSupport": "WebCentric",
        "type": "ติดตั้งใหม่",
        "getHelp": "ขอติดตั้ง WCT",
        "nameInform": null,
        "phoneNumber": null,
        "detail": "รีโมทต์เข้าไปติดตั้ง",
        "dateTimeSupport": "2023-01-08 00:00:00",
        "nameSupport": "ศรีสกุล",
        "status": "ดำเนินการแล้ว",
        "note": null,
        "id": 2
    },
    {
        "dateTimeGetHelp": "2023-01-08 00:00:00",
        "office": "ANK",
        "systemSupport": "MFA-ePeer",
        "type": "ติดตั้งใหม่",
        "getHelp": "ขอติดตั้ง ePeer",
        "nameInform": null,
        "phoneNumber": null,
        "detail": "รีโมทต์เข้าไปติดตั้ง",
        "dateTimeSupport": "2023-01-08 00:00:00",
        "nameSupport": "ศตวรรษ",
        "status": "ดำเนินการแล้ว",
        "note": null,
        "id": 1
    }
]



const systemSupportCount = {};
data.forEach((item) => {
  if (item.systemSupport) {
    systemSupportCount[item.systemSupport] =
      (systemSupportCount[item.systemSupport] || 0) + 1;
  }
});

console.log('systemSupportCount',systemSupportCount)


// // สร้างออบเจ็กต์เพื่อเก็บจำนวนของแต่ละประเภท
// const systemSupportCount = {};

// // วนลูปผ่านข้อมูลแต่ละรายการ
// data.forEach(item => {
//     // ตรวจสอบว่า key 'systemSupport' มีค่าหรือไม่
//     if (item.systemSupport) {
//         // เพิ่มหรือเพิ่มค่าจำนวนในออบเจ็กต์ systemSupportCount
//         systemSupportCount[item.systemSupport] = (systemSupportCount[item.systemSupport] || 0) + 1;
//     }
// });

// // พิมพ์ผลลัพธ์
// console.log(systemSupportCount);

// js
// {
//     "MFA-ePeer": 6,
//     "WebCentric": 2
// }
// ่แปลงเป็น
// [
//     { y: 6, label: "MFA-ePeer" },
//     { y: 2, label: "WebCentric" }
//   ],

// const data = {
//     "VoIP": 1,
//     "MFA-ePeer": 6,
//     "WebCentric": 2
// };

// // คำนวณผลรวมของตัวเลขทั้งหมด
// const total = Object.values(data).reduce((acc, val) => acc + val, 0);

// // แปลงตัวเลขในออบเจ็กต์เป็นเปอร์เซ็นต์
// const convertedData = Object.entries(data).map(([label, value]) => ({
//     label,
//     y: parseFloat(((value / total) * 100).toFixed(2))
// }));

// console.log(convertedData);

// const data = {
//     "VoIP": 1,
//     "MFA-ePeer": 6,
//     "WebCentric": 2
// };

// const convertedData = Object.entries(data).map(([systemSupport, count]) => ({
//     systemSupport: systemSupport.charAt(0).toUpperCase() + systemSupport.slice(1).toLowerCase(),
//     count
// }));

// console.log(convertedData);


