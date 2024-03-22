import { Company } from "../types";
import PortfolioCard from "./PortfolioCard";

type Props = {
  list: Company[];
  onPortfolioDelete: (symbol: string) => void;
};
const PortfolioList = ({ list, onPortfolioDelete }: Props) => {
  return (
    <div>
      {list.map((item) => (
        <PortfolioCard item={item} key={item.symbol} onPortfolioDelete={onPortfolioDelete} />
      ))}
    </div>
  );
};
export default PortfolioList;
