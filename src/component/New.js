import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownPlugins = [remarkGfm];
// News entries use **bold** to set off paper and project titles. Against the
// light body text, full bold is too loud, so render it at normal weight.
const markdownComponents = {
  strong: ({ children }) => <strong className="font-normal">{children}</strong>,
};

const NewsDate = ({ item, linked }) => {
  const date = (
    <div className="flex flex-row" id={item.id}>
      <p className="subTitle text-lg">{item.date}</p>
    </div>
  );

  return linked ? (
    <AnchorLink to={`/News#${item.id}`}>{date}</AnchorLink>
  ) : (
    date
  );
};

export const New = ({ news, showGrid }) => {
  const displayedNews = showGrid ? news : news?.slice(0, 3);

  return (
    <div>
      <div className="flex items-center justify-center">
        <div id="news" className="w-5/6 sm:w-1/2">
          <Link to="/News">
            <h2 className="text-center mb-20 pt-20">News</h2>
          </Link>

          <div>
            {displayedNews?.map((item) => (
              <ul className="mb-5" key={item.id}>
                <li className="pb-5">
                  <NewsDate item={item} linked={!showGrid} />
                  <div className="mk markdown font-light text-xl text-black">
                    <ReactMarkdown
                      remarkPlugins={markdownPlugins}
                      components={markdownComponents}
                    >
                      {item.content}
                    </ReactMarkdown>
                  </div>
                </li>
                <hr />
              </ul>
            ))}
          </div>
        </div>
      </div>
      <Link to="/News" className="flex items-center justify-center">
        {!showGrid && (
          <p className="w-5/6 pb-20 text-gray-500 font-semibold text-xl hover:underline sm:w-1/2">
            More...
          </p>
        )}
      </Link>
    </div>
  );
};
