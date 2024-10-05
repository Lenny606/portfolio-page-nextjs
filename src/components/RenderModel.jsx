"use client"

import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import clsx from "clsx";

const RenderModel = ({children, className}) => {
    return (
        <Canvas
            className={clsx('w-screen h-screen -z-10 relative', className)}>
            {/*loads model async */}
            <Suspense fallback={null}>
                {children}
            </Suspense>
        </Canvas>
    )
}

export default RenderModel;