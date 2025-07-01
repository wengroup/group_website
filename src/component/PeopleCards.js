import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { SubtitleIcon } from "./SubtitleIcon";
import { SubtitleIconSvg } from "./SubtitleIconSvg";
import GraduatesCards from "./GraduatesCards";
import PiCards from "./PiCards";
import PostdocsCards from "./PostdocsCards";
import UndergraduatesCards from "./UndergraduatesCards";
import { Link } from "gatsby";
const query = graphql`
  {
    file(name: { eq: "people" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }
  }
`;

const PeopleCards = () => {
  const data = useStaticQuery(query);
  return (
    <div id="people" className="bg-gray-50">
      <>
        <h2 className="text-center mb-20 pt-20">People</h2>
        {/* <div className="flex flex-row justify-center mb-10 ">
          {data.file.childrenImageSharp == [] ? (
            <SubtitleIcon icon={data.file.childrenImageSharp} smaller />
          ) : (
            <SubtitleIconSvg icon={data.file.publicURL} smaller />
          )}
        </div> */}
      </>
      <div className="flex flex-col gap-8">
        <PiCards />
        <PostdocsCards />
        <GraduatesCards />
        <UndergraduatesCards />
        <Link to="/alumni" className="flex items-center justify-center w-2/3">
          <h2 className=" w-1/2 pb-20 people-title ">Alumni...</h2>
        </Link>
      </div>
    </div>
  );
};
export default PeopleCards;
