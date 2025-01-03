import React from 'react';
import Image from "next/image";
const btsSkyTrain = "/logo/bts_skytrain.png";
const mrta = "/logo/mrta.png";
const srtet = "/logo/srtet.png";
const srt = "/logo/srt.png";
const cp_exboat = "/logo/cp_exboat.png";
const bus = "/logo/bus.png";
const exat = "/logo/exat.png";
const hwy = "/logo/hwy.png";

const logo = {
    'ระบบรถไฟฟ้า BTS': { src: btsSkyTrain, width: 50, height: 50 },
    'รถไฟฟ้ามหานคร': { src: mrta, width: 50, height: 50 },
    'รถไฟฟ้า รฟท.': { src: srtet, width: 50, height: 50 },
    'การรถไฟแห่งประเทศไทย': { src: srt, width: 50, height: 50 },
    'เรือด่วนเจ้าพระยา': { src: cp_exboat, width: 50, height: 50 },
    'รถเมล์สายต่างๆ': { src: bus, width: 50, height: 50 },
    'ทางด่วนในกรุงเทพมหานคร': {src: exat, width: 50, height: 50 },
    'ทางหลวงชนบท': {src: hwy, width: 50, height: 50 },
};

const statusData = [
    {
        title: 'ระบบรถไฟฟ้า BTS',
        upvotes: 0, // Example upvote count
        items: [
            { label: 'สายสุขุมวิท', status: 'ไม่มีข้อมูล' },
            { label: 'สายสีลม', status: 'ไม่มีข้อมูล' },
            { label: 'สายสีทอง', status: 'ไม่มีข้อมูล' },
            { label: 'สายสีเหลือง', status: 'ไม่มีข้อมูล' },
            { label: 'สายสีชมพู', status: 'ไม่มีข้อมูล' },
        ],
    },
    {
        title: 'รถไฟฟ้ามหานคร',
        upvotes: 0,
        items: [
            { label: 'สายสีน้ำเงิน', status: 'ไม่มีข้อมูล' },
            { label: 'สายสีม่วง', status: 'ไม่มีข้อมูล' },
            { label: 'สายสีส้ม', status: 'ไม่มีข้อมูล' },
        ],
    },
    {
        title: 'รถไฟฟ้า รฟท.',
        upvotes: 0,
        items: [
            { label: 'สายสีแดง (รังสิต-บางซื่อ)', status: 'ไม่มีข้อมูล' },
            { label: 'สายสีแดง (ตลิ่งชัน-บางซื่อ)', status: 'ไม่มีข้อมูล' },
            { label: 'แอร์พอร์ต เรล ลิงก์', status: 'ไม่มีข้อมูล' },
        ],
    },
    {
        title: 'การรถไฟแห่งประเทศไทย',
        upvotes: 0,
        items: [
            { label: 'สายเหนือ', status: 'ไม่มีข้อมูล' },
            { label: 'สายตะวันออกเฉียงเหนือ', status: 'ไม่มีข้อมูล' },
            { label: 'สายตะวันออก', status: 'ไม่มีข้อมูล' },
            { label: 'สายใต้', status: 'ไม่มีข้อมูล' },
            { label: 'สายวงเวียนใหญ่-มหาชัย', status: 'ไม่มีข้อมูล' },
            { label: 'สายมหาชัย-แม่กลอง', status: 'ไม่มีข้อมูล' },
        ],
    },
    {
        title: 'เรือด่วนเจ้าพระยา',
        upvotes: 0,
        items: [
            { label: 'ธงส้ม', status: 'ไม่มีข้อมูล' },
            { label: 'ธงเหลือง', status: 'ไม่มีข้อมูล' },
            { label: 'ธงเขียวเหลือง', status: 'ไม่มีข้อมูล' },
            { label: 'ธงทอง', status: 'ไม่มีข้อมูล' },
            { label: 'ธงแดง', status: 'ไม่มีข้อมูล' },
            { label: 'ธงฟ้า (เรือท่องเที่ยว)', status: 'ไม่มีข้อมูล' },
            { label: 'ไทยสมายล์โบ้ท', status: 'ไม่มีข้อมูล' },
        ],
    },
    {
        title: 'รถเมล์สายต่างๆ',
        upvotes: 0,
        items: [
            { label: 'รถโดยสารด่วนพิเศษ BRT', status: 'ไม่มีข้อมูล' },
            { label: 'รถเมล์ ขสมก.', status: 'ไม่มีข้อมูล' },
            { label: 'ไทยสมายล์บัส', status: 'ไม่มีข้อมูล' },
            { label: 'รถสองแถว', status: 'ไม่มีข้อมูล' },
        ],
    },
    {
        title: 'ทางด่วนในกรุงเทพมหานคร',
        upvotes: 0,
        items: [
            { label: 'เฉลิมมหานคร', status: 'ไม่มีข้อมูล' },
            { label: 'ศรีรัช', status: 'ไม่มีข้อมูล' },
            { label: 'ฉลองรัช', status: 'ไม่มีข้อมูล' },
            { label: 'บูรพาวิถี', status: 'ไม่มีข้อมูล' },
            { label: 'ทางพิเศษสาย S1', status: 'ไม่มีข้อมูล' },
            { label: 'กาญจนาภิเษก (ฝั่งใต้)', status: 'ไม่มีข้อมูล' },
            { label: 'อุดรรัถยา', status: 'ไม่มีข้อมูล' },
            { label: 'ประจิมรัถยา', status: 'ไม่มีข้อมูล' },
            { label: 'ดอนเมืองโทลล์เวย์', status: 'ไม่มีข้อมูล' },
        ],
    },
    {
        title: 'ทางหลวงชนบท',
        upvotes: 0,
        items: [
            { label: 'ถนน พหลโยธิน', status: 'ไม่มีข้อมูล' },
            { label: 'ถนน มิตรภาพ', status: 'ไม่มีข้อมูล' },
            { label: 'ถนน สุขุมวิท', status: 'ไม่มีข้อมูล' },
            { label: 'ถนน เพชรเกษม', status: 'ไม่มีข้อมูล' },
            { label: 'มอเตอร์เวย์ สาย M5', status: 'ไม่มีข้อมูล' },
            { label: 'มอเตอร์เวย์ สาย M6', status: 'ไม่มีข้อมูล' },
            { label: 'มอเตอร์เวย์ สาย M7 (กรุงเทพ-ชลบุรี)', status: 'ไม่มีข้อมูล' },
            { label: 'มอเตอร์เวย์ สาย M8', status: 'ไม่มีข้อมูล' },
            { label: 'มอเตอร์เวย์ สาย M9 (กาญจนาภิเษก)', status: 'ไม่มีข้อมูล' },
        ],
    },
];

function Status() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-base-200">
            {statusData.map((section) => (
                <div key={section.title} className="bg-base-100 p-4 rounded relative pb-8">
                    {/* Title and Logo */}
                    <div className="flex items-center mb-2">
                        {logo[section.title] && (
                            <Image
                                className="mr-2"
                                src={logo[section.title].src}
                                alt={section.title}
                                width={40} // Reduced size for mobile
                                height={40} // Reduced size for mobile
                            />
                        )}
                        <h3 className="text-sm sm:text-lg font-semibold">{section.title}</h3>
                    </div>
                    {/* Items List */}
                    <ul className="list-none">
                        {section.items.map((item) => (
                            <li key={item.label} className="flex items-center justify-between mb-1">
                                <div className="flex items-center">
                                    {logo[item.label] && (
                                        <Image
                                            className="mr-2"
                                            src={logo[item.label].src}
                                            alt={item.label}
                                            width={40} // Reduced size for mobile
                                            height={40} // Reduced size for mobile
                                        />
                                    )}
                                    <span className="text-xs sm:text-sm">{item.label}</span>
                                </div>
                                <span
                                    className={`px-2 py-1 text-xs sm:text-sm rounded-sm ${
                                        item.status === 'ปิดให้บริการ'
                                            ? 'bg-error text-error-content'
                                            : item.status === 'หนาแน่น' || item.status === 'รถติด'
                                                ? 'bg-warning text-warning-content'
                                                : 'bg-success text-success-content'
                                    }`}
                                >
                                    {item.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                    {/* Upvotes */}
                    <div className="absolute bottom-2 right-2 text-xs sm:text-sm text-gray-500">
                        {section.upvotes === 0
                            ? "ไม่มีการโหวต"
                            : section.upvotes === 1
                                ? "1 โหวต"
                                : `${section.upvotes} โหวต`}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Status;