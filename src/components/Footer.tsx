import * as S from "../style/FooterStyle";
import Github from "../asset/gitHub.png";
interface IFooter {
  isPhone: boolean;
}
const Footer = (props: IFooter) => {
  return (
    <S.Footer isPhone={props.isPhone}>
      <S.FooterContainer isPhone={props.isPhone}>
        <S.GithubLogo src={Github} alt="logo" isPhone={props.isPhone} />
        <div onClick={() => window.open("https://github.com/noinom")}>
          github.com/NOINOM
        </div>
      </S.FooterContainer>
    </S.Footer>
  );
};

export default Footer;
