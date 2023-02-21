import * as S from "../style/HeaderStyled";
import Logo from "../asset/NOINOM.svg";

interface IHeader {
  isPhone: boolean;
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
        {props.isPhone ? null : (
          <>
            <S.Sidebar></S.Sidebar>
            <S.TitleWrap>
              <S.Title onClick={props.Proj1Click}>Rolling Root</S.Title>
              <S.Title onClick={props.Proj2Click}>Rolling Root 3D</S.Title>
              <S.Title onClick={props.Proj3Click}>돌붕이 키우기</S.Title>
              <S.Title onClick={props.Proj4Click}>두근두근 개발부</S.Title>
            </S.TitleWrap>
          </>
        )}
      </S.NavWrap>
    </S.Header>
  );
};

export default Header;
