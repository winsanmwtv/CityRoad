import warningLogo from "./warning.png";
import Image from "next/image";

export default function commonAlert() {

    let alertText = new Array(10);
    alertText[0] = "Our website is under development, some part of website may not be functional. Thank you :D";

        return (
            <div className="bg-warning text-warning-content p-5 flex items-center">
                <div className="mr-4 mt-2 -mb-2">
                    <Image
                        className=""
                        src={warningLogo}
                        alt="Alert Icon"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="flex flex-col items-start">
                    <div className="mt-5">
                        <h3 className="text-lg mb-1">Alert: {alertText[0]}</h3>
                    </div>
                </div>
            </div>
        );
}