import { SetStateAction, useState } from "react";
import Header from "./components/Header";
import MainBottomBar from "./components/MainBottomBar";
import MainIntoduce from "./components/MainIntoduce";
import Project from "./components/Project";
import backgroundImg1 from "./asset/Background1.png";
import { detect } from "detect-browser";

interface Ibrowser {
  name: string | null;
  os: string | null;
  type: string | null;
  version: string | null;
}

const browser: Ibrowser | null = detect();

const CheckOS = (setIndex: React.Dispatch<React.SetStateAction<number>>) => {
  let Os = browser?.os || "";
  console.log(Os.slice(0, 3));

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
  return (
    <>
      <Header></Header>
      <MainIntoduce></MainIntoduce>
      <MainBottomBar></MainBottomBar>
      <Project
        title="Rolling Root"
        context="Unity2D를 사용해 개발한 Rolling Root는 조근호를 굴리는 게임입니다."
        download={null}
        background={backgroundImg1}
        image={null}
        isRight={false}
        index={index}
      ></Project>
      <Project
        title="Rolling Root 3D"
        context="Unity3D를 사용해 개발한 Rolling Root 3D는 조근호를 3D로 굴리는 게임입니다."
        download={{
          windows: "https://www.naver.com",
          macos: "https://www.google.com",
          linux: "https://www.daum.net",
          android: "https://www.youtube.com",
          ios: "https://www.laftel.net",
        }}
        background={backgroundImg1}
        image={null}
        isRight={true}
        index={index}
      ></Project>
      <button
        onClick={() => {
          CheckOS(setIndex);
        }}
      >
        app
      </button>
    </>
  );
}

export default App;
