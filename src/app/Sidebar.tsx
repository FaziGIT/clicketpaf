import Link from "next/link";

export default function Sidebar() {
    return (
    <nav className="h-screen w-24 flex flex-col">
        <div className="h-20 flex items-center justify-center bg-img-yellow">
            <img src="favicon.ico" alt="Logo" className="p-4" />
        </div>
        <div className="flex-1 mt-4 pt-4 flex flex-col text-txt-dark-blue items-center gap-3 font-bold text-sm">
            <p>HOME</p>
            <p>ABOUT US</p>
            <p>NEWS</p>

            <div className="flex flex-col gap-2">
                <div className="flex flex-col justify-center items-center aspect-square gap-2">
                    <img src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js Logo" className="w-10 mx-auto" />
                    <Link href="https://nextjs.org">JACKPOT</Link>
                </div>
                <div className="flex flex-col justify-center items-center aspect-square gap-2">
                    <img src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js Logo" className="w-10 mx-auto" />
                    <Link href="https://nextjs.org">COINFLIP</Link>
                </div>
                <div className="flex flex-col justify-center items-center aspect-square gap-2">
                    <img src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js Logo" className="w-10 mx-auto" />
                    <Link href="https://nextjs.org">POKER</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}
