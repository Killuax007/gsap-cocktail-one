import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <div className=" flex-center h-[100vh]">
      <h4 className=" text-indigo-400 font-semibold text-3xl ">Hello GSAP</h4>
    </div>
  );
}

export default App;
