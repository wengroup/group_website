import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, image, url, lang }) => {
  const defaultTitle = "电子科大文明健 - Wen Group";
  const defaultDescription =
    "电子科技大学文明健教授课题组，专注于核材料与工程研究，展示科研成果、团队信息与最新动态。";
  const defaultImage = "https://wengroup.github.io/preview.png";
  const defaultUrl = "https://wengroup.github.io/";
  const defaultLang = "en";

  return (
    <Helmet
      htmlAttributes={{ lang: lang || defaultLang }}
      title={title || defaultTitle}
    >
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content="电子科大,文明健, Wen Group" />
      <meta name="author" content="文明健, Wen Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:image" content={image || defaultImage} />

      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "文明健",
          "affiliation": {
            "@type": "CollegeOrUniversity",
            "name": "电子科技大学"
          },
          "jobTitle": "Professor",
          "url": "https://wengroup.github.io/",
          "worksFor": {
            "@type": "ResearchProject",
            "name": "Wen Group"
          }
        }
        `}
      </script>
    </Helmet>
  );
};

export default Seo;
