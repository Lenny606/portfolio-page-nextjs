import ProjectLayout from "@/components/projects/ProjectLayout";

const ProjectList = ({list}) => {


    return (
        <div className={'flex flex-col items-center md:space-y-8 space-y-6 mx-auto lg:px-16 max-w-4xl w-full max-w-auto xl:max-w-4xl px-4'}>
            {list.map((project, index) => {
                return <ProjectLayout {...project} key={project.id}/>
            })
            }
        </div>
    )
}

export default ProjectList;