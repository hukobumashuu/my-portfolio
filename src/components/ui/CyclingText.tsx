"use client";

import React, { useState, useEffect, useMemo } from "react";

interface CyclingTextProps {
  words: string[];
  period?: number;
}

export const CyclingText = ({ words, period = 2000 }: CyclingTextProps) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const longestWord = useMemo(() => {
    return words.reduce((a, b) => (a.length > b.length ? a : b), "");
  }, [words]);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words, period]);

  return (
    // Added 'whitespace-nowrap' to force single-line height
    <span className="inline-grid whitespace-nowrap">
      <span className="invisible col-start-1 row-start-1 font-bold pointer-events-none">
        {longestWord}
        <span className="w-0.5 inline-block ml-1"></span>
      </span>

      <span className="col-start-1 row-start-1 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400 font-bold">
        {text}
        <span className="w-0.5 h-[1em] bg-blue-400 inline-block ml-1 animate-pulse align-middle"></span>
      </span>
    </span>
  );
};
