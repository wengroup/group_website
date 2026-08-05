import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
const query = graphql`
  {
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
    <div className="mt-20 bg-gray-50 pb-20" id="publications">
      <h2 className="text-center pt-20 pb-20">Publications</h2>
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

      <div className="w-full text-center pt-20 text-2xl font-medium text-gray-500">
        <Link to="/publications" className="hover:underline">
          Full publication list...
        </Link>
      </div>
    </div>
  );
};
