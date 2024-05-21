import styled from "styled-components";
import logo from "./assets/logo.svg";
import FoodItemsList from "./components/FoodItemsList";
import { useEffect, useState } from "react";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const filterItems = ["All", "Breakfast", "Lunch", "Dinner"];
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [foodType, setFoodType] = useState("all");

  useEffect(() => {
    const fetchingData = async () => {
      setLoading(true);

      try {
        const respones = await fetch(BASE_URL);

        const json = await respones.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch the data");
      }
    };
    fetchingData();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  const handlerFoodType = (item) => {
    const typeValue = item.toLowerCase();

    setFoodType(typeValue);
  };

  return (
    <>
      <MainContainer>
        <TopContainer>
          <div className="logo_img">
            <img src={logo} alt="logo..." />
          </div>
          <div className="search_input">
            <input type="text" placeholder="Search Food..." />
          </div>
        </TopContainer>
        <FilterItems>
          <ul>
            {filterItems.map((item, i) => (
              <li
                key={i}
                className="filter_list"
                onClick={() => handlerFoodType(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </FilterItems>
      </MainContainer>
      <FoodItemsList data={data} foodType={foodType} />
    </>
  );
};

export default App;

export const MainContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search_input {
    input {
      border: 1px solid red;
      background-color: transparent;
      height: 38px;
      padding: 0 12px;
      color: white;
      font-size: 16px;
      border-radius: 5px;
      width: 250px;
    }
  }
`;

const FilterItems = styled.div`
  color: white;
  ul {
    display: flex;
    list-style-type: none;
    gap: 14px;
    justify-content: center;
  }

  .filter_list {
    background-color: #ff4343;
    padding: 7px 12px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    &:active {
      background-color: red;
    }
  }
`;
