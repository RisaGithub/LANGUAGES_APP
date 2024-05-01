import React, { useState } from "react";
import "./WordInfo.css";
import volumeIcon from "../../static/icons/volume.png";

const data = [
  {
    translation: "TRRrans1",
    pronunciation: "pronun1",
    tag: "tag1",
    frequency: 1,
  },
  {
    translation: "trans2",
    pronunciation: "pronun1",
    tag: "tag1",
    frequency: 2,
  },
  {
    translation: "trans3",
    pronunciation: "pronun2",
    tag: "tag2",
    frequency: 3,
  },
  {
    translation: "trans4",
    pronunciation: "pronun2",
    tag: "tag3",
    frequency: 1,
  },
  {
    translation: "trans5",
    pronunciation: "pronun1",
    tag: "tag3",
    frequency: 3,
  },
];

function Tag({ tag, currentTag, setCurrentTag }) {
  return (
    <btn
      onClick={() => setCurrentTag(tag)}
      className={
        "-bg-rect-light-005 -border-light -tag" +
        (currentTag === tag ? " -active" : "")
      }
    >
      {tag}
    </btn>
  );
}

function Translation({ translation, frequency }) {
  let frequencyComponent;
  if (frequency === 1) {
    frequencyComponent = (
      <div className="-frequency-wrapper">
        <div></div>
      </div>
    );
  } else if (frequency === 2) {
    frequencyComponent = (
      <div className="-frequency-wrapper">
        <div></div>
        <div></div>
      </div>
    );
  } else if (frequency === 3) {
    frequencyComponent = (
      <div className="-frequency-wrapper">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <div className="-bg-rect-light-01 -translation">
      {frequencyComponent}
      {translation}
    </div>
  );
}

function PronunciationGroup({ pronunciation, translations }) {
  // function to sort translations by frequency
  const sortTranslationsByFrequency = (translations) => {
    return translations.sort(
      (a, b) => parseInt(b.frequency) - parseInt(a.frequency)
    );
  };

  translations = sortTranslationsByFrequency(translations);
  // create component for every translation
  const translationsComponents = translations.map((obj) => (
    <Translation
      key={obj.translation}
      translation={obj.translation}
      frequency={obj.frequency}
    />
  ));
  return (
    <div className="-pronunciation-group">
      <div className="-pronunciation">
        {pronunciation}
        <img src={volumeIcon} alt="Pronounce"></img>
      </div>
      <div className="-pronunciations-container">{translationsComponents}</div>
    </div>
  );
}

function WordInfo() {
  const [currentTag, setCurrentTag] = useState("all");
  const tagsSet = new Set();
  for (const obj of data) {
    tagsSet.add(obj.tag);
  }
  const tags = [...tagsSet];
  if (tags.length > 1) {
    tags.unshift("all");
  }

  const pronunciationToObj = {}; // Initialize pronunciationToObj here

  for (const obj of data) {
    if ((currentTag === "all") | (obj.tag === currentTag)) {
      const pronun = obj.pronunciation;
      if (!(pronun in pronunciationToObj)) {
        pronunciationToObj[pronun] = [];
      }
      pronunciationToObj[pronun].push(obj);
    }
  }

  let pronunciationToObjArray = Object.entries(pronunciationToObj);
  pronunciationToObjArray.sort(([pronunA, arrA], [pronunB, arrB]) => {
    const frequencyA = arrA.reduce((acc, curr) => acc + curr.frequency, 0);
    const frequencyB = arrB.reduce((acc, curr) => acc + curr.frequency, 0);
    return frequencyB - frequencyA; // Sort in descending order
  });
  const sortedPronunciationToObj = Object.fromEntries(pronunciationToObjArray);

  const pronunciationGroups = [];
  for (const [pronunciation, translations] of Object.entries(
    sortedPronunciationToObj
  )) {
    pronunciationGroups.push(
      <PronunciationGroup
        key={pronunciation}
        pronunciation={pronunciation}
        translations={translations}
      />
    );
  }

  const tagsComponents = tags.map((tag) => (
    <Tag
      key={tag}
      tag={tag}
      currentTag={currentTag}
      setCurrentTag={setCurrentTag}
    />
  ));

  return (
    <>
      <div className="-tags">{tagsComponents}</div>
      <div className="-pronunciations-groups">{pronunciationGroups}</div>
    </>
  );
}

export default WordInfo;
