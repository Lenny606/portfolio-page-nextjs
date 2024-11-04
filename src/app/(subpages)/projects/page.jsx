import bg from "../../../../public/background/project-bg.png"
import Image from "next/image";
import ProjectList from "@/components/projects/ProjectList";
import {projectsData} from "@/app/data";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/model/Wizard";
import dynamic from "next/dynamic";

const Wizard = dynamic(() => import("@/components/model/Wizard"),
    {
        ssr: false
    }
)
const Tornado = dynamic(() => import("@/components/model/Tornado"),
    {
        ssr: false
    }
)
const Page = () => {


    return (
        <>
            <Image priority sizes={'100vw'} src={bg} alt={'background-image'}
                   className={'-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25'}/>
            <ProjectList list={projectsData}/>

            {/*<div className={'flex items-center justify-center fixed top-16 -translate-x-1/2 lg:translate-x-0 -z-10 lg:top-20 left-1/2 lg:-left-24 h-screen'}> */}
            {/*TODO CHANGE*/}
            <RenderModel>
                <Tornado></Tornado>
            </RenderModel>
            {/*</div>*/}
        </>
    )
}

export default Page;