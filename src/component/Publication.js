import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { SubtitleIcon } from "./SubtitleIcon";
import { SubtitleIconSvg } from "./SubtitleIconSvg";
const query = graphql`
  {
    subTitle: file(name: { eq: "publication" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }
    google: file(name: { eq: "Googlescholar" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }
    researchGate: file(name: { eq: "Researchgate" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }
    orcid: file(name: { eq: "Orcid" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }
  }
`;

export const Publication = () => {
  const data = useStaticQuery(query);

  return (
    <div className="mt-20 bg-slate-50 pb-20" id="publications">
      <h2 className="text-center pt-20 pb-20">Publications</h2>
      {/* <div className="flex flex-row justify-center mb-10">
        {data.subTitle.childrenImageSharp == [] ? (
          <SubtitleIcon icon={data.subTitle.childrenImageSharp} smaller />
        ) : (
          <SubtitleIconSvg icon={data.subTitle.publicURL} smaller />
        )}
      </div> */}
      <div className="flex gap-6 justify-center text-lg w-max mx-auto">
        <a
          href="https://scholar.google.com/citations?user=RXLH5k4AAAAJ&hl=en"
          className="hover:text-Button hover:underline flex items-center"
        >
          <div className="w-8 h-8">
            <img src={data.google.publicURL} alt="googlescholar" />
          </div>
          {/* <p className="indent-2">Google Scholar</p> */}
        </a>
        <a
          href="https://www.researchgate.net/profile/Mingjian-Wen"
          className="hover:text-Button hover:underline flex space-x-1 items-center "
        >
          <div className="w-8 h-8">
            <img src={data.researchGate.publicURL} alt="researchgate" />
          </div>
          {/* <p className="indent-2">ResearchGate</p> */}
        </a>
        <a
          href="https://orcid.org/0000-0003-0013-575X"
          className="hover:text-Button hover:underline flex space-x-1 items-center "
        >
          <div className="w-8 h-8">
            <img src={data.orcid.publicURL} alt="orcid" />
          </div>
          {/* <p className="indent-2">ORCID</p> */}
        </a>
      </div>

      <p className="w-full text-center pt-10 pl-32">
        <a href="">Details...</a>
      </p>
    </div>
  );
};
