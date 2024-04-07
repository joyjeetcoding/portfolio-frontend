"use client";
import useGetProjects from "@/hooks/admin/projects/useGetProjects";
import Link from "next/link";

const ProjectsPageUserView = () => {
  const { projectbox } = useGetProjects();

  return (
    <div className="text-black">
      <div className="pt-10">
        <h1 className="text-center text-teal-300 text-2xl font-submain font-extrabold underline lg:text-5xl">
          PROJECTS
        </h1>
      </div>
      <div className="px-4 md:w-full md:grid lg:grid-cols-3 md:grid-cols-2 min-h-screen">
        {projectbox.map((item) => (
          <div className="card font-main tracking-wider mt-10 bg-gradient-to-l from-teal-800 to-sky-900 text-white border-2 border-white mx-4 shadow-xl ">
            <div className="card-body">
              <h2 className="card-title">{item.projectName}</h2>
              <span className="text-xs">{item.projectDate}</span>
              <p className="text-sm">
                {item.projectDescription.split(". ").map((desc, index) => (
                  <>
                    <span key={index}>{desc}</span>
                    <br />
                  </>
                ))}
              </p>
              <div className="card-actions justify-end">
                {item.skillsUsed.split(", ").map((skill, index) => (
                  <div key={index} className="badge badge-outline mr-2">
                    {skill}
                  </div>
                ))}
              </div>
              <div className="card-actions justify-end">
                <Link
                  href={item.githubLink}
                  target="_blank"
                  className="btn btn-primary text-xs"
                >
                  Github Link
                </Link>
                <Link
                  href={item.projectLink}
                  target="_blank"
                  className=" btn-primary btn text-xs"
                >
                  Deployed Link
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPageUserView;
