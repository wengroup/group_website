import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, image, url, lang }) => {
  const defaultTitle = {
    en: "文明健课题组 - 电子科大 ｜ Wen Group, UESTC",
    zh: "文明健课题组 - 电子科大 ｜ Wen Group, UESTC",
  };
  const defaultDescription = {
    en: "Mingjian Wen Research Group at UESTC, focusing on AI for Science, Materails Genome Engineering, and Energy Storage Systems.",
    zh: "电子科技大学文明健教授课题组, 主要研究方向为数据和人工智能驱动的材料设计，包括材料基因组、机器学习算法、不确定性量化、能源及磁性材料等领域的交叉研究。",
   };
  const defaultImage = "https://wengroup.github.io/preview.png";
  const defaultUrl = "https://wengroup.github.io/";
  const defaultLang = "en";

  const seoLang = lang || defaultLang;
  const seoTitle = title || defaultTitle[seoLang] || defaultTitle[defaultLang];
  const seoDescription = description || defaultDescription[seoLang] || defaultDescription[defaultLang];
  const seoImage = image || defaultImage;
  const seoUrl = url || defaultUrl;

  return (
    <Helmet
      htmlAttributes={{ lang: seoLang }}
      title={seoTitle}
    >
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content="人工智能材料设计, 机器学习势函数, 材料基因组, 电池材料, 磁性材料, 密度泛函理论, 分子动力学, 电子科技大学, 电子科大,  基础与前沿研究院, 文明健, Mingjian Wen Group UESTC" />
      <meta name="author" content="文明健, Mingjian Wen Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Help search engine to find the image */}
      <link rel="image_src" href={seoImage} />

      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={seoTitle} />
      <meta property="og:site_name" content="文明健课题组 - Mingjian Wen Group UESTC" />

      {/* Canonical Link */}
      <link rel="canonical" href={seoUrl} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ResearchLab",
          "name": "文明健课题组 - Mingjian Wen Group",
          "description": seoDescription,
          "url": seoUrl,
          "logo": seoImage,
          "image": seoImage,
          "primaryImageOfPage": {  // 添加这个属性指定页面主图
            "@type": "ImageObject",
            "url": seoImage,
            "width": 1200,
            "height": 630,
            "caption": seoDescription
          },
          "affiliation": {
            "@type": "CollegeOrUniversity",
            "name": "电子科技大学, UESTC",
            "url": "https://www.uestc.edu.cn"
          },
          "founder": {
            "@type": "Person",
            "name": "文明健, Mingjian Wen",
            "jobTitle": "Professor",
          },
          "keywords": "人工智能材料设计, 机器学习势函数, 材料基因组, 电池材料, 磁性材料",
        })}
      </script>
    </Helmet>
  );
};

export default Seo;
