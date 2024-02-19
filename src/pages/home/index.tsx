import AnimatedTextCharacter from "../../components/animation/textanimated";
import ZizekImage from "../../assets/images/zizekdoodle.jpeg";
// import HorizontalScroll  from "../../components/Animation/scrollHorizontal"; // Importing the custom hook
import SmoothScroll from "../../components/animation/SmoothScroll";

export default function About() {
  // const horizontalScrollRef = useHorizontalScroll(); // Using the custom hook

  return (
    // <main>
    //   <div className="flex flex-col h-full overflow-x-auto">
    //     <div className="flex justify-center items-center font-shadows">
    //       <AnimatedTextCharacter text="Welcome to Zizek Algo" />
    //     </div>
    //     <div className="flex justify-center items-center font-zeyada">
    //       <img src={ZizekImage} alt="Zizek Doodle" />
    //     </div>
    //   </div>
    //   <div className="flex flex-col h-full">
    //     <div>
    //       <p>Hello world</p>
    //     </div>
    //   </div>
    // </main>
    <>
      <div className="flex flex-col h-screen">
        <div className="flex justify-center items-center font-shadows">
          <AnimatedTextCharacter text="Welcome to Zizek Algo" />
        </div>
        <div className="flex justify-center items-center font-zeyada">
          <img src={ZizekImage} alt="Zizek Doodle" />
        </div>
      </div>
      <SmoothScroll />
      <div className="h-screen"></div>
    </>
  );
}
