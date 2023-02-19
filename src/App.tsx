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

const CheckOS = () => {
  let Os = browser?.os || "";
  console.log(Os);

  if (Os === "Windows") {
  }
};

function App() {
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
      ></Project>
      <Project
        title="Rolling Root 3D"
        context="Unity3D를 사용해 개발한 Rolling Root 3D는 조근호를 3D로 굴리는 게임입니다."
        download={{
          windows: "dd",
          macos: "dd",
          linux: "dd",
          android: "dd",
          ios: "dd",
        }}
        background={backgroundImg1}
        image={null}
        isRight={true}
      ></Project>
      <button
        onClick={() => {
          CheckOS();
        }}
      >
        app
      </button>
    </>
  );
}

export default App;
