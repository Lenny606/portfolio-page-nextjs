"use client"
import Link from "next/link";
import {AudioLines} from "lucide-react";
import {motion} from "framer-motion";

const SoundButton = () => {


    const SoundBtnLink = motion(Link)
    return (
        <SoundBtnLink href={'/'}

                      initial={{scale: 0}}
                      animate={{scale: 1}}
                      transition={{delay: 1}}
                      className={'text-foreground rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-inset-sm fixed top-4 right-2.5 xs:right-4 w-fit self-start z-50'}
                      aria-label={'audio button'}
                      name={'audio button'}>
            <audio loop >
                <source src={'/public/audio/lazy-day.mp3'}></source>
            </audio>

        </SoundBtnLink>
    )
}

export default SoundButton;