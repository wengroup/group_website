import React from "react"
// import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { SubtitleIcon } from "./SubtitleIcon"
import { SubtitleIconSvg } from "./SubtitleIconSvg"
import { useStaticQuery, graphql } from "gatsby"
import ResearchCard from "./ResearchCard"

const query = graphql`
  {
    file(name: { eq: "research" }) {
      # childrenImageSharp {
      #   gatsbyImageData
      # }
      extension
      publicURL
    }
    allFile(filter: { relativeDirectory: { eq: "research/img" } }) {
      nodes {
        relativePath
        extension
        publicURL
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export const Research = ({ researches, showLink }) => {
  const data = useStaticQuery(query)
  const {
    allFile: { nodes: imgs },
  } = data
  return (
    <article
      id="research"
      className={`${
        showLink
          ? "px-14 sm:w-4/5 mx-auto max-w-5xl sm:pt-20"
          : "px-14 sm:w-4/5 mx-auto max-w-5xl sm:pt-20"
      }`}
    >
      <h2 className="text-center">
        {showLink ? <Link to="Researches">RESEARCH</Link> : "RESEARCH"}
      </h2>
      <div className="flex flex-row justify-center mb-10">
        {data.file.childrenImageSharp === [] ? (
          <SubtitleIcon icon={data.file.childrenImageSharp} />
        ) : (
          <SubtitleIconSvg icon={data.file.publicURL} />
        )}
      </div>
      <ul className="grid gap-5">
        {researches.map(item => {
          return <ResearchCard item={item} key={item.id} imgs={imgs} />
        })}
      </ul>
    </article>
  )
}
