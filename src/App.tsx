import { useState } from "react";
import CardList from "./components/CardList";
import Search from "./components/Search";
import { Company } from "./types";
import axios from "axios";
import PortfolioList from "./components/PortfolioList";

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Company[]>([]);
  // const [serverError, setServerError] = useState<string>("");
  const [porfolioList, setPortfolioList] = useState<Company[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // console.log(e);
  };

  const onSearchSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // console.log(e);
    const result = await searchCompanies(search);
    // console.log(result);
    setSearchResults(result);
  };

  const searchCompanies = async (query: string) => {
    try {
      const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);

      if (axios.isAxiosError(error)) {
        console.log("error message:", error.message);
      } else console.log("unexpected error", error);
    }
  };
  const onPortfolioCreate = (company: Company) => {
    // console.log(company);
    if (porfolioList.includes(company)) return;
    else setPortfolioList([...porfolioList, company]);
    // console.log(porfolioList);
  };

  const onPortfolioDelete = (symbol: string) => {
    console.log(symbol);

    setPortfolioList(porfolioList.filter((company) => company.symbol !== symbol));
    console.log(porfolioList);
  };
  return (
    <>
      <Search
        handleSearchChange={handleSearchChange}
        search={search}
        onSearchSubmit={onSearchSubmit}
      />
      <CardList searchResults={searchResults} onPortfolioCreate={onPortfolioCreate} />
      <PortfolioList list={porfolioList} onPortfolioDelete={onPortfolioDelete} />
    </>
  );
}

export default App;
