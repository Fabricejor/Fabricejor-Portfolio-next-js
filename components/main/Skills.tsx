import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { OrbitingCircles } from "../ui/orbiting-circles";

const Skills = () => {
  const skillGroups = [
    { skills: Other_skill, radius: 80, duration: 25, reverse: true, className:"size-8 max-sm:size-6" }, // Le plus petit
    { skills: Full_stack, radius: 130, duration: 30, className:"size-10 max-sm:size-8" },
    { skills: Backend_skill, radius: 190, duration: 35, reverse: true, className:"size-12 max-sm:size-10" },
    { skills: Frontend_skill, radius: 260, duration: 40, className:"size-14 max-sm:size-12" }, 
    { skills: Skill_data, radius: 330, duration: 45, reverse: true, className:"size-16 max-sm:size-14" }, // Le plus grand
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center min-h-screen relative z-30 py-20 overflow-hidden"
    >
      <SkillText />

      <div className="relative  flex justify-center items-center w-full h-[700px] max-sm:h-[500px] mt-0 scale-100 max-sm:scale-50">
        {/* Conteneur central pour l'effet de perspective ou un élément central si besoin */} 
        {/* <div className="absolute w-16 h-16 bg-blue-700 rounded-full z-50"></div> */}

        {skillGroups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {group.skills.map((skill, skillIndex) => (
              <OrbitingCircles
                key={`${groupIndex}-${skillIndex}`}
                className={`absolute ${group.className} border border-transparent bg-cyan-500/5 backdrop-blur-sm shadow-xl`}
                duration={group.duration}
                delay={ (group.duration / group.skills.length) * skillIndex}
                radius={group.radius}
                reverse={group.reverse}
              >
                <SkillDataProvider
                  src={skill.Image}
                  width={skill.width -10}
                  height={skill.height -10}
                  title={skill.skill_name}
                />
              </OrbitingCircles>
            ))}
          </React.Fragment>
        ))}
      </div>

      {/* Vidéo en arrière-plan */} 
      <div className="w-full h-full absolute top-0 left-0 z-[-10] opacity-20">
        <video
          className="w-full h-full object-cover"
          preload="auto"
          playsInline
          loop
          muted
          autoPlay
          src="/technologie.mp4"
        />
      </div>
    </section>
  );
};

export default React.memo(Skills);