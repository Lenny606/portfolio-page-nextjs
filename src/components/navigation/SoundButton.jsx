"use client"
import Link from "next/link";
import {AudioLines, Volume2, VolumeX} from "lucide-react";
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";

const Modal = ({onClose, toggle}) => {
    return createPortal(
        <div className={'fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center'}>
            <div
                className={'g-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-8 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8'}>
                <p className={'font-light'}>Play music in background ?</p>
                <div className={'flex items-center justify-center space-x-4'}>
                    <button onClick={toggle}
                            className={'px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2'}>Yes
                    </button>
                    <button onClick={onClose}
                            className={'px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded'}>No
                    </button>
                </div>
            </div>
            modal
        </div>,
        document.getElementById("modal")
    )
}


const SoundButton = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    const [modal, setModal] = useState(false)
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
        localStorage.setItem("consentTime", new Date().toISOString())
        setModal(false)
    }

    useEffect(() => {
        const consent = localStorage.getItem("musicConsent")
        const consentTime = localStorage.getItem("consentTime")
        if (consent && consentTime &&  new Date(consentTime).getTime() + 3 * 24 * 60 * 60 *1000 > new Date()
    )
        {
            setIsPlaying(consent === "true")

            if (consent === "true") {
                ['click', "keydown", "touchstart"].forEach((event) => {
                    document.addEventListener(event, handleInteraction)
                })
            }
        }
    else
        {
            setModal(true)
        }
    }, []);

    return (
        <div
            className={'fixed top-4 right-2.5 xs:right z-50 group'}
        >
            {
                modal && <Modal onClose={() => setModal(false)} toggle={toggleSound}/>
            }
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