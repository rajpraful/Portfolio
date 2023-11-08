import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { externalLink } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  index,
  source_code_link,
  source_project_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full "
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* {source_project_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_project_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer opacity-80"
              >
                <img
                  src={externalLink}
                  alt="github"
                  className="w-2/3 h-2/3 object-contain rounded-full"
                />
              </div>
            </div>
          )} */}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] h-[120px]">
            {description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Projects</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]"
        >
          As a senior frontend developer, I take pride in my work and am
          passionate about creating engaging web experiences. Below, you'll find
          a selection of projects that reflect my skills and expertise. These
          projects encompass a variety of technologies and showcase my ability
          to craft responsive, user-friendly websites and applications. Each
          project is a testament to my commitment to clean code, thoughtful
          design, and an unwavering dedication to delivering exceptional user
          experiences.
          <br />
          <br />
          Feel free to explore these projects to get a glimpse of my work. If
          you have any questions or are interested in collaborating, don't
          hesitate to reach out. I'm always excited to take on new challenges
          and projects.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, i) => (
          <ProjectCard key={`project-${i}`} {...project} index={i} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
