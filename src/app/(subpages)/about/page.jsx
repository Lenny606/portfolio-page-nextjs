import bg from "../../../../public/background/about-background.png"
import Image from "next/image";
import RenderModel from "@/components/RenderModel";
import Hat from "@/components/model/Hat";

const Page = () => {
    return (
        <>
            <Image src={bg} alt={'background-image'} fill
                   className={'-z-50 w-full h-full object-cover object-center opacity-25'}/>

            <div className={'w-full h-full absolute top-1/2 -translate-y-1/2 left-0'}>

                {/*TODO CHANGE*/}
                <RenderModel>
                    <Hat></Hat>
                </RenderModel>
            </div>

            <div className={'flex flex-col relative items-center justify-center w-full h-screen'}>
                <div className={'flex flex-col absolute items-center text-center top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2'}>
                    <h1 className={'font-bold text-9xl text-accent'}>Contact</h1>

                    <p className={'font-light text-foreground text-xl'}> XXXX </p>
                </div>
            </div>
        </>
    )
}

export default Page;