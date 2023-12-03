import { marked } from "marked";
import "./Preview.css";

export default function Preview({ input }) {
  return (
    <>
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(input) }}
      ></div>
    </>
  );
}
