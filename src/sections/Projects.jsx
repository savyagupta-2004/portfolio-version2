import Project from "../components/Project";
import { myProjects } from "../constants";
import { DecoderText } from "../components/decoder-text";
const Projects = () => {
  return (
    <section id="work" className="relative c-space section-spacing">
      <DecoderText
        delay={500}
        text="My Projects"
        className="text-heading"
      ></DecoderText>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-6 h-[1px] w-full" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
