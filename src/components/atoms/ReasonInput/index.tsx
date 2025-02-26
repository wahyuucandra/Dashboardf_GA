import { Control, Controller } from 'react-hook-form'
import './style.css'

export interface ReasonInputProps {
  value?: string
  max?: number
  placeholder?: string
  name?: string
  disabled?: boolean
  control?: Control<any>
  onChangeInput?: (val: string | undefined) => void | undefined
}

export const ReasonInput: React.FC<ReasonInputProps> = ({
  value,
  max = 200,
  placeholder = 'Isi keperluan',
  name = 'reason',
  control,
  disabled,
  onChangeInput,
}) => {
  const handleActiveText = (input: string | undefined) => {
    return input != undefined ? 'text-[#505050]' : 'text-[#909090]'
  }

  const handleBinding = () => {
    if (control) {
      return (
        <Controller
          defaultValue={''}
          control={control}
          name={name}
          disabled={disabled}
          render={({ field, formState: { errors } }) => (
            <>
              <div className="border input-textarea py-2.5 px-3 rounded">
                <input
                  {...field}
                  maxLength={max}
                  className={`w-full text-paragraph regular-14 ${handleActiveText(field?.value)}`}
                  placeholder={placeholder}
                />
              </div>

              {errors?.[name]?.message && (
                <div className="text-xs text-error mt-1">{errors?.[name]?.message?.toString()}</div>
              )}
            </>
          )}
        />
      )
    }

    return (
      <div className="border input-textarea py-2.5 px-3 rounded">
        <input
          value={value}
          maxLength={max}
          onChange={e => {
            onChangeInput && onChangeInput(e?.target?.value)
          }}
          name="reason"
          id="reason"
          className={`w-full text-paragraph regular-14 ${handleActiveText(value)}`}
          placeholder={placeholder}
        />
      </div>
    )
  }

  return handleBinding()
}

export interface ReasonInputAreaProps {
  value?: string
  max?: number
  disabled?: boolean
  showCounter?: boolean
  rows?: number
  placeholder?: string
  onChangeInput?: (val: string | undefined) => void | undefined
  control?: Control<any>
  name?: string
  bgColor?: string
}

export const ReasonInputArea: React.FC<ReasonInputAreaProps> = ({
  value,
  disabled = false,
  max = 200,
  rows = 5,
  showCounter = true,
  placeholder = 'Isi keperluan',
  onChangeInput,
  control,
  name = 'reason',
  bgColor,
}) => {
  const handleActiveText = (input: string | undefined) => {
    return input != undefined ? 'text-[#505050]' : 'text-[#909090'
  }

  const handleBinding = () => {
    if (control) {
      return (
        <Controller
          defaultValue={''}
          control={control}
          name={name}
          render={({ formState: { errors } }) => (
            <>
              <div className={`border input-textarea py-4 px-3 rounded ${bgColor}`}>
                <textarea
                  disabled={disabled}
                  value={value}
                  rows={rows}
                  maxLength={max}
                  onChange={e => {
                    onChangeInput && onChangeInput(e?.target?.value)
                  }}
                  name="reason"
                  id="reason"
                  className={`w-full text-paragraph regular-14 ${handleActiveText(value)}`}
                  placeholder={placeholder}
                ></textarea>
                <div className={`${showCounter ? '' : 'hidden'} flex justify-end text-[#909090] text-input-counter`}>
                  {value?.length ?? '0'}/{max}
                </div>
              </div>
              {errors?.[name]?.message && (
                <div className="text-xs text-error mt-1">{errors?.[name]?.message?.toString()}</div>
              )}
            </>
          )}
        />
      )
    }

    return (
      <div className={`border input-textarea py-4 px-3 rounded ${bgColor}`}>
        <textarea
          disabled={disabled}
          value={value}
          rows={rows}
          maxLength={max}
          onChange={e => {
            onChangeInput && onChangeInput(e?.target?.value)
          }}
          name="reason"
          id="reason"
          className={`w-full text-paragraph regular-14 ${handleActiveText(value)}`}
          placeholder={placeholder}
        ></textarea>
        <div className={`${showCounter ? '' : 'hidden'} flex justify-end text-[#909090] text-input-counter`}>
          {value?.length ?? '0'}/{max}
        </div>
      </div>
    )
  }

  return handleBinding()
}
