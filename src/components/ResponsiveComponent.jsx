"use client"

import useScreenSize from "@/components/hooks/useScreenSize";

const ResponsiveComponent = ({children}) => {
    const screenSize = useScreenSize()

    return (
        <>
            {
                children({screenSize})
            }
        </>
    )
}
export default ResponsiveComponent