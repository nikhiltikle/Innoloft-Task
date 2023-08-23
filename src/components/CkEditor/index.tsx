import './styles.css';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface CkEditorProps {
  data: string;
  onChange: (data: string) => void;
  error?: boolean;
}

export default function CkEditor({ data, onChange, error }: CkEditorProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
      {error && <span className="text-xs text-red-500">* Required field</span>}
    </div>
  );
}
