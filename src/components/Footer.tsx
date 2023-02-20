import * as S from "../style/FooterStyle";
import Github from "../asset/gitHub.png";

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.GithubLogo src={Github} alt="logo" />
        <div onClick={() => window.open("https://github.com/noinom")}>
          github.com/NOINOM
        </div>
      </S.FooterContainer>
    </S.Footer>
  );
};

export default Footer;
