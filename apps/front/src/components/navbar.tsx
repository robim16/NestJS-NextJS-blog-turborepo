import Link from "next/link"
import { PropsWithChildren } from "react"

type Props = PropsWithChildren

const Navbar = (props: Props) => {
    return (
        <>
            <h1 className="md:ml-auto  px-2 flex flex-col md:flex-row gap-2 md:items-center md:justify-center [&>a:hover]:bg-sky-500 [&>a:hover]:text-sky-100 [&>a]:rounded-md [&>a]:transition [&>a]:duration-200 [&>a]:px-4 md:[&>a]:py-2 [&>a]:py-1 ">My Modern Blog</h1>
            <div className="flex flex-col gap-2 ml-auto">
                <Link href="/">Blog</Link>
                <Link href="#about">About</Link>
                <Link href="#contact">Contact</Link>
            </div>
        </>
    )
}

export default Navbar