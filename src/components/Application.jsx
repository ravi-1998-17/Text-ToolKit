import { React, useState } from "react";

const Application = () => {
  const [text, upText] = useState("");
  const [ltrCount, upLtrCount] = useState(0);
  const [wCount, upWcount] = useState(0);
  const [sCount, upScount] = useState(0);
  const [paraCount, upParaCount] = useState(0);

  const handleChange = (e) => {
    const inptText = e.target.value;

    const letterCount = inptText;
    upLtrCount(letterCount.length);

    const wordCount = inptText.trim().split(/\s+/);
    const wordCondition = wordCount.filter((word) => word.length > 0).length;
    upWcount(wordCondition);

    const sentCount = inptText.split(/[.!?]+/);
    const sentCondition = sentCount.filter(
      (word) => word.trim().length > 0
    ).length;
    upScount(sentCondition);

    const paragraphCount = inptText.split(/\n+/);
    const paraCondition = paragraphCount.filter(
      (para) => para.trim().length > 0
    ).length;
    upParaCount(paraCondition);
  };

  return (
    <div className="h-full flex justify-center">
      <div className="w-[1400px] h-[800px] border-pink-200 border-2 dark:border-slate-500 dark:text-pink-50 mt-8 rounded-2xl flex items-center justify-evenly relative">
        <div>
          <textarea
            // value={}
            onChange={handleChange}
            rows={20}
            cols={70}
            placeholder="Enter or paste your text"
            className="resize-none p-5 text-2xl rounded-2xl border-pink-100 border-2 focus:border-pink-200 focus:border-2 focus:outline-none bg-pink-50 dark:bg-slate-800 dark:text-slate-100"
          ></textarea>
          <button className="border hidden border-green-600 text-green-600 w-40 h-14 rounded-full text-2xl font-medium absolute top-36 left-24">
            Paste Text
          </button>
        </div>

        <div className="flex flex-col gap-10 mt-14 self-start">
          <div className="border rounded-2xl  dark:border-slate-500 grid grid-cols-2 items-center justify-items-center h-96 w-96 p-2">
            <span className="border dark:border-slate-500 p-8 rounded-2xl flex flex-col items-center justify-center text-3xl font-medium aspect-square w-40">
              {wCount}
              <p className="text-gray-500 dark:text-pink-100 text-xl mt-1">
                Words 
              </p>
            </span>
            <span className="border dark:border-slate-500 p-8 rounded-2xl flex flex-col items-center justify-center text-3xl font-medium aspect-square w-40">
              {ltrCount}
              <p className="text-gray-500 dark:text-pink-100 text-xl mt-1">
                Characters
              </p>
            </span>
            <span className="border dark:border-slate-500 p-8 rounded-2xl flex flex-col items-center justify-center text-3xl font-medium aspect-square w-40">
              {sCount}
              <p className="text-gray-500 dark:text-pink-100 text-xl mt-1">
                Sentences
              </p>
            </span>
            <span className="border dark:border-slate-500 p-8 rounded-2xl flex flex-col items-center justify-center text-3xl font-medium aspect-square w-40">
              {paraCount}
              <p className="text-gray-500 dark:text-pink-100 text-xl mt-1">
                Paragraphs
              </p>
            </span>
          </div>

          <div className="border  dark:border-slate-500 rounded-2xl h-64 w-96 p-2 flex items-center justify-center ">
            <p>More features coming soon....</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
