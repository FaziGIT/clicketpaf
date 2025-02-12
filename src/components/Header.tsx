import Link from "next/link";

export default function Header() {
  return (
    <header className="h-20 flex justify-start items-center px-8">
        <Link href={'/'} title={'HOME'}>
            <h1 className="text-yellow-500 text-xl font-medium font-mainTitle leading-4">Click<span className="text-white">et</span>Paf</h1>
        </Link>
    </header>
  )
}
