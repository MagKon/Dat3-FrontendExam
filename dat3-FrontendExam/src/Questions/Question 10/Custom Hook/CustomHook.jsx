import React, { useEffect, useState } from "react";

function CustomHook() {
  const [text, setText] = useState("");

  useEffect(() => {
    document.addEventListener("paste", (e) => {
      setText(e.clipboardData.getData("text"));
    });

    return () => {
      document.removeEventListener("paste", (e) => {
        setText(e.clipboardData.getData("text"));
      });
    };
  }, []);

  return text;
}

export default CustomHook;
