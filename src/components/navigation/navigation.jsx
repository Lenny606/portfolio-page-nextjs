"use client"
import {BtnList} from "@/app/data";
import NavButton from "@/components/navigation/NavButton";
import useScreenSize from "@/components/hooks/useScreenSize";
import ResponsiveComponent from "@/components/ResponsiveComponent";

const Navigation = () => {

    //getting screen size
    const screenSize = useScreenSize()
    // const isMobile = screenSize.width <= 768;
    // const isTablet = screenSize.width <= 1024;
    // const isDesktop = !isMobile && !isTablet;

    const isLarge = screenSize >= 1024
    const isMedium = screenSize >= 768

    const angleIncrement = 360 / BtnList.length;
    const radius = isLarge ? `calc(20vw - 1rem)` : isMedium ? `calc(30vw - 1rem)` : `calc(40vw - 1rem)`


    return (
        <div className={'w-full fixed h-screen flex items-center justify-center'}>

            <ResponsiveComponent>
                {
                    ({screenSize}) => {
                        return screenSize && screenSize >= 480 ?
                            (
                                <div
                                    className={'w-max flex items-center justify-center relative animate-spin-slow group'}>
                                    {
                                        BtnList.map((btn, index) => {

                                            const angleRadius = index * angleIncrement * Math.PI / 180;
                                            const x = `calc(${radius}*${Math.cos(angleRadius)})`;
                                            const y = `calc(${radius}*${Math.sin(angleRadius)})`;

                                            return <NavButton key={index} btn={btn} x={x} y={y}/>

                                        })
                                    }
                                </div>
                            ) : (
                                <>
                                    <div
                                        className={'w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-start xs:items-center justify-center relative group'}>
                                        {
                                            BtnList.slice(0, BtnList.length / 2).map((btn, index) => {

                                                return <NavButton key={index} btn={btn} x={0} y={0}/>

                                            })
                                        }
                                    </div>
                                    <div
                                        className={'w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group'}>
                                        {
                                            BtnList.slice(BtnList.length / 2, BtnList.length).map((btn, index) => {

                                                return <NavButton key={index} btn={btn} x={0} y={0}
                                                                  labelDirection={'left'}/>

                                            })
                                        }
                                    </div>
                                </>
                            )
                    }
                }
            </ResponsiveComponent>
        </div>
    )
}

export default Navigation