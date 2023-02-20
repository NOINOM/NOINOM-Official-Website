import * as S from "../style/MainBottomBarStyle";

const MainBottomBar = () => {
  return (
    <S.BottomNavbar>
      <S.NameWrap>
        <S.Name delay={0}>장민교</S.Name>
        <S.Sidebar></S.Sidebar>
        <S.Name delay={0.3}>이석호</S.Name>
        <S.Sidebar></S.Sidebar>
        <S.Name delay={0.6}>황주완</S.Name>
        <S.Sidebar></S.Sidebar>
        <S.Name delay={0.9}>배경민</S.Name>
        <S.Sidebar></S.Sidebar>
        <S.Name delay={1.2}>강지석</S.Name>
        <S.Sidebar></S.Sidebar>
        <S.Name delay={1.5}>한지원</S.Name>
      </S.NameWrap>
    </S.BottomNavbar>
  );
};

export default MainBottomBar;
