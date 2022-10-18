import { getFontSizeForHeading, getTextAlign } from "utils/font";
import React from "react";

export const Heading = ({ textAlign, content, level, style, cssClass }) => {
  const { color } = !!style && style;
  const bgcolor = !!style && color.background;
  const textcolor = !!style && color.text;

  //   console.log("STYLE", color.background);

  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)} ${cssClass}`,
    style: { background: `${bgcolor}`, color: `${textcolor}` },
  });

  return tag;
};
