import { Company } from "../types";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
interface Props {
  onPortfolioCreate: (company: Company) => void;
  searchResults: Company[];
}
const CardList = ({ searchResults, onPortfolioCreate }: Props) => {
  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((company) => (
          <Card
            id={uuidv4()}
            key={uuidv4()}
            company={company}
            onPortfolioCreate={onPortfolioCreate}
          />
        ))
      ) : (
        <h1>No Results Found</h1>
      )}
    </div>
  );
};
export default CardList;
