"use client"

import bg from "../../../../public/background/resume-background.png"
import Image from "next/image";
import RenderModel from "@/components/RenderModel";
import {motion} from "framer-motion";
import Link from "next/link";
const NavLink = motion(Link)

// const Hat = dynamic(() => import("@/components/model/Hat"),
//     {
//         ssr: false
//     }
// )
const Page = () => {
    return (
        <>
            <Image  priority sizes={'100vw'} src={bg} alt={'background-image'}
                    className={'-z-50 fixed top-0 left-0 w-full object-cover object-center opacity-25'}/>

            <div className={'w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0'}>

                {/*TODO CHANGE MODEL + FIX BG HIGH*/}
                <RenderModel>
                    {/*<Hat></Hat>*/}
                </RenderModel>
            </div>
            <div className={'flex flex-col relative items-center justify-center w-full h-screen'}>
                <div className={'flex flex-col absolute items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2'}>
                    <h1 className={'font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent'}>Resume</h1>
                    {/*TODO ADD PDF*/}
                    <NavLink download={true} href={'/resume.pdf'} target={"_blank"} className={'font-light text-foreground text-xl'}> Download PDF </NavLink>
                </div>
            </div>
        </>
    )
}

export default Page;