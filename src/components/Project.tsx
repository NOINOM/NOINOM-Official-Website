import * as S from "../style/ProjectStyle";
import Arrow from "../asset/arrow-down.png";
import { useState } from "react";

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
  index: number;
}

interface IOptionbar {
  index: number;
  download: {
    windows: string | null;
    macos: string | null;
    linux: string | null;
    android: string | null;
    ios: string | null;
  } | null;
}

const Project = (props: IProject) => {
  const [detail, setDetail] = useState<boolean>(false);
  const selectTitle: string[] = ["Windows", "macOS", "Linux", "Android", "iOS"];
  return (
    <S.BackgorundImg>
      <S.TitleNav isRight={props.isRight}>
        <S.ProjTitle isRight={props.isRight}>{props.title}</S.ProjTitle>
        <S.ProjContext isRight={props.isRight}>{props.context}</S.ProjContext>
        <S.ButtonNavbar isRight={props.isRight}>
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
              <></>
              <S.ArrowImgNav>
                <S.ArrowImg
                  src={Arrow}
                  onClick={() => setDetail(!detail)}
                  isDetail={detail}
                />
              </S.ArrowImgNav>
            </>
          )}
        </S.ButtonNavbar>
      </S.TitleNav>
    </S.BackgorundImg>
  );
};

export default Project;

/**
 * 
 * {props.download.windows == null ? null : (
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
 */
