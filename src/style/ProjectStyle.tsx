import styled from "styled-components";
import "./index.css";
import BackgroundImg1 from "../asset/Background1.png";
import Pic11 from "../asset/Proj1/1.png";
import Pic12 from "../asset/Proj1/2.png";
import Pic13 from "../asset/Proj1/3.png";
import Pic14 from "../asset/Proj1/4.png";
import BackgroundImg2 from "../asset/Background2.png";
import Pic21 from "../asset/Proj2/1.png";
import Pic22 from "../asset/Proj2/2.png";
import Pic23 from "../asset/Proj2/3.png";
import Pic24 from "../asset/Proj2/4.png";
import BackgroundImg3 from "../asset/Background3.png";
import Pic31 from "../asset/Proj3/1.png";
import BackgroundImg4 from "../asset/Background4.png";
import Pic41 from "../asset/Proj4/1.png";

interface IBackground {
  isPhone: boolean;
  background: number;
}
interface IisRight {
  isRight: boolean;
}

interface IisPhone {
  isPhone: boolean;
}

interface IBoth {
  isRight: boolean;
  isPhone: boolean;
}

export const BackgroundBlur = styled.nav`
  position: absolute;
  width: 100%;
  height: ${(props: IisPhone) => (props.isPhone ? "20rem" : "46rem")};
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
`;

export const BackgorundImg = styled.div`
  width: 100%;
  height: ${(props: IisPhone) => (props.isPhone ? "20rem" : "46rem")};
  background-image: url(${(props: IBackground) =>
    props.background === 1
      ? `${BackgroundImg1}`
      : props.background === 2
      ? `${BackgroundImg2}`
      : props.background === 3
      ? `${BackgroundImg3}`
      : `${BackgroundImg4}`});
  color: white;
  font-family: "Regular";
  display: flex;
  align-items: center;
  background-size: cover;
`;

export const ProjTitle = styled.p`
  width: ${(props: IisPhone) => (props.isPhone ? "24rem" : "30rem")};
  font-size: ${(props: IisPhone) => (props.isPhone ? "2.8rem" : "3.5rem")};
  font-weight: bold;
  margin: ${(props: IisPhone) =>
    props.isPhone ? "3rem 0rem 0rem 0rem" : "0rem 0rem 1rem 0rem"};
  float: ${(props: IBoth) =>
    props.isRight ? (props.isPhone ? "left" : "right") : "left"};
  text-align: ${(props: IBoth) =>
    props.isRight
      ? props.isPhone
        ? "center"
        : "right"
      : props.isPhone
      ? "center"
      : "left"};
`;

export const ProjContext = styled.p`
  width: ${(props: IisPhone) => (props.isPhone ? "16rem" : "30rem")};
  word-break: keep-all;
  font-size: ${(props: IisPhone) => (props.isPhone ? "1.2rem" : "1.5rem")};
  float: ${(props: IisRight) => (props.isRight ? "right" : "left")};
  text-align: ${(props: IBoth) =>
    props.isPhone ? "center" : props.isRight ? "right" : "left"};
  margin-top: ${(props: IisPhone) => (props.isPhone ? "-4rem" : "0rem")};
`;

export const NoLink = styled.p`
  text-align: center;
  font-size: 1.2rem;
  width: ${(props: IisPhone) => (props.isPhone ? "100%" : "13rem")};
  padding: ${(props: IisPhone) => (props.isPhone ? "1rem 0rem" : "1rem")};
  background-color: #183761;
  font-family: "Regular";
  color: white;
  font-weight: bold;
`;

export const TitleNav = styled.nav`
  width: ${(props: IBoth) => (props.isPhone ? `100%` : "30%")};
  height: ${(props: IBoth) => (props.isPhone ? `20rem` : "50%")};
  position: absolute;
  margin: ${(props: IBoth) =>
    props.isRight
      ? props.isPhone
        ? "0px"
        : "0px 0px 0px 60%"
      : props.isPhone
      ? "0px"
      : "0px 0px 0px 10%"};
  z-index: 1;
  display: ${(props: IisPhone) => (props.isPhone ? "flex" : "block")};
  flex-wrap: wrap;
  justify-content: center;
`;

export const SelectOption = styled.nav`
  text-align: center;
  font-size: 1.2rem;
  width: ${(props: IisPhone) => (props.isPhone ? "100%" : "14rem")};
  padding: ${(props: IisPhone) => (props.isPhone ? "1rem 0rem" : "1rem")};
  background-color: #183761;
  font-weight: bold;
  color: white;
  border: none;
  margin-bottom: ${(props: IisPhone) => (props.isPhone ? "0rem" : "0.3rem")};
`;

export const ButtonNavbar = styled.nav`
  margin-top: 8rem;
  float: ${(props: IisRight) => (props.isRight ? "right" : "left")};
`;

export const DownloadLinkWrap = styled.nav`
  position: absolute;
  margin-left: ${(props: IisRight) => (props.isRight ? "11rem" : "-30rem")};
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
  width: 460px;
  height: 345px;
  overflow: hidden;
`;

interface ISubImg {
  background: number;
  subimg: number;
  isPhone: boolean;
}

export const SubImg = styled.div`
  width: ${(props: IisPhone) => (props.isPhone ? "100%" : "460px")};
  height: ${(props: IisPhone) => (props.isPhone ? "18rem" : "345px")};
  background-image: url(${(props: ISubImg) =>
    props.background === 1
      ? props.subimg === 1
        ? `${Pic11}`
        : props.subimg === 2
        ? `${Pic12}`
        : props.subimg === 3
        ? `${Pic13}`
        : `${Pic14}`
      : props.background === 2
      ? props.subimg === 1
        ? `${Pic21}`
        : props.subimg === 2
        ? `${Pic22}`
        : props.subimg === 3
        ? `${Pic23}`
        : `${Pic24}`
      : props.background === 3
      ? `${Pic31}`
      : `${Pic41}`});
  background-size: cover;
  border-radius: ${(props: IisPhone) => (props.isPhone ? "0px" : "15px")};
`;

export const SubImgFrame = styled.div`
  position: ${(props: IisPhone) => (props.isPhone ? "block" : "absolute")};
  margin-left: ${(props: IBoth) =>
    props.isPhone ? "0%" : props.isRight ? "5%" : "50%"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const SubImgArrowImg = styled.img`
  position: ${(props: IisPhone) => (props.isPhone ? "absolute" : "block")};
  margin: ${(props: IBoth) =>
    props.isRight
      ? props.isPhone
        ? "0rem -80% 0rem 0rem"
        : "0rem"
      : props.isPhone
      ? "0rem 0rem 0rem -80%"
      : "0rem"};
  height: 4rem;
  width: 5rem;
  filter: drop-shadow(
    ${(props: IBoth) =>
      props.isRight
        ? "0.3rem 0.3rem 0.2rem rgba(0, 0, 0, 1)"
        : "-0.3rem 0.3rem 0.2rem rgba(0, 0, 0, 1)"}
  );
  transition: 0.5s;
  transform: ${(props: IBoth) =>
    props.isRight ? "rotate(90deg)" : "rotate(270deg)"};
`;

export const SubImgNoneArrowImg = styled.div`
  position: ${(props: IisPhone) => (props.isPhone ? "absolute" : "block")};
  height: 4rem;
  width: 5rem;
`;
