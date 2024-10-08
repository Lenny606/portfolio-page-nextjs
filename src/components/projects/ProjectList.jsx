import ProjectLayout from "@/components/projects/ProjectLayout";

const ProjectList = ({list}) => {


    return (
        <div className={'flex flex-col items-center space-y-8 px-16 max-w-4xl w-full'}>
            {list.map((project, index) => {
                return <ProjectLayout {...project} key={project.id}/>
            })
            }
        </div>
    )
}

export default ProjectList;