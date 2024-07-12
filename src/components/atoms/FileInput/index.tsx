import { joinClass } from '@utils/common'
import React, { ChangeEvent, ComponentPropsWithRef, FC, forwardRef, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export interface FileInputProps extends ComponentPropsWithRef<'input'> {
  isLoading?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  isValid?: boolean
  labels?: string
  onChangeFile?: (val: File) => void
  value?: any
}

const FileInput: FC<FileInputProps> = forwardRef(
  ({ className, isDisabled, isInvalid, labels = '', onChangeFile = () => {}, ...props }, ref) => {
    const [selectedImage, setSelectedImage] = useState<string | undefined>('')

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]

      if (file) {
        if (!file.type.includes('pdf')) {
          toast.error('File must be a PDF.')
          return
        }

        onChangeFile(file)
        setSelectedImage(file.name)
      }
    }

    useEffect(() => {
      setSelectedImage(props?.value?.name || '')
    }, [props.value])

    return (
      <>
        <div className={joinClass('relative', className)}>
          <input
            type="file"
            ref={ref}
            disabled={isDisabled}
            className={joinClass(
              'file-input file-input-bordered w-full file-input-md',
              isInvalid ? 'file-input-error' : ''
            )}
            onChange={handleFileChange}
            name={props.name}
            accept="application/pdf"
            onBlur={props.onBlur}
          />
          <div className="absolute inset-0 flex items-center pl-[136px] pointer-events-none">
            <p
              className={joinClass('text-sm w-[calc(100%-2px)] line-clamp-2', isDisabled ? 'bg-[#ededed]' : 'bg-white')}
            >
              {selectedImage ?? 'No file chosen'}
            </p>
          </div>
        </div>
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
