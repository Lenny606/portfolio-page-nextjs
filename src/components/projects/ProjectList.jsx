"use client"
import ProjectLayout from "@/components/projects/ProjectLayout";
import {motion} from "framer-motion";


const ProjectList = ({list}) => {
    const container = {
        hidden: {
            opacity: 0,

        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 1.5
            }
        }
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"

            className={'flex flex-col items-center md:space-y-8 space-y-6 mx-auto lg:px-16 max-w-4xl w-full max-w-auto xl:max-w-4xl px-4'}>

            {list.map((project, index) => {
                return <ProjectLayout {...project} key={project.id}/>
            })
            }
        </motion.div>
    )
}

export default ProjectList;