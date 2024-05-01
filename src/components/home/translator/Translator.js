import WordInfo from "../../wordInfo/WordInfo";
import "./Translator.css";
import microphoneIcon from "./icons/microphone.png";

function Input() {
  return (
    <div className="-input -bg-rect">
      <div contentEditable="plaintext-only"></div>
      <img src={microphoneIcon} alt="use microphone"></img>
    </div>
  );
}

function Translator() {
  return (
    <div className="-translator -bg-rect">
      <Input />
      <WordInfo />
    </div>
  );
}

export default Translator;
