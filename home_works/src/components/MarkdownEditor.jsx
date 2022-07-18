import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useEffect, useRef } from "react";

function MarkdownEditor(props) {
  const editorElem = useRef(null);

  console.log(editorElem);

  useEffect(() => {
    const editor = new Editor({
      el: editorElem.current,
      hideModeSwitch: true,
    });

    editor.addHook("change", props.onContentChange);
  }, []);

  return <div id="editor" ref={editorElem}></div>;
}

export default MarkdownEditor;
