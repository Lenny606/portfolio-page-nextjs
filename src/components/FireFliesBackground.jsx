"use client"
import {useEffect, useState} from "react";




const FireFliesBackground = () => {
    const createFireFly = () =>
        ({
            id: Math.random(),
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 5}s`
        })
    const [fireflies, setFireFlies] = useState([])

    useEffect(() => {
        const addFireFly = () => {

            const newFireFly = createFireFly()

            setFireFlies((current) =>
                [
                    ...current.slice(-14), newFireFly
                ]
            );
        }
        const interval = setInterval(addFireFly, 1000)

        return () => clearInterval(interval)
    }, [fireflies]);


    return (
        <div className={'fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'}>
            {
                fireflies.map((firefly) => {
                    return <div
                        key={firefly.id}
                        className={'absolute rounded-full w-[10px] h-[10px] bg-firefly-radial'}
                        style={{
                            top: firefly.top,
                            left: firefly.left,
                            animation: `move ${firefly.animationDuration} infinite alternate`
                        }}
                    >

                    </div>
                })
            }
        </div>)
}

export default FireFliesBackground;