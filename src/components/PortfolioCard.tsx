import { Company } from "../types";

type Props = {
  item: Company;
  onPortfolioDelete: (symbol: string) => void;
};
const PortfolioCard = ({ item, onPortfolioDelete }: Props) => {
  return (
    <div>
      {item.name}
      <button onClick={() => onPortfolioDelete(item.symbol)}>x</button>
    </div>
  );
};
export default PortfolioCard;
