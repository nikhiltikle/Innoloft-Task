import './styles.css';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface CkEditorProps {
  data: string;
  onChange: (data: string) => void;
}

export default function CkEditor({ data, onChange }: CkEditorProps) {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
    />
  );
}
