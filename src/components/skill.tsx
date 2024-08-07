import { SkillContentsType } from "@/types/types";
import React from "react";

export const Skill: React.FC<SkillContentsType> = ({
  firstIcon,
  secondIcon,
  skill,
  description,
}) => {
  return (
    <div>
      {secondIcon ? (
        <div className="flex items-center text-gray-700 h-[130px] tb:flex-row flex-col tb:mb-0 mb-4">
          <div className="flex flex-col tb:w-[280px] w-auto mx-auto tb:mb-0 mb-2">
            <div className="flex justify-center mb-0">
              <img src={firstIcon} />
              <img src={secondIcon} />
            </div>
            <div className="tb:text-lg sp:text-lg text-sm mx-auto">{skill}</div>
          </div>
          <div className="tb:text-lg sp:text-lg text-sm tb:w-[570px]">
            {description}
          </div>
        </div>
      ) : (
        <div className="flex items-center text-gray-700 h-[130px] tb:flex-row flex-col tb:mb-0 mb-4">
          <div className="flex flex-col justify-center  tb:w-[280px] w-auto mx-auto tb:mb-0 mb-2">
            <img src={firstIcon} className="w-[48px] mx-auto" />
            <div className="tb:text-lg sp:text-lg text-sm mx-auto">{skill}</div>
          </div>
          <p
            className="tb:text-lg sp:text-lg text-sm tb:w-[570px]"
            dangerouslySetInnerHTML={{
              __html: description.replace(/\n/g, "<br />"),
            }}
          />
        </div>
      )}
    </div>
  );
};
