import Link from "next/link";
import {HomeIcon} from "lucide-react";
import {BtnList} from "@/app/data";
import NavButton from "@/components/navigation/NavButton";

const NavPartial = ({radius, angleIncrement, isMobile = false}) => {

    const BtnListArr = isMobile ? BtnList.slice(0, BtnList / 2) : BtnList;

    return (
        <div
            className={'w-max flex items-center justify-center hover:pause relative animate-spin-slow group'}>
            {

                BtnListArr.map((btn, index) => {
                    const angleRadius = index * angleIncrement * Math.PI / 180;
                    const x = `calc(${radius}*${Math.cos(angleRadius)})`;
                    const y = `calc(${radius}*${Math.sin(angleRadius)})`;

                    return <NavButton key={index} btn={btn} x={x} y={y}/>

                })
            }
        </div>
    )
}

export default NavPartial;