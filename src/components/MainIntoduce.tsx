import Logo from "../asset/NOINOM.png";
import * as S from "../style/MainIntroduceStyle";

interface IMainIntro {
  isPhone: boolean;
}

const MainIntoduce = (props: IMainIntro) => {
  return (
    <S.MainNav isPhone={props.isPhone}>
      <S.LogoContextWrap>
        <S.LogoImg src={Logo} alt="" isPhone={props.isPhone} />
        <S.Context isPhone={props.isPhone}>
          NOINOM은 고등학생 인디게임 개발 팀입니다.
        </S.Context>
      </S.LogoContextWrap>
    </S.MainNav>
  );
};

export default MainIntoduce;
