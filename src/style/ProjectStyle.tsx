import styled from "styled-components";
import "./index.css";
import BackgroundImg1 from "../asset/Background1.png";
import BackgroundImg2 from "../asset/Background2.png";

interface IBackground {
  background: number;
}

export const BackgorundImg = styled.div`
  width: 100%;
  background-image: url(${(props: IBackground) =>
    props.background === 1
      ? `${BackgroundImg1}`
      : props.background === 2
      ? `${BackgroundImg2}`
      : props.background === 3
      ? null
      : null});
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
  width: 30rem;
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0rem 0rem 1rem 0rem;
  float: ${(props: IisRight) => (props.isRight ? "right" : "left")};
  text-align: ${(props: IisRight) => (props.isRight ? "right" : "left")};
`;

export const ProjContext = styled.p`
  width: 30rem;
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

export const SelectOption = styled.nav`
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

export const OptionBar = styled.div`
  height: ${(props: IisDetail) => (props.isDetail ? "18.4rem" : "3.5rem")};
  justify-content: space-between;
  overflow: hidden;
  transition: 1s;
`;

export const SubImgWarp = styled.nav`
  width: 28.125rem;
  height: 21.875rem;
  overflow: hidden;
  display: flex;
`;

interface ISubImg {
  background: number;
  subimg: number;
}

export const SubImg = styled.div`
  width: 28.125rem;
  height: 21.875rem;
  background-image: ${(props: ISubImg) => (props.subimg ? null : null)};
`;

export const SubImgFrame = styled.div`
  position: absolute;
  margin-left: ${(props: IisRight) => (props.isRight ? "5%" : "50%")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubImgArrowImg = styled.img`
  height: 4rem;
  width: 5rem;
  transition: 0.5s;
  transform: ${(props: IisRight) =>
    props.isRight ? "rotate(90deg)" : "rotate(270deg)"};
`;

export const SubImgNoneArrowImg = styled.div`
  height: 4rem;
  width: 5rem;
`;
