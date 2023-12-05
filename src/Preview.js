import { marked } from "marked";
import "./Preview.css";

export default function Preview({ input, previewExpand }) {
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
