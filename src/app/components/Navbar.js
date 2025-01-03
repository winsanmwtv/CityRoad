import Link from "next/link";
import Image from "next/image";
import ContentWidth from "./contentWidth";
import cityRailLogo from "@/cityrail.svg"

export default function Navbar() {
    return (
        <nav className="bg-primary fixed w-full">
            <ContentWidth>
                <Link href="/" title="Home Page">
                    <Image
                        className="invert"
                        src={cityRailLogo}
                        alt="Limaru Logo"
                        width={100}
                        height={100}
                    />
                </Link>
            </ContentWidth>
        </nav>
    );
}