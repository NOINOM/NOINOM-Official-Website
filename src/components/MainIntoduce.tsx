import Logo from "../asset/NOINOM.png";
import * as S from "../style/MainIntroduceStyle";
const MainIntoduce = () => {
  return (
    <S.MainNav>
      <S.LogoContextWrap>
        <img src={Logo} alt="" />
        <S.Context>NOINOM은 고등학생 인디게임 개발 팀입니다.</S.Context>
      </S.LogoContextWrap>
    </S.MainNav>
  );
};

export default MainIntoduce;
