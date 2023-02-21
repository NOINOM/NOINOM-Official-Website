import * as S from "../style/ProjectStyle";
import Arrow from "../asset/arrow-down.svg";
import BigArrow from "../asset/BigArrow.svg";
import { useState } from "react";
import ButtonSetting from "../utils/ButtonSetting";

interface IProject {
  isPhone: boolean;
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
    <>
      <S.BackgorundImg background={props.background} isPhone={props.isPhone}>
        <S.TitleNav isRight={props.isRight} isPhone={props.isPhone}>
          <S.ProjTitle isRight={props.isRight} isPhone={props.isPhone}>
            {props.title}
          </S.ProjTitle>
          <S.ProjContext isRight={props.isRight} isPhone={props.isPhone}>
            {props.context}
          </S.ProjContext>
          {props.isPhone ? null : (
            <S.ButtonNavbar isRight={props.isRight}>
              {props.download == null ? (
                <S.NoLink isPhone={props.isPhone}>개발 진행 중</S.NoLink>
              ) : (
                <S.DownloadLinkWrap isRight={props.isRight}>
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
                            isPhone={props.isPhone}
                            onClick={() =>
                              window.open(props.download?.windows!)
                            }
                          >
                            {Title[index]} 다운로드
                          </S.SelectOption>
                        );
                      }
                      if (index === 1 && props.download?.macos) {
                        return (
                          <S.SelectOption
                            isPhone={props.isPhone}
                            onClick={() => window.open(props.download?.macos!)}
                          >
                            {Title[index]} 다운로드
                          </S.SelectOption>
                        );
                      }
                      if (index === 2 && props.download?.linux) {
                        return (
                          <S.SelectOption
                            isPhone={props.isPhone}
                            onClick={() => window.open(props.download?.linux!)}
                          >
                            {Title[index]} 다운로드
                          </S.SelectOption>
                        );
                      }
                      if (index === 3 && props.download?.android) {
                        return (
                          <S.SelectOption
                            isPhone={props.isPhone}
                            onClick={() =>
                              window.open(props.download?.android!)
                            }
                          >
                            {Title[index]} 다운로드
                          </S.SelectOption>
                        );
                      }
                      if (index === 4 && props.download?.ios) {
                        return (
                          <S.SelectOption
                            isPhone={props.isPhone}
                            onClick={() => window.open(props.download?.ios!)}
                          >
                            {Title[index]} 다운로드
                          </S.SelectOption>
                        );
                      }
                    })}
                  </S.OptionBar>
                </S.DownloadLinkWrap>
              )}
            </S.ButtonNavbar>
          )}
        </S.TitleNav>
        {props.isPhone ? null : (
          <S.SubImgFrame isRight={props.isRight} isPhone={props.isPhone}>
            {subIdx === 1 ? (
              <S.SubImgNoneArrowImg isPhone={props.isPhone} />
            ) : (
              <S.SubImgArrowImg
                isPhone={props.isPhone}
                src={BigArrow}
                isRight={false}
                onClick={() => setSubIdx(subIdx - 1)}
              />
            )}
            <S.SubImgWarp>
              {props.subimg.map((_) => {
                return (
                  <S.SubImg
                    isPhone={props.isPhone}
                    background={props.background}
                    subimg={subIdx}
                  ></S.SubImg>
                );
              })}
            </S.SubImgWarp>
            {subIdx === props.subimg.length ? (
              <S.SubImgNoneArrowImg isPhone={props.isPhone} />
            ) : (
              <S.SubImgArrowImg
                isPhone={props.isPhone}
                src={BigArrow}
                isRight={true}
                onClick={() => setSubIdx(subIdx + 1)}
              />
            )}
          </S.SubImgFrame>
        )}
        <S.BackgroundBlur isPhone={props.isPhone}></S.BackgroundBlur>
      </S.BackgorundImg>
      {props.isPhone ? (
        <>
          <S.SubImgFrame isRight={props.isRight} isPhone={props.isPhone}>
            {subIdx === 1 ? (
              <S.SubImgNoneArrowImg isPhone={props.isPhone} />
            ) : (
              <S.SubImgArrowImg
                isPhone={props.isPhone}
                src={BigArrow}
                isRight={false}
                onClick={() => setSubIdx(subIdx - 1)}
              />
            )}
            <S.SubImg
              isPhone={props.isPhone}
              background={props.background}
              subimg={subIdx}
            ></S.SubImg>
            {subIdx === props.subimg.length ? (
              <S.SubImgNoneArrowImg isPhone={props.isPhone} />
            ) : (
              <S.SubImgArrowImg
                isPhone={props.isPhone}
                src={BigArrow}
                isRight={true}
                onClick={() => setSubIdx(subIdx + 1)}
              />
            )}
          </S.SubImgFrame>
          {props.download == null ? (
            <S.NoLink isPhone={props.isPhone}>개발 진행 중</S.NoLink>
          ) : (
            <>
              {selectTitle != null && selectTitle[0] === props.index - 1 ? (
                selectTitle[0] === 0 && props.download.windows != null ? (
                  <S.SelectOption
                    isPhone={props.isPhone}
                    onClick={() => window.open(props.download?.windows!)}
                  >
                    {Title[selectTitle[0]]} 다운로드
                  </S.SelectOption>
                ) : selectTitle[0] === 1 && props.download.macos != null ? (
                  <S.SelectOption
                    isPhone={props.isPhone}
                    onClick={() => window.open(props.download?.macos!)}
                  >
                    {Title[selectTitle[0]]} 다운로드
                  </S.SelectOption>
                ) : selectTitle[0] === 2 && props.download.linux != null ? (
                  <S.SelectOption
                    isPhone={props.isPhone}
                    onClick={() => window.open(props.download?.linux!)}
                  >
                    {Title[selectTitle[0]]} 다운로드
                  </S.SelectOption>
                ) : selectTitle[0] === 3 && props.download.android != null ? (
                  <S.SelectOption
                    isPhone={props.isPhone}
                    onClick={() => window.open(props.download?.android!)}
                  >
                    {Title[selectTitle[0]]} 다운로드
                  </S.SelectOption>
                ) : selectTitle[0] === 4 && props.download.ios != null ? (
                  <S.SelectOption
                    isPhone={props.isPhone}
                    onClick={() => window.open(props.download?.ios!)}
                  >
                    {Title[selectTitle[0]]} 다운로드
                  </S.SelectOption>
                ) : (
                  <S.NoLink isPhone={props.isPhone}>개발 진행 중</S.NoLink>
                )
              ) : (
                <S.NoLink isPhone={props.isPhone}>개발 진행 중</S.NoLink>
              )}
            </>
          )}
        </>
      ) : null}
    </>
  );
};

export default Project;
