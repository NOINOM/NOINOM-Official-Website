import styled from "styled-components";
import "./index.css";
import BackgroundImg1 from "../asset/Background1.png";

export const BackgorundImg = styled.div`
  width: 100%;
  background-image: url(${BackgroundImg1});
  height: 46rem;
  color: white;
  font-family: "Regular";
  display: flex;
  align-items: center;
  background-size: cover;
  background-filter: blur(10px);
`;

interface IisRight {
  isRight: boolean;
}

export const ProjTitle = styled.p`
  background-color: gray;
  width: 30rem;
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0rem 0rem 1rem 0rem;
  float: ${(props: IisRight) => (props.isRight ? "right" : "left")};
  text-align: ${(props: IisRight) => (props.isRight ? "right" : "left")};
`;

export const ProjContext = styled.p`
  width: 30rem;
  background-color: gray;
  word-break: keep-all;
  font-size: 1.5rem;
  float: ${(props: IisRight) => (props.isRight ? "right" : "left")};
  text-align: ${(props: IisRight) => (props.isRight ? "right" : "left")};
`;

export const NoLink = styled.p`
  text-align: center;
  font-size: 1.2rem;
  width: 13rem;
  padding: 1rem;
  background-color: #183761;
`;

export const TitleNav = styled.nav`
  width: 30%;
  height: 50%;
  position: absolute;
  margin: ${(props: IisRight) => (props.isRight ? "60%" : "10%")};
`;

export const Select = styled.div`
  font-size: 1.2rem;
  width: 14rem;
  padding: 1rem;
  background-color: #183761;
  font-weight: bold;
  color: white;
  border: none;
`;

export const SelectOption = styled.div`
  text-align: center;
  font-size: 1.2rem;
  width: 14rem;
  padding: 1rem;
  background-color: #183761;
  font-weight: bold;
  color: white;
  border: none;
  margin-bottom: 0.3rem;
`;

export const ButtonNavbar = styled.nav`
  margin-top: 8rem;
  float: ${(props: IisRight) => (props.isRight ? "right" : "left")};
`;

export const ArrowImgNav = styled.nav`
  position: absolute;
  margin-left: 16.3rem;
  padding: 0.85rem 0.5rem;
  background-color: #183761;
`;

interface IisDetail {
  isDetail: boolean;
}

export const ArrowImg = styled.img`
  margin: auto;
  height: 1.5rem;
  width: 1.5rem;
  transition: 0.5s;
  transform: ${(props: IisDetail) =>
    props.isDetail ? `rotate(180deg)` : `rotate(0deg)`};
`;
