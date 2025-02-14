import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
    return (
    <nav className="h-screen w-24 flex flex-col">
        <div className="h-20 flex items-center justify-center bg-img-yellow">
            <Link href={'/'} title={'HOME'}>
                <Image src="/favicon.ico" alt="Logo" width={110} height={110}/>
            </Link>
        </div>
        <div className="flex-1 my-4 pt-4 flex flex-col text-txt-dark-blue items-center gap-3 font-bold text-smt">
            <Link href={'/'} title={'HOME'}>ACCUEIL</Link>
            <Link href={'/about'} title={'ABOUT US'}>ABOUT US</Link>
            <Link href={'/blog'} title={'NEWS'}>BLOG</Link>

            <div className="flex flex-col gap-2">
                
                <Link href={'/games/coinflip'} className="flex flex-col justify-center items-center aspect-square gap-2">
                    <Image src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js Logo" width={40} height={40} />
                    <p>COINFLIP</p>
                </Link>
                <Link href={'/games/slots'} className="flex flex-col justify-center items-center aspect-square gap-2">
                    <Image src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js Logo" width={40} height={40} />
                    <p>SLOTS</p>
                </Link>
            </div>
            <Link className="mt-auto" href={'/contact'} title={'CONTACT'}>CONTACT</Link>
            <Link href={'/terms'} title={'TERMS'}>TERMS</Link>
            <Link  href={'/privacy'} title={'PRIVACY'}>PRIVACY</Link>
        </div>
    </nav>
  )
}
