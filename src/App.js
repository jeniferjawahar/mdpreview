import { useState } from "react";
import { FaExpandArrowsAlt, FaRegLightbulb } from "react-icons/fa";
import "./App.css";
import Editor from "./Editor";
import Preview from "./Preview";

const str = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`;
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == "\`\`\`" && lastLine == "\`\`\`") {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [input, setInput] = useState(str);
  const [editorExpand, setEditorExpand] = useState(false);
  const [previewExpand, setPreviewExpand] = useState(false);

  console.log(editorExpand);
  return (
    <div>
      <div>
        <div>
          <div className="header">
            <FaRegLightbulb />
            <p>Editor</p>
            <FaExpandArrowsAlt onClick={() => setEditorExpand((st) => !st)} />
          </div>
          <div>
            <Editor
              input={input}
              onChangeInput={setInput}
              editorExpand={editorExpand}
            />
          </div>
        </div>
        <div>
          <button onClick={() => setEditorExpand((st) => !st)}>
            {/* <LuShrink /> */}
            <FaExpandArrowsAlt />
          </button>
          <Preview
            input={input}
            onChangeInput={setInput}
            editorExpand={editorExpand}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
