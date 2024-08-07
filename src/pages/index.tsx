import { Career } from "@/components/career";
import Layout from "../layout/layout";
import { Skill } from "@/components/skill";
import {
  AboutContentsType,
  CareerContentsType,
  SkillContentsType,
} from "@/types/types";
import { useEffect, useState } from "react";

const Home = () => {
  const [aboutContent, setAboutContent] = useState<AboutContentsType>();
  const [careerContents, setCareerContents] = useState<CareerContentsType[]>(
    []
  );
  const [skillsContents, setSkillsContents] = useState<SkillContentsType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aboutResponse, careerResponse, skillsResponse] =
          await Promise.all([
            fetch("/text/about.json"),
            fetch("/text/career.json"),
            fetch("/text/skills.json"),
          ]);

        const aboutData: AboutContentsType = await aboutResponse.json();
        const careerData: CareerContentsType[] = await careerResponse.json();
        const skillsData: SkillContentsType[] = await skillsResponse.json();

        setAboutContent(aboutData);
        setCareerContents(careerData);
        setSkillsContents(skillsData);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <main className="flex flex-col font-NotoSans justify-center">
        <section
          className="h-[500px] flex flex-col justify-center items-center mb-3"
          id="Home"
        >
          <div className="tb:text-6xl sp:text-5xl xs:text-3xl text-2xl font-semibold mb-5">
            Shota Kawasaki&apos;s
          </div>
          <div className="tb:text-6xl sp:text-5xl xs:text-3xl  font-semibold">
            Profile
          </div>
        </section>
        <section
          className="tb:w-[700px] w-3/4 flex flex-col justify-center mx-auto mb-40"
          id="About"
        >
          <div className="tb:text-4xl sp:text-3xl text-2xl font-semibold mx-auto mb-14">
            About
          </div>
          <div className="flex flex-col justify-center tb:text-lg sp:text-lg text-sm text-gray-700">
            <div className="mx-auto text-center">{aboutContent?.content}</div>
          </div>
        </section>
        <section
          className="flex flex-col justify-center items-center tb:w-[850px] w-4/5 mx-auto mb-40"
          id="Career"
        >
          <div className="tb:text-4xl sp:text-3xl text-2xl font-semibold mb-6">
            Career
          </div>
          {careerContents.map((career, i) => (
            <Career key={i} date={career.date} content={career.content} />
          ))}
        </section>

        <section
          className="tb:w-[850px] w-3/4 flex flex-col justify-center items-center mx-auto mb-35"
          id="Skills"
        >
          <div className="tb:text-4xl sp:text-3xl text-2xl font-semibold mb-6">
            Skills
          </div>
          {skillsContents.map((skills, i) => (
            <Skill
              key={i}
              firstIcon={skills.firstIcon}
              secondIcon={skills.secondIcon}
              skill={skills.skill}
              description={skills.description}
            />
          ))}
        </section>
        <section
          className="h-[300px] flex flex-col justify-center items-center"
          id="Account"
        >
          <div className="tb:text-4xl sp:text-3xl text-2xl font-semibold mb-8">
            Account
          </div>
          <a
            href="https://github.com/kawaaaas"
            className="cursor-pointer flex text-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={"image/github.svg"} className="mr-2" />
            <div>Github</div>
          </a>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
