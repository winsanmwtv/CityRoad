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
    'ระบบรถไฟฟ้าขนส่งมวลชนกรุงเทพ (BTS)': { src: btsSkyTrain, width: 50, height: 50 },
    'การรถไฟฟ้าขนส่งมวลชนแห่งประเทศไทย': { src: mrta, width: 50, height: 50 },
    'รถไฟฟ้า รฟท.': { src: srtet, width: 50, height: 50 },
    'การรถไฟแห่งประเทศไทย': { src: srt, width: 50, height: 50 },
    'เรือด่วนเจ้าพระยา': { src: cp_exboat, width: 50, height: 50 },
    'รถเมล์สายต่างๆ': { src: bus, width: 50, height: 50 },
    'ทางด่วนในกรุงเทพมหานคร': {src: exat, width: 50, height: 50 },
    'ทางหลวงชนบท': {src: hwy, width: 50, height: 50 },
};

const statusData = [
    {
        title: 'ระบบรถไฟฟ้าขนส่งมวลชนกรุงเทพ (BTS)',
        upvotes: 0, // Example upvote count
        items: [
            { label: 'สายสุขุมวิท', status: 'ปกติ' },
            { label: 'สายสีลม', status: 'ปกติ' },
            { label: 'สายสีทอง', status: 'ปกติ' },
            { label: 'สายสีเหลือง', status: 'ปกติ' },
            { label: 'สายสีชมพู', status: 'ปกติ' },
        ],
    },
    {
        title: 'การรถไฟฟ้าขนส่งมวลชนแห่งประเทศไทย',
        upvotes: 0,
        items: [
            { label: 'สายสีน้ำเงิน', status: 'ปกติ' },
            { label: 'สายสีม่วง', status: 'ปกติ' },
            { label: 'สายสีส้ม', status: 'ปิดให้บริการ' },
        ],
    },
    {
        title: 'รถไฟฟ้า รฟท.',
        upvotes: 0,
        items: [
            { label: 'สายสีแดง (รังสิต-บางซื่อ)', status: 'ปกติ' },
            { label: 'สายสีแดง (ตลิ่งชัน-บางซื่อ)', status: 'ปกติ' },
            { label: 'รถไฟฟ้าเชื่อมต่อท่าอากาศยานสุวรรณภูมิ', status: 'หนาแน่น' },
        ],
    },
    {
        title: 'การรถไฟแห่งประเทศไทย',
        upvotes: 0,
        items: [
            { label: 'สายเหนือ', status: 'ปกติ' },
            { label: 'สายตะวันออกเฉียงเหนือ', status: 'ปกติ' },
            { label: 'สายตะวันออก', status: 'ปกติ' },
            { label: 'สายใต้', status: 'ปกติ' },
            { label: 'สายวงเวียนใหญ่-มหาชัย', status: 'ปกติ' },
            { label: 'สายมหาชัย-แม่กลอง', status: 'ปกติ' },
        ],
    },
    {
        title: 'เรือด่วนเจ้าพระยา',
        upvotes: 0,
        items: [
            { label: 'ธงส้ม', status: 'ปกติ' },
            { label: 'ธงเหลือง', status: 'ปกติ' },
            { label: 'ธงเขียวเหลือง', status: 'ปกติ' },
            { label: 'ธงทอง', status: 'ปกติ' },
            { label: 'ธงแดง', status: 'ปกติ' },
            { label: 'ธงฟ้า (เรือท่องเที่ยว)', status: 'หนาแน่น' },
            { label: 'ไทยสมายล์โบ้ท', status: 'หนาแน่น' },
        ],
    },
    {
        title: 'รถเมล์สายต่างๆ',
        upvotes: 0,
        items: [
            { label: 'รถโดยสารด่วนพิเศษ BRT', status: 'ปกติ' },
            { label: 'รถเมล์ ขสมก.', status: 'ปกติ' },
            { label: 'ไทยสมายล์บัส', status: 'ปกติ' },
            { label: 'รถสองแถว', status: 'ปกติ' },
        ],
    },
    {
        title: 'ทางด่วนในกรุงเทพมหานคร',
        upvotes: 0,
        items: [
            { label: 'เฉลิมมหานคร', status: 'ปกติ' },
            { label: 'ศรีรัช', status: 'ปกติ' },
            { label: 'ฉลองรัช', status: 'รถติด' },
            { label: 'บูรพาวิถี', status: 'รถติด' },
            { label: 'ทางพิเศษสาย S1', status: 'รถติด' },
            { label: 'กาญจนาภิเษก (ฝั่งใต้)', status: 'รถติด' },
            { label: 'อุดรรัถยา', status: 'รถติด' },
            { label: 'ประจิมรัถยา', status: 'รถติด' },
            { label: 'ดอนเมืองโทลล์เวย์', status: 'ปกติ' },
        ],
    },
    {
        title: 'ทางหลวงชนบท',
        upvotes: 0,
        items: [
            { label: 'ถนน พหลโยธิน', status: 'ปกติ' },
            { label: 'ถนน มิตรภาพ', status: 'ปกติ' },
            { label: 'ถนน สุขุมวิท', status: 'รถติด' },
            { label: 'ถนน เพชรเกษม', status: 'รถติด' },
            { label: 'มอเตอร์เวย์ สาย M5', status: 'ปิดให้บริการ' },
            { label: 'มอเตอร์เวย์ สาย M6', status: 'รถติด' },
            { label: 'มอเตอร์เวย์ สาย M7 (กรุงเทพ-ชลบุรี)', status: 'รถติด' },
            { label: 'มอเตอร์เวย์ สาย M8', status: 'ปิดให้บริการ' },
            { label: 'มอเตอร์เวย์ สาย M9 (กาญจนาภิเษก)', status: 'ปกติ' },
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