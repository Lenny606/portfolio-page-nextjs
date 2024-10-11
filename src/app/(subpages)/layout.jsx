import { Inter } from "next/font/google";
import "../globals.css";
import clsx from "clsx";
import HomeButton from "@/components/navigation/HomeButton";
import SoundButton from "@/components/navigation/SoundButton";

export default function SubPagesLayout({ children }) {
    return (
        <main className={'flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20'}>

           <HomeButton>Home</HomeButton>
            {children}

        </main>

    );
}
