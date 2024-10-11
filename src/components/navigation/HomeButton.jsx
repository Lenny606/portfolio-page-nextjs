"use client"
import Link from "next/link";
import {HomeIcon} from "lucide-react";
import {motion} from "framer-motion";

const HomeButton = () => {


    const HomeBtnLink = motion(Link)
    return (
        <HomeBtnLink href={'/'}
                     initial={{scale:0}}
                     animate={{scale:1}}
                     transition={{delay:1}}


              //*TODO create custom-bg style in config
              className={'text-foreground rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-inset-sm fixed top-4 left-4 w-fit self-start -z-60'}
              aria-label={'home'}
              name={'home'}>
                <span
                    className={'w-14 h-14 p-4 relative hover:text-accent'}>
                    <HomeIcon className={'w-full h-auto'} strokeWidth={1.5}></HomeIcon>
                    <span className={'peer bg-transparent absolute top-0 left-0 w-full h-full'}>

                    </span>
                    <span
                        className={'absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'}>
                    Home
                </span>
                </span>


        </HomeBtnLink>
    )
}

export default HomeButton;