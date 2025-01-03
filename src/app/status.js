import React from 'react';
import Image from "next/image";
const btsSkyTrain = "/logo/bts_skytrain.png";
const mrta = "/logo/mrta.png";
const srtet = "/logo/srtet.png";
const srt = "/logo/srt.png";
const cp_exboat = "/logo/cp_exboat.png";
const bus = "/logo/bus.png";

const logo = {
    'BTS SkyTrain': { src: btsSkyTrain, width: 50, height: 50 },
    'Mass Rapid Transit': { src: mrta, width: 50, height: 50 },
    'SRTET': { src: srtet, width: 50, height: 50 },
    'State Railway of Thailand': { src: srt, width: 50, height: 50 },
    'Chao Phraya Express Boat': { src: cp_exboat, width: 50, height: 50 },
    'Bus Services': { src: bus, width: 50, height: 50 },
};

const statusData = [
    {
        title: 'BTS SkyTrain',
        upvotes: 123, // Example upvote count
        items: [
            { label: 'Sukhumvit Line', status: 'Normal' },
            { label: 'Silom Line', status: 'Normal' },
            { label: 'Gold Line', status: 'Normal' },
            { label: 'Yellow Line', status: 'Normal' },
            { label: 'Pink Line', status: 'Normal' },
        ],
    },
    {
        title: 'Mass Rapid Transit',
        upvotes: 98,
        items: [
            { label: 'Blue Line', status: 'Normal' },
            { label: 'Purple Line', status: 'Normal' },
            { label: 'Orange Line', status: 'Closed' },
        ],
    },
    {
        title: 'SRTET',
        upvotes: 45,
        items: [
            { label: 'Dark Red Line', status: 'Normal' },
            { label: 'Light Red Line', status: 'Normal' },
            { label: 'Suvarnabhumi Airport Rail Link', status: 'Crowded' },
        ],
    },
    {
        title: 'State Railway of Thailand',
        upvotes: 67,
        items: [
            { label: 'Northern Line', status: 'Normal' },
            { label: 'Northeastern Line', status: 'Normal' },
            { label: 'Eastern Line', status: 'Normal' },
            { label: 'Southern Line', status: 'Normal' },
            { label: 'Wong Wian Yai - Maha Chai Line', status: 'Normal' },
            { label: 'Maha Chai - Maekhlong Line', status: 'Normal' },
        ],
    },
    {
        title: 'Chao Phraya Express Boat',
        upvotes: 32,
        items: [
            { label: 'Orange Flag', status: 'Normal' },
            { label: 'Yellow Flag', status: 'Normal' },
            { label: 'Yellow-Green Flag', status: 'Normal' },
            { label: 'Gold Flag', status: 'Normal' },
            { label: 'Red Flag', status: 'Normal' },
            { label: 'Blue Flag (Tourist Boat)', status: 'Crowded' },
        ],
    },
    {
        title: 'Bus Services',
        upvotes: 29,
        items: [
            { label: 'Bangkok BRT', status: 'Normal' },
            { label: 'BMTA Bus', status: 'Normal' },
            { label: 'Thai Smile Bus', status: 'Normal' },
            { label: 'Songtaew', status: 'Normal' },
            { label: 'Thai Smile Boat', status: 'Crowded' },
        ],
    },
];

function Status() {
    return (
        <div className="grid grid-cols-4 gap-2 bg-base-200">
            {statusData.map((section) => (
                <div key={section.title} className="bg-base-100 p-4 rounded relative pb-8"> {/* Added padding-bottom */}
                    <div className="flex items-center mb-2">
                        {logo[section.title] && (
                            <Image
                                className=""
                                src={logo[section.title]}
                                alt={section.title}
                                width={50}
                                height={50}
                            />
                        )}
                        <h3 className="text-lg font-semibold">{section.title}</h3>
                    </div>
                    <ul className="list-none">
                        {section.items.map((item) => (
                            <li key={item.label} className="flex items-center justify-between mb-1">
                                <div className="flex items-center">
                                    {logo[item.label] && (
                                        <Image
                                            className=""
                                            src={logo[item.label]}
                                            alt={item.label}
                                            width={50}
                                            height={50}
                                        />
                                    )}
                                    <span className="mr-2">{item.label}</span>
                                </div>
                                <span
                                    className={`px-2 py-1 rounded-sm ${
                                        item.status === 'Closed'
                                            ? 'bg-error text-error-content'
                                            : item.status === 'Crowded'
                                                ? 'bg-warning text-warning-content'
                                                : 'bg-success text-success-content'
                                    }`}
                                >
                                    {item.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="absolute bottom-2 right-2 text-sm text-gray-500"> {/* Adjusted for cleaner layout */}
                        {section.upvotes} upvotes
                    </div>
                </div>
            ))}
        </div>
    );
}


export default Status;
