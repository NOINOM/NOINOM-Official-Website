import * as S from "../style/ProjectStyle";
import Arrow from "../asset/arrow-down.png";

interface IProject {
  title: string;
  context: string;
  download: {
    windows: string | null;
    macos: string | null;
    linux: string | null;
    android: string | null;
    ios: string | null;
  } | null;
  background: ImageData;
  image: ImageData[] | null;
  isRight: boolean;
}

const Project = (props: IProject) => {
  return (
    <S.BackgorundImg>
      <S.TitleNav isRight={props.isRight}>
        <S.ProjTitle>{props.title}</S.ProjTitle>
        <S.ProjContext>{props.context}</S.ProjContext>
        <S.ButtonNavbar>
          {props.download == null ? (
            <S.NoLink
              onClick={() => {
                console.log(props.background);
              }}
            >
              개발 진행 중
            </S.NoLink>
          ) : (
            <>
              <S.ArrowImgNav>
                <S.ArrowImg src={Arrow} alt="" />
              </S.ArrowImgNav>
              {props.download.windows == null ? null : (
                <S.SelectOption>Windows 다운로드</S.SelectOption>
              )}
              {props.download.macos == null ? null : (
                <S.SelectOption>macOS 다운로드</S.SelectOption>
              )}
              {props.download.linux == null ? null : (
                <S.SelectOption>Linux 다운로드</S.SelectOption>
              )}
              {props.download.android == null ? null : (
                <S.SelectOption>Android 다운로드</S.SelectOption>
              )}
              {props.download.ios == null ? null : (
                <S.SelectOption>iOS 다운로드</S.SelectOption>
              )}
            </>
          )}
        </S.ButtonNavbar>
      </S.TitleNav>
    </S.BackgorundImg>
  );
};

export default Project;
