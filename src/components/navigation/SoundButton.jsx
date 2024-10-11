"use client"
import Link from "next/link";
import {AudioLines, Volume2, VolumeX} from "lucide-react";
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";

const Modal = ({onClose, toggle}) => {

}


const SoundButton = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null)


    const handleInteraction = () => {
        const consent = localStorage.getItem("musicConsent")
        if (consent === "true" && !isPlaying) {
            setIsPlaying(true)
            audioRef.current.play()
        }
        ['click', "keydown", "touchstart"].forEach((event) => {
            document.removeEventListener(event, handleInteraction)
        })
    }

    const toggleSound = () => {
        const newState = !isPlaying
        setIsPlaying(!isPlaying)
        newState ? audioRef.current.play() : audioRef.current.pause()
        localStorage.setItem("musicConsent", String(newState))
    }

    useEffect(() => {
        const consent = localStorage.getItem("musicConsent")
        if (consent) {
            setIsPlaying(consent === "true")

            if (consent === "true") {
                ['click', "keydown", "touchstart"].forEach((event) => {
                    document.addEventListener(event, handleInteraction)
                })
            }
        }
    }, []);

    return (
        <div
            className={'fixed top-4 right-2.5 xs:right z-50 group'}
        >
            <audio loop ref={audioRef}>
                <source src={'/audio/lazy-day.mp3'} type={'audio/mpeg'}/>
                Audio not supported
            </audio>
            <motion.button
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{delay: 1}}

                onClick={toggleSound}

                className={'text-foreground rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-inset-sm fixed top-4 right-4 w-fit self-start z-50 p-2.5 xs:p-4'}
            >
                {
                    isPlaying ?
                        <Volume2 className={'text-foreground w-full h-full group-hover:text-accent'} strokeWidth={1.5}/>
                        :
                        <VolumeX className={'text-foreground w-full h-full group-hover:text-accent'} strokeWidth={1.5}/>
                }
            </motion.button>


        </div>
    )
}

export default SoundButton;