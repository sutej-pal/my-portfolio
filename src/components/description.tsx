import React from "react";
import DOMPurify from "dompurify";

interface DescriptionProps {
  htmlString: string;
}

const Description: React.FC<DescriptionProps> = ({ htmlString }) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlString);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default Description;
