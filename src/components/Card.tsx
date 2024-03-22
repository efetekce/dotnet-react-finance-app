import styled from "styled-components";
import { Company } from "../types";
import AddPortfolio from "./AddPortfolio";
interface Props {
  onPortfolioCreate: (company: Company) => void;
  id: any;
  company: Company;
}
const StyledCard = styled.div`
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  object-fit: contain;
`;

const Card: React.FC<Props> = ({ id, company, onPortfolioCreate }: Props): JSX.Element => {
  return (
    <StyledCard>
      <CardImage src="https://images.unsplash.com/photo-1710209614924-6bf12ec19b85?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div className="details">
        <h2>
          {company.name}, {company.exchangeShortName}
        </h2>
        <p>${company.currency}</p>
      </div>
      <p className="info">
        {company.exchangeShortName} - {company.stockExchange}
      </p>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} company={company} id={id} />
    </StyledCard>
  );
};
export default Card;
