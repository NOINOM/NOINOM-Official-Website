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

  useEffect(() => {
    document.getElementById("app")?.scrollTo(0, 0);
    CheckOS(setIndex);
  }, []);

  return (
    <>
      <Header
        Proj1Click={onProj1Click}
        Proj2Click={onProj2Click}
        Proj3Click={onProj3Click}
        Proj4Click={onProj4Click}
      ></Header>
      <MainIntoduce></MainIntoduce>
      <MainBottomBar></MainBottomBar>
      <div ref={proj1}>
        <Project
          title="Rolling Root"
          context="Unity2D를 사용해 개발한 Rolling Root는 조근호를 굴리는 게임입니다."
          download={{
            windows: "https://www.naver.com",
            macos: "https://www.google.com",
            linux: null,
            android: "https://www.youtube.com",
            ios: null,
          }}
          background={1}
          subimg={[1, 2, 3]}
          isRight={false}
          index={index}
        ></Project>
      </div>
      <div ref={proj2}>
        <Project
          title="Rolling Root 3D"
          context="Unity3D를 사용해 개발한 Rolling Root 3D는 조근호를 3D로 굴리는 게임입니다."
          download={null}
          background={2}
          subimg={[1]}
          isRight={true}
          index={index}
        ></Project>
      </div>
      <div ref={proj3}>
        <Project
          title="Rolling Root 3D"
          context="Unity3D를 사용해 개발한 Rolling Root 3D는 조근호를 3D로 굴리는 게임입니다."
          download={null}
          background={1}
          subimg={[1, 2]}
          isRight={false}
          index={index}
        ></Project>
      </div>
      <div ref={proj4}>
        <Project
          title="Rolling Root 3D"
          context="Unity3D를 사용해 개발한 Rolling Root 3D는 조근호를 3D로 굴리는 게임입니다."
          download={{
            windows: "https://www.naver.com",
            macos: "https://www.daum.net",
            linux: "https://www.google.com",
            android: "https://www.youtube.com",
            ios: "https://www.laftel.net",
          }}
          background={2}
          subimg={[1, 2, 3, 4, 5]}
          isRight={true}
          index={index}
        ></Project>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
