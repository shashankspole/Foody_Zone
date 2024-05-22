import React from "react";
import banner from "../assets/bg.png";
import { BASE_URL } from "../App";
import styled from "styled-components";
import { MainContainer } from "../App";

const FoodItemsList = ({ data, foodType }) => {
  console.log("coming data", data);

  return (
    <FoodItemsContainer>
      <MainContainer>
        <FoodCards>
          {data?.map((food) => {
            if (food.type === foodType || foodType === "all") {
              return (
                <FoodCardInfo key={food.name}>
                  <div className="food_img">
                    <img src={BASE_URL + food.image} alt="images..." />
                  </div>
                  <div className="foodCard_info">
                    <div className="food_info">
                      <h2>{food.name}</h2>
                      <p>{food.text}</p>
                    </div>
                    <div className="food_price">
                      <button>${food.price.toFixed(2)}</button>
                    </div>
                  </div>
                </FoodCardInfo>
              );
            }
          })}
        </FoodCards>
      </MainContainer>
    </FoodItemsContainer>
  );
};

export default FoodItemsList;

const FoodItemsContainer = styled.section`
  margin-top: 30px;

  background-image: url(${banner});
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding-top: 80px;
`;
const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  gap: 24px;
  justify-content: center;
`;
const FoodCardInfo = styled.div`
  padding-top: 15px;
  width: 360px;
  height: 167px;
  flex-shrink: 0;

  gap: 10px;
  display: flex;
  border-radius: 19.447px;
  border: 0.659px solid #98f9ff;
  background: url(<path-to-image>) lightgray 0% 0% / 50.8334219455719px
      50.8334219455719px repeat,
    radial-gradient(
      151.92% 127.02% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.04) 77.08%,
      rgba(70, 144, 212, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.184196472167969px);

  .foodCard_info {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 20px;

    .food_price {
      padding-right: 20px;

      button {
        background-color: #ff4343;
        padding: 5px 10px;
        font-size: 16px;
        color: white;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        &:active {
          background-color: red;
        }
      }
    }
  }

  .food_info {
    h2 {
      font-size: 18px;
      font-weight: 500;
    }
    p {
      font-size: 14px;
      font-weight: 200;
      padding-top: 10px;
    }
  }
`;
