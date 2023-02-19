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
  backdrop-filter: blur(10px);
`;

export const ProjTitle = styled.p`
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0rem 0rem 1rem 0rem;
`;

export const ProjContext = styled.p`
  width: 80%;
  word-break: keep-all;
  font-size: 1.5rem;
`;

export const NoLink = styled.p`
  text-align: center;
  font-size: 1.2rem;
  width: 13rem;
  padding: 1rem;
  background-color: #183761;
`;

interface IisRight {
  isRight: boolean;
}

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
  margin-top: 1rem;
`;

export const ButtonNavbar = styled.nav`
  margin-top: 8rem;
`;

export const ArrowImgNav = styled.nav`
  position: absolute;
  margin-left: 17rem;
  padding: 0.85rem 0.5rem;
  background-color: #183761;
`;

export const ArrowImg = styled.img`
  margin: auto;
  height: 1.5rem;
  width: 1.5rem;
`;
