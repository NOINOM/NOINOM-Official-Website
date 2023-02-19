import styled from "styled-components";
import "./index.css";

export const BottomNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #07111f;
  height: 5rem;
`;

export const NameWrap = styled.nav`
  width: 50rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 0.4em;
  font-family: "Regular";
`;

export const Sidebar = styled.div`
  width: 0.25rem;
  height: 0.25rem;
  background-color: white;
  margin: 0 2rem;
  border-radius: 50%;
`;
