import Link from "next/link";

export default function Sidebar() {
    return (
    <div className="bg-white h-screen w-40 flex flex-col">
        <img src="favicon.ico" alt="Logo" className="w-20 mx-auto pt-4" />
        <div className="bg-slate-300 flex-1 mt-4 pt-4 flex flex-col text-black items-center gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/contact">News</Link>

            <div className="flex flex-col gap-2">
                <div className="flex flex-col justify-center items-center aspect-square p-2 border-2 gap-1">
                    <img src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js Logo" className="w-10 mx-auto" />
                    <Link href="https://nextjs.org">JACKPOT</Link>
                    <p className="text-xs text-center italic text-wrap">Created by ClicketPaf</p>
                </div>
                <div className="flex flex-col justify-center items-center aspect-square  border-2 gap-1">
                    <img src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js Logo" className="w-10 mx-auto" />
                    <Link href="https://nextjs.org">COINFLIP</Link>
                </div>
                <div className="flex flex-col justify-center items-center aspect-square  border-2 gap-1">
                    <img src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js Logo" className="w-10 mx-auto" />
                    <Link href="https://nextjs.org">POKER</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
