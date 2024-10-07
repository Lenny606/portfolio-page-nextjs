"use client"
import {BtnList} from "@/app/data";
import NavButton from "@/components/navigation/NavButton";

const Navigation = () => {

    const angleIncrement = 360 / BtnList.length;
    const radius = `calc(20vw - 1rem)`;

    return (
        <div className={'w-full fixed h-screen flex items-center justify-center'}>
        <div className={'flex items-center justify-center hover:pause relative animate-spin-slow group'}>
            {
                BtnList.map((btn, index) => {

                    const angleRadius = index * angleIncrement * Math.PI / 180;
                    const x = `calc(${radius}*${Math.cos(angleRadius)})`;
                    const y = `calc(${radius}*${Math.sin(angleRadius)})`;

                    return <NavButton key={index} btn={btn} x={x} y={y}/>

                })
            }
        </div>
        </div>
            )
}

export default Navigation