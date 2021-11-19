import { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😂": "Laughing with Tears of joy",
  "😇": "angel face",
  "🙃": "sarcasm or silly",
  "😉": "winking face",
  "🤩": "wow face",
  "😍": "heart eyes",
  "👽": "alien",
  "👻": "Disappear",
  "🤬": "cursing",
  "🥱": "yawning face",
  "😐": "staright faced",
  "😞": "disappointed face",
  "😱": "screaming face",
  "🧐": "careful inspection",
  "🤤": "drooling face"
};
var emojiSet = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");
  function emojiClickHandler(emoji) {
    var txt = emoji;
    var meaning = emojiDictionary[txt];
    setmeaning(meaning);
  }
  function emojiInputHandler(event) {
    var txt = event.target.value;
    var meaning = emojiDictionary[txt];
    if (meaning === undefined) {
      meaning = "Not found in our database";
    }
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1 className="titleHeading">Emoji Identifier</h1>
      <input
        placeholder="Place your emoji here or choose from below!"
        onChange={emojiInputHandler}
      ></input>
      <h3 className="outputdiv">{meaning}</h3>
      <h4>Emojis Database</h4>
      {emojiSet.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            className="emojiset"
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
