import { Image } from "types/portfolioData";

export const useContentfulImage = (image: Image) => {
  const { url } = image.fields.file;

  return `https:${url}`;
};
