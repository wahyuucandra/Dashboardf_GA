import React, {
  ChangeEvent,
  ComponentPropsWithoutRef, // Import the correct type
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react'
import { toast } from 'react-toastify'
import IconCloudUpload from '@assets/icons/IconCloudUpload'
import IconEdit from '@assets/icons/IconEdit'
import IconDelete from '../../../assets/icons/IconDelete'
import { joinClass } from '@utils/common'

// Updated FileInputProps interface
interface FileInputProps extends ComponentPropsWithoutRef<'input'> {
  isLoading?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  isValid?: boolean
  labels?: string
  onChangeFile?: (val: File | null) => void
  value?: any // Keep the 'any' type for now to handle the potential type mismatch
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, isDisabled, isInvalid, labels = '', onChangeFile = () => {}, value, ...props }, ref) => {
    const [selectedDocument, setSelectedDocument] = useState<string | undefined>(value?.name || '')

    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]

      if (file) {
        if (!file.type.includes('pdf')) {
          toast.error('File must be a PDF.')
          return
        }

        onChangeFile(file)
        setSelectedDocument(file.name)
      }
    }

    const handleFileReset = () => {
      onChangeFile(null)
      setSelectedDocument('')
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }

    useEffect(() => {
      setSelectedDocument(value?.name ?? '')
    }, [value])

    const displayDocumentName = (name: string) => {
      if (name.length > 45) {
        return name.substring(0, 42) + '...'
      }
      return name
    }

    return (
      <>
        <div className={joinClass('relative mt-1', className)}>
          <input
            type="file"
            ref={ref} // Attach the ref here
            disabled={isDisabled}
            className={joinClass(
              'flex items-center justify-center bg-[#fafafa] text-[#626262] text-paragraph regular-14 py-2 px-4 rounded-md shadow-md w-full border-dashed border border-[#0072BB] mb-6 h-[45px]',
              isInvalid ? 'file-input-error' : ''
            )}
            onChange={handleFileChange}
            name={props.name}
            accept="application/pdf"
            onBlur={props.onBlur}
          />
          <div className="absolute inset-0 flex items-center pointer-events-none h-[45px]">
            <div
              className={joinClass(
                `items-center flex mx-2 line-clamp-2 justify-center h-[calc(100%-8px)] bg-[#fafafa] text-left ${
                  selectedDocument ? 'w-[calc(100%-8px)] pr-10' : 'w-[calc(100%-8px)]'
                }`,
                isDisabled ? 'bg-[#ededed]' : 'bg-[#fafafa] hover:bg-[#d1e9f9]'
              )}
            >
              {selectedDocument ? (
                <span className="text-paragraph regular-14 text-[#626262] text-left">
                  {displayDocumentName(selectedDocument)}
                </span>
              ) : (
                <div className="flex items-center justify-center">
                  <div className="mr-2">
                    <IconCloudUpload />
                  </div>
                  <p className="flex gap-1 items-center justify-center text-paragraph regular-14 text-[#626262] py-2">
                    Klik <span className="text-[#0089CF] text-paragraph semibold-14"> di sini</span> untuk pilih file
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {selectedDocument ? (
          <div className="flex items-center absolute top-[140px] right-0 mx-2 gap-2 z-[999] max-container">
            <button
              className="relative flex"
              type="button"
              onClick={() => {
                if (fileInputRef.current) {
                  fileInputRef.current.click()
                }
              }}
            >
              <IconEdit />
            </button>
            <button className="relative flex" type="button" onClick={handleFileReset}>
              <IconDelete />
            </button>
          </div>
        ) : null}
        {labels ? (
          <label className="label">
            <span className="label-text-alt w-[calc(100%-2px)]">{labels}</span>
          </label>
        ) : null}
      </>
    )
  }
)

FileInput.displayName = 'FileInput'

export default FileInput
