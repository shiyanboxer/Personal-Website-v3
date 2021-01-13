import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'Shiyan Boxer is a Computer Engineering student at Queen\'s University.',
  title: 'Shiyan Boxer | Software Engineer',
  url: 'https://shiyanboxer.netlify.app/',
  author: 'Shiyan Boxer',
  keywords: [
    'Shiyan Boxer',
    'Shiyan',
    'Boxer',
    'software engineer',
    'intern',
    'engineering',
    'student',
    'personal website',
    'computer science',
    'tech',
    'computer engineering',
    'data',
    'developer',
    'university of waterloo',
    'queens university',
    'front row ventures',
  ],
  img: '',
  twitterId: '@shiyan_boxer',
  facebookId: 'shiyan.boxer',
};

const SEO = () => (
  <Helmet>
    <meta property="fb:app_id" content={SEO_DATA.facebookId} />
    <meta property="og:title" content={SEO_DATA.title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={SEO_DATA.url} />
    <meta property="og:image" content={SEO_DATA.img} />
    <meta property="og:description" content={SEO_DATA.description} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={SEO_DATA.twitterId} />
    <meta name="twitter:site" content={SEO_DATA.url} />
    <meta name="twitter:title" content={SEO_DATA.title} />
    <meta name="twitter:description" content={SEO_DATA.description} />
    <meta name="twitter:domain" content={SEO_DATA.url} />
    <meta name="twitter:image:src" content={SEO_DATA.img} />

    <meta name="description" content={SEO_DATA.description} />
    <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
    <meta name="author" content={SEO_DATA.author} />
    <title>{SEO_DATA.title}</title>
    <html lang="en" />
  </Helmet>
);

export default SEO;