import { Inter } from "next/font/google";
import "../globals.css";
import clsx from "clsx";
import HomeButton from "@/components/navigation/HomeButton";

export default function SubPagesLayout({ children }) {
    return (
        <main className={'flex min-h-screen flex-col items-center justify-center py-20 px-32'}>

           <HomeButton>Home</HomeButton>
            {children}

        </main>

    );
}
