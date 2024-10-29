import { Image } from "types/portfolioData";

export const getImageUrl = (image: Image) => {
  const { url } = image.fields.file;

  return `https:${url}`;
};
