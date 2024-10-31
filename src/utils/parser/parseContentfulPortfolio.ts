import type { PortfolioData } from "types/portfolioData";
import { EntryCollection, EntrySkeletonType } from "contentful";

export const parseContentfulPortfolio = (
  entries: EntryCollection<EntrySkeletonType> | null
): PortfolioData => {
  const portfolio = {
    ...entries?.items[0].fields,
    projects: entries?.includes?.Entry ?? [],
  } as unknown;

  return portfolio as PortfolioData;
};
