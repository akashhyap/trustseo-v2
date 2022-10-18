import React from "react";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({ content, cssClass }) => {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
      className={cssClass}
    ></p>
  );
};
