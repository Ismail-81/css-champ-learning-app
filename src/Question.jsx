import Editor from "@monaco-editor/react";
import { useState, useMemo } from "react";
import "./Css/question.css";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';

function Question({ questionText, htmlCode, answerCss, onCorrect }) {
  const [userCss, setUserCss] = useState("");
  const [tries, setTries] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const srcDoc = useMemo(
    () => `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            ${userCss || "/* write your CSS here */"}
          </style>
        </head>
        <body>
          ${htmlCode}
        </body>
      </html>`,
    [userCss, htmlCode]
  );

  const normalize = (css) => {
    return css
      .toLowerCase()
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\s+/g, " ")
      .trim()
      .split("}")
      .map((block) => {
        if (!block.includes("{")) return "";

        const [selector, body] = block.split("{");
        const cleanSelector = selector.trim();

        const props = body
          .split(";")
          .map((p) => p.trim())
          .filter(Boolean)
          .map((p) => {
            const [prop, val] = p.split(":").map((s) => s.trim());
            return `${prop}:${val}`;
          })
          .sort()
          .join(";");

        return `${cleanSelector}{${props}}`;
      })
      .filter(Boolean)
      .sort()
      .join("");
  };


  const chkAns = () => {
    if (!userCss.includes("{") || !userCss.includes("}")) {
      // toast.error("Try Again (Missing curly braces)");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Try Again (Missing curly braces)",
        //footer: '<a href="#">Why do I have this issue?</a>'
        background: "rgb(15, 23, 42)",
        color: "#f2eaeae8",
        //border:"1px solid orange",
        didOpen: (popup) => {
          popup.style.border = "2px solid orange";   // 👈 border here
          popup.style.borderRadius = "8px";
        }
      });
      return;
    }

    if (normalize(userCss) === normalize(answerCss)) {
      //toast.success("You did it! ");
      Swal.fire({
        title: "You did it...!👌👌",
        icon: "success",
        background: "rgb(15, 23, 42)",
        color: "#f2eaeae8",
        //border:"1px solid green",
        didOpen: (popup) => {
          popup.style.border = "2px solid green";   // 👈 border here
          popup.style.borderRadius = "8px";
        }
      });

      onCorrect();
    }
    else {
      const newTries = tries + 1;
      setTries(newTries);

      if (newTries >= 3) {
        setShowAnswer(true);
      }
      //toast.warn(`Try Again (Check your CSS) : Tried : ${newTries}`);
      Swal.fire({
        icon: "error",
        title: `Try Again (Check your CSS) : Your Attemped : ${newTries}`,
        text: "Error",
        background: "rgb(15, 23, 42)",
        color: "#f2eaeae8",
        didOpen: (popup) => {
          popup.style.border = "2px solid red";   // 👈 border here
          popup.style.borderRadius = "8px";       // optional
        }
        //footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  return (
    <div className="question">
      <h3 className="question-text">
        <span><b>{`Question  :`}</b></span> {questionText}
      </h3>
      <div
        className="workbench"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
      >
        {/* Monaco editor */}
        <Editor
          height="350px"
          defaultLanguage="css"
          theme="vs-dark"
          value={userCss}
          onChange={(val) => setUserCss(val ?? "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
            wordWrap: "on",
            showFoldingControls: true,
          }}
        />

        {/* Live preview */}
        <iframe
          title="preview"
          style={{
            width: "100%",
            height: 350,
            border: "1px solid #333",
            borderRadius: 8,
            backgroundColor: "lightgrey"
          }}
          sandbox="allow-same-origin"
          srcDoc={srcDoc}
        />
      </div>

      <div className="btns">
        <button
          onClick={() => {
            setTries(0);
            setUserCss("");
            setShowAnswer(false);
            Swal.fire({
              icon: "info",
              title: `Reset! Try again fresh.s`,
              text: "Info",
              background: "rgb(15, 23, 42)",
              color: "#f2eaeae8",
              didOpen: (popup) => {
                popup.style.border = "2px solid blue";   // 👈 border here
                popup.style.borderRadius = "8px";       // optional
              }
              //footer: '<a href="#">Why do I have this issue?</a>'
            });
            // toast.info("Reset! Try again fresh.");
          }}
          style={{ width: "120px", minWidth: "70px"}}>
          Reset
        </button>
        <button onClick={chkAns}>Check Answer</button>

        {showAnswer && <details>
          <summary>Show Answer</summary>
          <pre
            style={{
              marginTop: 8,
              padding: 12,
              background: "#0b1220",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              color: "#d7e2ff",
              borderRadius: 8,
            }}
          >
            {answerCss}
          </pre>
        </details>}
      </div>
    </div>
  );
}

export default Question;
