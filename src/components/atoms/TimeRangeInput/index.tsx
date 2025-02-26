import IconClose from '@assets/icons/IconClose'
import IconTime from '@assets/icons/IconTime'
import { IBookingTime } from '@interfaces/time'
import { TimeInput } from '@interfaces/time-input'
import { useEffect, useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import { Modal } from '../ModalCustom'
import { handleFetchTimesInDay } from './data'
import './style.css'

export interface TimeRangeInputProps {
  availableTimes?: IBookingTime[]
  useRange?: boolean
  value?: { start: TimeInput | undefined; end: TimeInput | undefined }
  onButtonClick?: (val: { start: TimeInput | undefined; end: TimeInput | undefined } | undefined) => void | undefined
  control: Control<any>
  disabled?: boolean
  name?: string
}

export const TimeRangeInput: React.FC<TimeRangeInputProps> = ({
  availableTimes,
  useRange = true,
  value,
  control,
  disabled = false,
  name = 'time',
  onButtonClick,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [timesInDay, setTimesInDay] = useState<TimeInput[]>()
  const [selectedTimes, setSelectedTimes] = useState<
    { start: TimeInput | undefined; end: TimeInput | undefined } | undefined
  >(value)

  const handleSelectTime = (timeInput: TimeInput) => {
    if (!timeInput?.availabel) return

    setSelectedTimes(prev => {
      const start = prev?.start
      const end = prev?.end

      if (!start && !end) {
        return { ...prev, start: timeInput, end: timeInput }
      }

      if (!useRange) {
        return { ...prev, start: timeInput, end: timeInput }
      }

      if (start?.startTime.getTime() != end?.startTime.getTime()) {
        return { ...prev, start: timeInput, end: timeInput }
      }

      if (start && timeInput?.startTime?.getTime() < start?.startTime?.getTime()) {
        const filteredTimes = timesInDay?.filter(
          val =>
            val?.startTime?.getTime() <= start.startTime.getTime() &&
            val?.startTime?.getTime() >= timeInput?.startTime?.getTime()
        )
        if (filteredTimes?.some(val => !val.availabel)) {
          return { ...prev }
        }
        return { ...prev, start: timeInput }
      }

      if (start && timeInput?.startTime?.getTime() > start?.startTime?.getTime()) {
        const filteredTimes = timesInDay?.filter(
          val =>
            val?.startTime?.getTime() >= start.startTime.getTime() &&
            val?.startTime?.getTime() <= timeInput?.startTime?.getTime()
        )
        if (filteredTimes?.some(val => !val.availabel)) {
          return { ...prev }
        }
        return { ...prev, end: timeInput }
      }
    })
  }

  const handleClassSelectedTimes = (timeInput: TimeInput) => {
    if (!timeInput?.availabel) {
      return 'bg-[#D9D9D9] border-[#D9D9D9] text-[#717171]'
    }

    if (selectedTimes?.start && selectedTimes?.end) {
      const start = selectedTimes?.start
      const end = selectedTimes?.end

      if (
        timeInput?.startTime?.getTime() >= start?.startTime?.getTime() &&
        timeInput?.endTime?.getTime() <= end?.endTime?.getTime()
      ) {
        return 'bg-[#E5F2FC] border-[#0089CF] text-[#0089CF]'
      }
    }
    return 'border-[#B1B1B1]'
  }

  const handleButtonValidator = () => {
    return !(selectedTimes?.start && selectedTimes?.end)
  }

  const handleActiveText = (input: { start: TimeInput | undefined; end: TimeInput | undefined } | undefined) => {
    if (input?.start || input?.end) {
      return 'text-[#505050]'
    }

    return 'text-[#909090]'
  }

  const handleBindTime = (input: { start: TimeInput | undefined; end: TimeInput | undefined } | undefined) => {
    if (input?.start?.startTime && input?.end?.endTime) {
      const start = input?.start?.startText
      const end = input?.end?.endText
      if (start || end) {
        return `${start} - ${end}`
      }
    }

    return 'Pilih Jam'
  }

  useEffect(() => {
    const times = handleFetchTimesInDay(availableTimes)
    setTimesInDay(times)
  }, [availableTimes])

  return (
    <>
      <Controller
        defaultValue={''}
        control={control}
        name={name}
        render={({ field, formState: { errors } }) => (
          <>
            <button
              disabled={disabled}
              type="button"
              onClick={() => setIsOpen(true)}
              className="w-full h-11 border border-[#D5D5D5] text-left py-2.5 px-3 rounded flex items-center space-x-4"
            >
              <IconTime></IconTime>
              <div className={`flex-1 text-paragraph regular-14 -mb-1 ${handleActiveText(field?.value)} `}>
                {handleBindTime(field?.value)}
              </div>
            </button>
            {errors?.[name]?.message && (
              <div className="text-xs text-error mt-1">{errors?.[name]?.message?.toString()}</div>
            )}
          </>
        )}
      />

      <Modal isOpen={isOpen} isFloating={false} backdropClick={() => setIsOpen(false)}>
        <div className="w-screen max-container h-4/5 bg-white relative px-4 py-6 text-center rounded-t-xl">
          <div className="pb-6">
            <div className="flex items-center space-x-4 mb-6">
              <button type="button" onClick={() => setIsOpen(false)}>
                <IconClose className="w-6 h-6"></IconClose>
              </button>
              <div className="text-xl font-semibold">Pilih Waktu</div>
            </div>
            <div className="h-[40vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-3 mb-6 ">
                {timesInDay?.map((val, index) => (
                  <button
                    type="button"
                    onClick={() => handleSelectTime(val)}
                    key={index}
                    className={`rounded-lg border ${handleClassSelectedTimes(val)} text-sm p-2`}
                  >
                    {val.startText} - {val.endText}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center space-x-8 my-6">
              <div className="flex items-center space-x-3">
                <div className="rounded-lg border border-[#B1B1B1] w-6 h-6"></div>
                <span>Availabel</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="rounded-lg bg-[#D9D9D9] border-[#D9D9D9] w-6 h-6"></div>
                <span>Reserved</span>
              </div>
            </div>

            <button
              disabled={handleButtonValidator()}
              onClick={() => {
                onButtonClick && onButtonClick(selectedTimes)
                setIsOpen(false)
              }}
              type="button"
              className={` ${
                handleButtonValidator() ? 'bg-[#B1B1B1]' : 'approve-button'
              } h-11 w-full text-[#ffffff] py-2.5 text-heading xs semibold-16 rounded-lg`}
            >
              Pilih Waktu
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export interface TimeRangeInputCustomProps {
  isOpen: boolean
  value?: { start: TimeInput | undefined; end: TimeInput | undefined }
  onButtonClick?: (val: { start: TimeInput | undefined; end: TimeInput | undefined } | undefined) => void | undefined
  onCloseClick?: () => void
}

export const TimeRangeInputCustom: React.FC<TimeRangeInputCustomProps> = ({
  isOpen,
  value,
  onButtonClick,
  onCloseClick,
}) => {
  const times = handleFetchTimesInDay()

  const [timesInDay] = useState<TimeInput[]>(times)
  const [selectedTimes, setSelectedTimes] = useState<
    { start: TimeInput | undefined; end: TimeInput | undefined } | undefined
  >(value)

  const handleSelectTime = (timeInput: TimeInput) => {
    if (!timeInput?.availabel) return undefined

    setSelectedTimes(prev => {
      const start = prev?.start
      const end = prev?.end

      if (!start && !end) {
        return { ...prev, start: timeInput, end: timeInput }
      }

      if (start?.startTime.getTime() != end?.startTime.getTime()) {
        return { ...prev, start: timeInput, end: timeInput }
      }

      if (start && timeInput?.startTime?.getTime() < start?.startTime?.getTime()) {
        return { ...prev, start: timeInput }
      }

      if (start && timeInput?.startTime?.getTime() > start?.startTime?.getTime()) {
        return { ...prev, end: timeInput }
      }
    })
  }

  const handleClassSelectedTimes = (timeInput: TimeInput) => {
    if (!timeInput?.availabel) {
      return 'bg-[#D9D9D9] border-[#D9D9D9] text-[#717171] c'
    }

    if (selectedTimes?.start && selectedTimes?.end) {
      const start = selectedTimes?.start
      const end = selectedTimes?.end

      if (
        timeInput?.startTime?.getTime() >= start?.startTime?.getTime() &&
        timeInput?.endTime?.getTime() <= end?.endTime?.getTime()
      ) {
        return 'bg-[#E5F2FC] border-[#0089CF] text-[#0089CF] c'
      }
    }
    return 'border-[#B1B1B1] c'
  }

  const handleButtonValidator = () => {
    return !(selectedTimes?.start && selectedTimes?.end)
  }

  return (
    <Modal isOpen={isOpen} isFloating={false} backdropClick={onCloseClick}>
      <div className="w-screen max-container h-4/5 bg-white relative px-4 py-6 text-center rounded-t-xl">
        <div className="pb-6">
          <div className="flex items-center space-x-4 mb-6">
            <button type="button" onClick={onCloseClick}>
              <IconClose className="w-6 h-6"></IconClose>
            </button>
            <div className="text-xl font-semibold">Pilih Waktu</div>
          </div>
          <div className="h-[40vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-3 mb-6 ">
              {timesInDay?.map((val, index) => (
                <div
                  onKeyDown={() => {}}
                  onClick={() => handleSelectTime(val)}
                  key={index}
                  className={`rounded-lg border ${handleClassSelectedTimes(val)} text-sm p-2`}
                >
                  {val.startText} - {val.endText}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center space-x-8 my-6">
            <div className="flex items-center space-x-3">
              <div className="rounded-lg border border-[#B1B1B1] w-6 h-6"></div>
              <span>Availabel</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="rounded-lg bg-[#D9D9D9] border-[#D9D9D9] w-6 h-6"></div>
              <span>Reserved</span>
            </div>
          </div>

          <button
            disabled={handleButtonValidator()}
            onClick={() => {
              onButtonClick && onButtonClick(selectedTimes)
            }}
            type="button"
            className={` ${
              handleButtonValidator() ? 'bg-[#B1B1B1]' : 'approve-button'
            } h-11 w-full text-[#ffffff] py-2.5 text-heading xs semibold-16 rounded-lg`}
          >
            Pilih Waktu
          </button>
        </div>
      </div>
    </Modal>
  )
}
