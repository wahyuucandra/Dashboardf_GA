import type { EventInfo } from '@ckeditor/ckeditor5-utils'
export interface CKEditorWithUploadProps {
  onChange: (event: EventInfo, editor: any) => void
  data: string
}
