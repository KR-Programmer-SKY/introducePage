import { MyIntro } from "./components/MyIntro";
import { MyMbti } from "./components/MyMbti";
import { MyName } from "./components/MyName";
import { LikeImg } from "./components/LikeImg";
import "./components/App.css"

function App() {
  const myInfo = {
    name: "양성경",
    mbti: "INTJ",
    intro: "안녕하세요, 개발을 배우고 있는 양성경입니다.",
    img: "https://cdn.pixabay.com/photo/2023/06/27/10/51/pier-8091934_960_720.jpg",
    imgExplanation: "주로 장엄한 풍경 사진을 좋아합니다."
  }
  
    return (
    <div>
      <MyName name={myInfo.name} />
      <MyMbti mbti={myInfo.mbti} />
      <MyIntro intro={myInfo.intro} />
      <LikeImg img={myInfo.img} imgExplanation={myInfo.imgExplanation} />
    </div>
  );
}

export default App;
