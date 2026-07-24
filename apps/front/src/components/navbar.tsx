import { getSession } from "@/lib/session";
import Link from "next/link"
import { PropsWithChildren } from "react"
import SignInPanel from "./signInPanel";
import Profile from "./profile";

type Props = PropsWithChildren

const Navbar = async (props: Props) => {
    const session = await getSession();

    return (
        <>
            <h1 className="md:ml-auto  px-2 flex flex-col md:flex-row gap-2 md:items-center md:justify-center [&>a:hover]:bg-sky-500 [&>a:hover]:text-sky-100 [&>a]:rounded-md [&>a]:transition [&>a]:duration-200 [&>a]:px-4 md:[&>a]:py-2 [&>a]:py-1 ">My Modern Blog</h1>
            <div className="flex flex-col gap-2 ml-auto">
                <Link href="/">Blog</Link>
                <Link href="#about">About</Link>
                <Link href="#contact">Contact</Link>
                {session && session.user ? (
                    <Profile user={session.user} />
                ) : (
                    <SignInPanel />
                )}
            </div>
        </>
    )
}

export default Navbar