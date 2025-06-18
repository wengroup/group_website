import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";
import ReactMarkdown from "react-markdown";
import { Manual } from "./Manual";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    file(name: { eq: "News" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }
  }
`;

export const New = ({ news, showGrid }) => {
  const data = useStaticQuery(query);
  return (
    <div>
      <div className="flex items-center justify-center">
        <div
          id="news"
          className={`${showGrid ? "w-2/3 mx-auto max-w-3xl" : "w-1/2 "}`}
        >
          <Link to="/News">
            {/* <GatsbyImage image={data.file.childrenImageSharp} alt="news" /> */}
            {/* <img src={data.file.publicURL} alt="news" /> */}
            <h2 className="text-center mb-20 pt-20">News</h2>
          </Link>

          {/* <div className={`${!showGrid && "overflow-scroll h-128 p-4"}`}> */}

          <div>
            {news &&
              (showGrid
                ? news.map((item) => (
                    <ul className="mb-5" key={item.id}>
                      <li className="pb-5">
                        <div className="flex flex-row" id={item.id}>
                          <p className="subTitle text-lg italic">{item.date}</p>
                        </div>
                        <div
                          className={`${
                            showGrid
                              ? "mk mk-page markdown"
                              : "mk markdown font-semibold"
                          }`}
                        >
                          <ReactMarkdown children={item.content} />
                        </div>
                      </li>
                      <hr />
                    </ul>
                  ))
                : news.slice(0, 3).map((item) => (
                    <AnchorLink to={`/News#${item.id}`} key={item.id}>
                      <ul className="mb-5">
                        <li className="pb-5">
                          <div className="flex flex-row" id={item.id}>
                            <p className="subTitle text-lg italic">
                              {item.date}
                            </p>
                          </div>
                          <div
                            className={`${
                              showGrid
                                ? "mk mk-page markdown"
                                : "mk markdown font-medium text-xl text-black"
                            }`}
                          >
                            <ReactMarkdown children={item.content} />
                          </div>
                        </li>
                        <hr />
                      </ul>
                    </AnchorLink>
                  )))}
          </div>

          {/* {!showGrid && <Manual />} */}
        </div>
      </div>
      <Link to="/News" className="flex items-center justify-center">
        {/* <GatsbyImage image={data.file.childrenImageSharp} alt="news" /> */}
        {/* <img src={data.file.publicURL} alt="news" /> */}
        {!showGrid && <p className=" w-1/2 text-right pb-20">More...</p>}
      </Link>
    </div>
  );
};
