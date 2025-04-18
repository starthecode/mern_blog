import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const TextEditor = ({ editorContent, setEditorContent }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: editorContent,
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
  });

  // Update the editor content if it changes from parent
  React.useEffect(() => {
    if (editor && editorContent !== editor.getHTML()) {
      editor.commands.setContent(editorContent);
    }
  }, [editorContent, editor]);

  if (!editor) return null;

  return (
    <div className="my-8" key={editorContent}>
      {/* 🧰 Toolbar */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={
            editor.isActive('bold')
              ? 'bg-black text-white px-2 py-1 rounded'
              : 'border px-2 py-1 rounded'
          }
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            editor.isActive('italic')
              ? 'bg-black text-white px-2 py-1 rounded'
              : 'border px-2 py-1 rounded'
          }
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive('bulletList')
              ? 'bg-black text-white px-2 py-1 rounded'
              : 'border px-2 py-1 rounded'
          }
        >
          Bullet List
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive('orderedList')
              ? 'bg-black text-white px-2 py-1 rounded'
              : 'border px-2 py-1 rounded'
          }
        >
          Ordered List
        </button>
        <button
          onClick={() =>
            editor.chain().focus().unsetAllMarks().clearNodes().run()
          }
          className="border px-2 py-1 rounded"
        >
          Clear
        </button>
      </div>

      {/* 📝 Editor */}
      <div className="border p-4 rounded-lg min-h-[150px]">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TextEditor;
