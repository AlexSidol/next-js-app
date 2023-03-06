// import React from 'react';




// const Heading  = ({ tag, text }) => {
//   const Tag = tag || 'h1';
//   return <Tag>{text}</Tag>
// }

// export default Heading;

import React, { FC } from 'react';

interface HeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
}

const Heading: FC<HeadingProps> = ({ tag, text }) => {
  const Tag = tag || 'h1';
  return <Tag>{text}</Tag>;
};

export default Heading;