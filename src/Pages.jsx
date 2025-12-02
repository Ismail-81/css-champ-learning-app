import { useState, useMemo } from "react";
import "./Css/pages.css";

import Question from "./Question";

import { background, color, fontSize, border, margin, padding } from "./questions";

function QuizPage({ questions }) {
  const [answeredCount, setAnsweredCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * questions.length)
  );  

  const totalQuestions = questions.length;

  const nextQuestion = () => {
    setAnsweredCount((prev) => prev + 1);

    let newIndex = Math.floor(Math.random() * questions.length);
    while (newIndex === currentIndex && questions.length > 1) {
      newIndex = Math.floor(Math.random() * questions.length);
    }
    setCurrentIndex(newIndex);
  };

  const q = questions[currentIndex];

  return (
    <div className="pages">
      <Question
        key={currentIndex}
        questionNo={q.questionNo}
        questionText={q.questionText}
        htmlCode={q.htmlCode}
        answerCss={q.answerCss}
        onCorrect={nextQuestion}
      />

      <div className="progress-container">
        <div className="progress-label">
          Progress: {answeredCount}/{totalQuestions}
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function Background() {
  
  return (
    <QuizPage questions={background} />
  );
}
function Color() {
  return (
    <QuizPage questions={color} />
  );
}
function FontSize() {
  return (
    <QuizPage questions={fontSize} />
  );
}
function Border() {
  return (
    <QuizPage questions={border} />
  );
}
function Margin() {
  return (
    <QuizPage questions={margin} />
  );
}
function Padding() {
  return (
    <QuizPage questions={padding} />
  );
}

export { Background, Color, FontSize, Border, Margin, Padding };
