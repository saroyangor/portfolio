"use client";

import {
  FaJs,
  FaReact,
  FaJava,
} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiTypescript,
  SiSpring,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiApachekafka,
  SiHibernate,
  SiGo,
} from 'react-icons/si'

// about data
const about = {
  title: "About me",
  description:
    "I'm a web developer from Armenia, practicing FullStack development mostly using JavaScript and Python frameworks.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Gor Saroyan",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+374) 94 963676",
    },
    {
      fieldName: "Telegram",
      fieldValue: "GorSaroyan",
    },
    {
      fieldName: "Email",
      fieldValue: "saroyan98@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "Armenian, Russian, English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I've worked on different projects at different times. I have teaching experience, but my passion is coding.",
  items: [
    {
      company: "TUMO Center for Creative Technologies",
      position: "Programming Workshop Leader",
      duration: "2023 Aug - Present",
    },
    {
      company: "FoxTeam",
      position: "FullStack Developer",
      duration: "2023 Jul - 2024 Mar",
    },
    {
      company: "TelRan",
      position: "FrontEnd Coach",
      duration: "2022 Apr - 2023 Apr",
    },
    {
      company: "SavvyHills",
      position: "React Developer",
      duration: "2022 Apr - 2023 Apr",
    },
    {
      company: "IT-school Hello World",
      position: "Programming Coach",
      duration: "2021 Jan - 2022 Mar",
    },
    {
      company: "DataLite",
      position: "FullStack Developer",
      duration: "2020 Jul - 2022 Mar",
    },
    {
      company: "LuckyTeam",
      position: "Front-End Developer",
      duration: "2020 Jan - 2020 Jul",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I honed my web development skills, focusing on JavaScript and Java frameworks.",
  skillList: [
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiSpring />,
      name: "Spring Framework",
    },
    {
      icon: <SiHibernate />,
      name: "Hibernate",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiRedis />,
      name: "Redis",
    },
    {
      icon: <SiApachekafka />,
      name: "Kafka",
    },
    {
      icon: <SiGo />,
      name: "Golang",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { DatabaseIcon, SquareLibraryIcon } from 'lucide-react'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[90%] h-[135px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[650px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
