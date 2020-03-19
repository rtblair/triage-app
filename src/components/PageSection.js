import React from 'react';
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';
import slug from 'remark-slug';
import headings from 'remark-autolink-headings';


const PageSection = ({section}) => (
  <div className={`section-area ${section.title.replace(/[^\w]/g, '-').toLowerCase()}`} >
    <h1 id={section.title.replace(/[^\w]/g, '-').toLowerCase()}>{section.title}</h1>
    <div dangerouslySetInnerHTML={{__html: remark()
    .use(recommended)
    .use(slug)
    .use(remarkHtml)
    .processSync(section.body).toString()}} />
  </div>
);

export default PageSection;