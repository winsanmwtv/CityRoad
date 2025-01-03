import React from 'react';
import Image from "next/image";

const logo = {
    'BTS SkyTrain': "./logo/bts_skytrain.png",
};

const statusData = [
    {
        title: 'BTS SkyTrain',
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
        items: [
            { label: 'Blue Line', status: 'Normal' },
            { label: 'Purple Line', status: 'Normal' },
            { label: 'Orange Line', status: 'Closed' },
        ],
    },
    {
        title: 'State Railway of Thailand (Commuter)',
        items: [
            { label: 'Dark Red Line', status: 'Normal' },
            { label: 'Light Red Line', status: 'Normal' },
            { label: 'Wong Wian Yai - Maha Chai Line', status: 'Normal' },
            { label: 'Maha Chai - Maekhlong Line', status: 'Normal' },
            { label: 'Suvarnabhumi Airport Rail Link', status: 'Crowded' },
        ],
    },
    {
        title: 'State Railway of Thailand (Intercity)',
        items: [
            { label: 'Northern Line', status: 'Normal' },
            { label: 'Northeastern Line', status: 'Normal' },
            { label: 'Eastern Line', status: 'Normal' },
            { label: 'Southern Line', status: 'Normal' },
        ],
    },
    {
        title: 'Chao Phraya Express Boat',
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
                <div key={section.title} className="bg-base-100 p-4 rounded">
                    <div className="flex items-center mb-2">
                        {logo[section.title] && (
                            <img
                                src={logo[section.title]}
                                alt={section.title}
                                className="w-8 h-8 mr-2"
                            />
                        )}
                        <h3 className="text-lg font-semibold">{section.title}</h3>
                    </div>
                    <ul className="list-none">
                        {section.items.map((item) => (
                            <li key={item.label} className="flex items-center justify-between mb-1">
                                <div className="flex items-center">
                                    {logo[item.label] ? (
                                        <Image
                                            src={logo[item.label]}
                                            alt={item.label}
                                            className=""
                                            width = {100}
                                            height = {100}
                                        />
                                    ) : (
                                        <span className="mr-2">{item.label}</span>
                                    )}
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
                </div>
            ))}
        </div>
    );
}

export default Status;