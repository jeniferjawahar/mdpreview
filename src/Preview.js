import { marked } from "marked";
import "./Preview.css";

export default function Preview({ input, previewExpand }) {
  // let result = marked(input, { breaks: true });
  // console.log(result);
  // let markedResult = result.replace(/\\n|\\r\\n|\\r/g, "<br>");
  // console.log(markedResult);

  return (
    <>
      <div
        className={previewExpand ? "new" : "editor"}
        dangerouslySetInnerHTML={{ __html: marked(input, { breaks: true }) }}
        id="preview"
      ></div>
    </>
  );
}
