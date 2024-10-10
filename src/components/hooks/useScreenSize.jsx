"use client"

import {useEffect, useState} from "react";

const useScreenSize = ( ) => {

    const [screenSize, setScreenSize] = useState(0)

    useEffect(() => {
        function getScreenSize() {
            return window.innerWidth;
        }
        function handleScreenSize() {
            setScreenSize(getScreenSize())
        }

        handleScreenSize();

        window.addEventListener('resize', handleScreenSize)

        //clear
        return () => window.removeEventListener( 'resize', handleScreenSize)
    }, []);



    return screenSize;
}

export default useScreenSize;