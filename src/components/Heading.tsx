import React from "react";

interface HeadingProps {
  className?: string;
  title?: string;
  text?: string;
  tag?: keyof JSX.IntrinsicElements;
}

const Heading: React.FC<HeadingProps> = ({ className, title, text, tag: Tag = 'div'}) => {
  return (
    <Tag className={`container relative z-2 ${className || ''}`}>
      {title && <h1>{title}</h1>}
      {text && <p>{text}</p>}
    </Tag>
  );
};

export default Heading;
