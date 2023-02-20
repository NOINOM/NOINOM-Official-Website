import * as S from "../style/ProjectStyle";
import Arrow from "../asset/arrow-down.png";
import BigArrow from "../asset/BigArrow.png";
import { useState } from "react";
import ButtonSetting from "./ButtonSetting";

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
  background: number;
  subimg: number[];
  isRight: boolean;
  index: number;
}

const Project = (props: IProject) => {
  const [subIdx, setSubIdx] = useState<number>(1);
  const [detail, setDetail] = useState<boolean>(false);
  const Title: string[] = ["Windows", "macOS", "Linux", "Android", "iOS"];
  const selectTitle: number[] | undefined = ButtonSetting(props.index);

  return (
    <S.BackgorundImg background={props.background}>
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
              <S.ArrowImgNav>
                <S.ArrowImg
                  src={Arrow}
                  onClick={() => setDetail(!detail)}
                  isDetail={detail}
                />
              </S.ArrowImgNav>
              <S.OptionBar isDetail={detail}>
                {selectTitle?.map((index) => {
                  if (index === 0 && props.download?.windows) {
                    return (
                      <S.SelectOption
                        onClick={() => window.open(props.download?.windows!)}
                      >
                        {Title[index]} 다운로드
                      </S.SelectOption>
                    );
                  }
                  if (index === 1 && props.download?.macos) {
                    return (
                      <S.SelectOption
                        onClick={() => window.open(props.download?.macos!)}
                      >
                        {Title[index]} 다운로드
                      </S.SelectOption>
                    );
                  }
                  if (index === 2 && props.download?.linux) {
                    return (
                      <S.SelectOption
                        onClick={() => window.open(props.download?.linux!)}
                      >
                        {Title[index]} 다운로드
                      </S.SelectOption>
                    );
                  }
                  if (index === 3 && props.download?.android) {
                    return (
                      <S.SelectOption
                        onClick={() => window.open(props.download?.android!)}
                      >
                        {Title[index]} 다운로드
                      </S.SelectOption>
                    );
                  }
                  if (index === 4 && props.download?.ios) {
                    return (
                      <S.SelectOption
                        onClick={() => window.open(props.download?.ios!)}
                      >
                        {Title[index]} 다운로드
                      </S.SelectOption>
                    );
                  }
                })}
              </S.OptionBar>
            </>
          )}
        </S.ButtonNavbar>
      </S.TitleNav>
      <S.SubImgFrame isRight={props.isRight}>
        {subIdx === 1 ? (
          <S.SubImgNoneArrowImg />
        ) : (
          <S.SubImgArrowImg
            src={BigArrow}
            isRight={false}
            onClick={() => setSubIdx(subIdx - 1)}
          />
        )}
        <S.SubImgWarp>
          {props.subimg.map((index) => {
            return (
              <S.SubImg background={props.background} subimg={index}></S.SubImg>
            );
          })}
        </S.SubImgWarp>
        {subIdx === props.subimg.length ? (
          <S.SubImgNoneArrowImg />
        ) : (
          <S.SubImgArrowImg
            src={BigArrow}
            isRight={true}
            onClick={() => setSubIdx(subIdx + 1)}
          />
        )}
      </S.SubImgFrame>
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
