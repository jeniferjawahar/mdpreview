import "./Editor.css";

export default function Editor({
  input,
  onChangeInput,
  editorExpand,
  previewExpand,
}) {
  return (
    <>
      <textarea
        className={editorExpand ? "new" : "editor"}
        value={input}
        onChange={(e) => onChangeInput(e.target.value)}
        id="editor"
      ></textarea>
    </>
  );
}
