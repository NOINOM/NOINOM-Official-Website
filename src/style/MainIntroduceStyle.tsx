import styled, { keyframes } from "styled-components";
import "./index.css";
interface IisPhone {
  isPhone: boolean;
}
const AniContext = keyframes`
  0%{
    opacity :0;
    margin-top : 10rem;
  }100%{
    opacity : 1;
    margin-top:7rem;
  }
`;

export const MainNav = styled.nav`
  width: 100%;
  height: ${(props: IisPhone) => (props.isPhone ? "30rem" : "47rem")};
  background-color: #0d1b2f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  margin: ${(props: IisPhone) => (props.isPhone ? "0% 25%" : "0%")};
  width: ${(props: IisPhone) => (props.isPhone ? "50%" : "auto")};
`;

export const LogoContextWrap = styled.nav`
  height: 40%;
`;

export const Context = styled.p`
  width: ${(props: IisPhone) => (props.isPhone ? "10rem" : "auto")};
  text-align: center;
  font-size: ${(props: IisPhone) => (props.isPhone ? "1.2rem" : "2rem")};
  margin: ${(props: IisPhone) => (props.isPhone ? "0% auto" : "0%")};
  font-family: "Regular";
  color: white;
  animation: ${AniContext} 1s;
  animation-fill-mode: forwards;
  word-break: keep-all;
`;
