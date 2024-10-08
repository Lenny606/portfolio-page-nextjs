import bg from "../../../public/background/projects-background.png"
import Image from "next/image";
import ProjectList from "@/components/projects/ProjectList";
import {projectsData} from "@/app/data";
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/model/Wizard";

const Page = () => {


    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative">
            <Image src={bg} alt={'background-image'} fill className={'-z-50 w-full h-full object-cover object-center opacity-25'}/>
            <ProjectList list={projectsData} />

            {/*TODO CHANGE*/}
            <RenderModel>
                <Wizard></Wizard>
            </RenderModel>
        </main>
    )
}

export default Page;