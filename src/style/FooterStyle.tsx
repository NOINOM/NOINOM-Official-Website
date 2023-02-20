import styled from "styled-components";
import "./index.css";
interface IisPhone {
  isPhone: boolean;
}
export const Footer = styled.footer`
  height: ${(props: IisPhone) => (props.isPhone ? "10rem;" : "16rem")};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d1b2f;
  color: white;
  font-size: ${(props: IisPhone) => (props.isPhone ? "0.8rem;" : "1.2rem")};
  font-family: "Regular";
  letter-spacing: 0.2em;
`;

export const FooterContainer = styled.nav`
  display: flex;
  width: ${(props: IisPhone) => (props.isPhone ? "14rem;" : "22rem")};
  justify-content: space-between;
  align-items: center;
`;

export const GithubLogo = styled.img`
  width: ${(props: IisPhone) => (props.isPhone ? "3rem" : "4.5rem")};
  height: ${(props: IisPhone) => (props.isPhone ? "3rem" : "4.5rem")}; ;
`;
