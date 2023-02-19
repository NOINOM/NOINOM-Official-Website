import * as S from "../style/HeaderStyled";
import Logo from "../asset/NOINOM.png";

const Header = () => {
  return (
    <S.Header>
      <S.NavWrap>
        <S.LogoImg src={Logo} alt="로고" />
        <S.Sidebar></S.Sidebar>
        <S.TitleWrap>
          <p>Rolling Root</p>
          <p>Rolling Root 3D</p>
          <p>돌붕이 키우기</p>
          <p>두근두근 CNS</p>
        </S.TitleWrap>
      </S.NavWrap>
    </S.Header>
  );
};

export default Header;
