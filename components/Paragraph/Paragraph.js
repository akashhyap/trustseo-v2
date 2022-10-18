import React from "react";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({ content }) => {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    ></p>
  );
};
