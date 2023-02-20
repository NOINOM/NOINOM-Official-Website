import * as S from "../style/HeaderStyled";
import Logo from "../asset/NOINOM.png";

interface IHeader {
  Proj1Click: () => void;
  Proj2Click: () => void;
  Proj3Click: () => void;
  Proj4Click: () => void;
}

const Header = (props: IHeader) => {
  return (
    <S.Header>
      <S.NavWrap>
        <S.LogoImg src={Logo} alt="로고" />
        <S.Sidebar></S.Sidebar>
        <S.TitleWrap>
          <p onClick={props.Proj1Click}>Rolling Root</p>
          <p onClick={props.Proj2Click}>Rolling Root 3D</p>
          <p onClick={props.Proj3Click}>돌붕이 키우기</p>
          <p onClick={props.Proj4Click}>두근두근 CNS</p>
        </S.TitleWrap>
      </S.NavWrap>
    </S.Header>
  );
};

export default Header;
