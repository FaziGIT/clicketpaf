import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
    return (
    <nav className="h-screen w-24 flex flex-col">
        <div className="h-20 flex items-center justify-center bg-img-yellow">
            <Image src="/favicon.ico" alt="Logo" width={90} height={90} className="px-4"/>
        </div>
        <div className="flex-1 mt-4 pt-4 flex flex-col text-txt-dark-blue items-center gap-3 font-bold text-sm">
            <p>HOME</p>
            <p>ABOUT US</p>
            <p>NEWS</p>

            <div className="flex flex-col gap-2">
                <div className="flex flex-col justify-center items-center aspect-square gap-2">
                    <Image src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js Logo" width={40} height={40} />
                    <p>JACKPOT</p>
                </div>
                <div className="flex flex-col justify-center items-center aspect-square gap-2">
                    <Image src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js Logo" width={40} height={40} />
                    <p>COINFLIP</p>
                </div>
                <div className="flex flex-col justify-center items-center aspect-square gap-2">
                    <Image src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js Logo" width={40} height={40} />
                    <p>POKER</p>
                </div>
                <div className="flex flex-col justify-center items-center aspect-square gap-2">
                    <Image src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js Logo" width={40} height={40} />
                    <Link href={'blog'} title={'BLOG'}>BLOG</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}
