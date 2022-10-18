export const relativeToAbsoluteUrls = (htmlStrings = "") => {
  return htmlStrings.split(process.env.NEXT_PUBLIC_WP_URL).join("");
};
