"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function CommonAlert() {
    // Array of alert texts
    const alertText = [
        "เว็บไซต์ของเราอยู่ระหว่างการพัฒนา อาจจะมีบางสิ่งที่ยังไม่ทำงาน ขออภัยในความไม่สะดวก",
        "รถไฟฟ้ามหานคร สายสีส้ม คาดว่าจะเปิดให้บริการช่วงปี 2070"
    ];

    // State for the current alert index
    const [currentAlert, setCurrentAlert] = useState(0);

    // Effect to cycle through alerts every 10 seconds
    useEffect(() => {
        if (alertText.length > 1) {
            const interval = setInterval(() => {
                setCurrentAlert((prev) => (prev + 1) % alertText.length);
            }, 10000); // 10 seconds
            return () => clearInterval(interval); // Cleanup on component unmount
        }
    }, [alertText.length]);

    // Return null if no alert texts exist
    if (alertText.length === 0) {
        return null;
    }

    return (
        <div className="bg-warning text-warning-content p-4 flex items-center">
            <div className="mr-4 mt-0 -mb-5">
                <div className="ml-12 mr-0 mb-5">
                    <Image
                        src="/warning.png"
                        alt="Alert Icon"
                        width={40}
                        height={40}
                    />
                </div>
            </div>
            <div className="flex flex-col items-start">
                <div className="mt-1">
                    <h3 className="text-lg mb-1">
                        ข่าวล่าสุด: {alertText[currentAlert]}{" "}
                        <span className="text-sm text-gray-700 ml-3">
                            [{currentAlert + 1}/{alertText.length}]
                        </span>
                    </h3>
                </div>
            </div>
        </div>
    );
}