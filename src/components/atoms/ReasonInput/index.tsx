import './style.css'

export interface ReasonInputProps {
  value?: string
  max?: number
  onChangeInput?: (val: string | undefined) => void | undefined
}

const ReasonInput: React.FC<ReasonInputProps> = ({ value, max = 200, onChangeInput }) => {
  const handleActiveText = (input: string | undefined) => {
    if (input != undefined) {
      return 'text-[#505050]'
    }

    return 'text-[#909090]'
  }

  return (
    <>
      <div className="border input-textarea py-4 px-3 rounded">
        <textarea
          value={value}
          rows={5}
          maxLength={max}
          onChange={e => {
            onChangeInput && onChangeInput(e?.target?.value)
          }}
          name="reason"
          id="reason"
          className={`w-full text-paragraph regular-14 ${handleActiveText(value)}`}
          placeholder="Masukan kapasitas"
        ></textarea>
        <div className="flex justify-end text-[#909090] text-input-counter">
          {value?.length || '0'}/{max}
        </div>
      </div>
    </>
  )
}

export default ReasonInput
