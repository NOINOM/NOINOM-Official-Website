import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import MainBottomBar from "./components/MainBottomBar";
import MainIntoduce from "./components/MainIntoduce";
import Project from "./components/Project";
import { detect } from "detect-browser";
import Footer from "./components/Footer";

interface Ibrowser {
  name: string | null;
  os: string | null;
  type: string | null;
  version: string | null;
}

const browser: Ibrowser | null = detect();

const CheckOS = (setIndex: React.Dispatch<React.SetStateAction<number>>) => {
  let Os = browser?.os || "";
  if (Os.slice(0, 3) === "Win") {
    setIndex(1);
  }
  if (Os.slice(0, 3) === "Mac") {
    setIndex(2);
  }
  if (Os.slice(0, 3) === "Lin") {
    setIndex(3);
  }
  if (Os.slice(0, 3) === "And") {
    setIndex(4);
  }
  if (Os.slice(0, 3) === "iOS") {
    setIndex(5);
  }
};

function App() {
  const [index, setIndex] = useState<number>(1);
  const proj1 = useRef<HTMLDivElement>(null);
  const proj2 = useRef<HTMLDivElement>(null);
  const proj3 = useRef<HTMLDivElement>(null);
  const proj4 = useRef<HTMLDivElement>(null);
  const onProj1Click = () => {
    proj1.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onProj2Click = () => {
    proj2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onProj3Click = () => {
    proj3.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onProj4Click = () => {
    proj4.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [isPhone, setIsPhone] = useState<boolean>(false);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    if (innerWidth < 600) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
    console.log(innerWidth, isPhone);
  });

  useEffect(() => {
    CheckOS(setIndex);
  }, []);

  return (
    <>
      <Header
        isPhone={isPhone}
        Proj1Click={onProj1Click}
        Proj2Click={onProj2Click}
        Proj3Click={onProj3Click}
        Proj4Click={onProj4Click}
      ></Header>
      <MainIntoduce isPhone={isPhone}></MainIntoduce>
      <MainBottomBar isPhone={isPhone}></MainBottomBar>
      <div ref={proj1}>
        <Project
          isPhone={isPhone}
          title="Rolling Root"
          context="Unity2D를 사용해 개발한 Rolling Root는 조근호를 굴리는 게임입니다."
          download={{
            windows:
              "https://drive.google.com/uc?export=download&id=1yr57FH3bAK-XtILQxCaZ2Cc8wNsqjpYk",
            macos:
              "https://drive.google.com/uc?export=download&id=1NhRKV2Z1vBbFo0jFBpGcNV_1sCCHR_e-",
            linux:
              "https://drive.google.com/uc?export=download&id=12uESJWvOHY-_4ZqTSkxIBBBYBI4zghpm",
            android:
              "https://drive.google.com/uc?export=download&id=1ClemodZvyR-sCP2lmQXPjFuIAXX_i_BT",
            ios: null,
          }}
          background={1}
          subimg={[1, 2, 3, 4]}
          isRight={false}
          index={index}
        ></Project>
      </div>
      <div ref={proj2}>
        <Project
          isPhone={isPhone}
          title="Rolling Root 3D"
          context="Unity3D를 사용해 개발한 Rolling Root 3D는 조근호를 3D로 굴리는 게임입니다."
          download={{
            windows:
              "https://drive.google.com/uc?export=download&id=18TcnFi2RmkjgtoU0Y7tzquHNtUg8xbup",
            macos:
              "https://drive.google.com/uc?export=download&id=1TVQwf8FoOrzHndWYEBehQY7LQDMtpxKN",
            linux: null,
            android: null,
            ios: null,
          }}
          background={2}
          subimg={[1, 2, 3, 4]}
          isRight={true}
          index={index}
        ></Project>
      </div>
      <div ref={proj3}>
        <Project
          isPhone={isPhone}
          title="돌붕이 키우기"
          context="Unity2D를 사용해 개발한 돌붕이 키우기는 돌붕이를 키우는 게임입니다."
          download={null}
          background={3}
          subimg={[1]}
          isRight={false}
          index={index}
        ></Project>
      </div>
      <div ref={proj4}>
        <Project
          isPhone={isPhone}
          title="두근두근 개발부"
          context={`대통령이 된 조근호가 세운 왕국 시난(しなん), 그곳의 한 고등학교 ‘시난소마고’. 주인공은 우연찮게 1학년 2학기에 이곳으로 전학을 와버리게 되는데... 과연 어떤 일이 펼쳐질까?`}
          download={null}
          background={4}
          subimg={[1]}
          isRight={true}
          index={index}
        ></Project>
      </div>
      <Footer isPhone={isPhone}></Footer>
    </>
  );
}

export default App;
