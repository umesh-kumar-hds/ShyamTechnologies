import { Helmet } from "react-helmet-async";

const SEOHelmet = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEOHelmet;
