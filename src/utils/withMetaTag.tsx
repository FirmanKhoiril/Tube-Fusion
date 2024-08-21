import { Helmet } from "react-helmet-async";

type TMetaTagsPage = {
    children: React.ReactNode;
    title: string
    desc: string,
    keywords: string,
    link: string
}

export default function WithMetaTag({children, title, desc, keywords, link}: TMetaTagsPage) {
  return (
    <>
        <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={link}/>
      </Helmet>
      {children}
    </>
  )
}
