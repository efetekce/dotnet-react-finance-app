import { Company } from "../types";

type Props = {
  onPortfolioCreate: (company: Company) => void;
  symbol?: string;
  id: any;
  company: Company;
};
const AddPortfolio = ({ onPortfolioCreate, company }: Props) => {
  return <button onClick={() => onPortfolioCreate(company)}>Add</button>;
};
export default AddPortfolio;
