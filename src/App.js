import { useState } from "react";
import { marked } from "marked";
import "./App.scss";

function App() {
  const [text, setText] = useState(`
  # This is a markdown previewer
  You can use headings like these:
  # H1
  ## H2
  Make a title like this:
  [title](https://www.example.com)
  
  Insert code inline: \`<div></div\`,
  
  or in a block:
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Sarah",
    "age": 25
  }
  \`\`\`
  
  Feature a list:
  - First item
    - Second item
      - Third item
  
  Add a ...
  > blockquote
  
  Transform things to **bold** or *italicised*
  
  and even add an image:
  ![markdownlogo](https://upload.wikimedia.org/wikipedia/commons/3/37/Markdown-mark-solid.svg)
  `);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </div>
  );
}

export default App;
