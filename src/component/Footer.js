import React from "react";
import { FaGithubSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="h-32 w-ful footer ">
      <div className="flex flex-col text-center sm:text-left sm:flex-row w-full justify-between items-center max-w-5xl mx-auto h-full ">
        <div>
          <p className="font-medium">联系方式：</p>
          <p>四川省成都市高新区（西区）西源大道2006号清水河校区</p>
          <p>邮箱: mjwen@uh.edu</p>
        </div>
        <div>
          <p>
            &copy;&nbsp;{new Date().getFullYear()}
            <span>&nbsp;Mingjian Wen </span>
          </p>
          <div className="flex flex-row gap-2">
            <p>Designed by</p>
            <a
              href="https://github.com/mmbliv"
              className="flex items-center hover:underline hover:text-Button"
            >
              <div className=" text-gray-500">
                <FaGithubSquare />
              </div>
              <p className=" pl-2">mmbliv</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    // className="bottom-0 relative mt-11 h-32 w-full bg-slate-400 flex flex-col justify-center items-center"
  );
};
