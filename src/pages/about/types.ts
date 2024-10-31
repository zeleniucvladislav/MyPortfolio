import { PortfolioData } from "types/portfolioData";

export type Props = Pick<
  PortfolioData,
  "description" | "profileImage" | "technologies"
>;
