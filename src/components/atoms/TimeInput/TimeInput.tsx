import { useEffect, useRef, useState } from 'react'
import IconClose from '@assets/icons/IconClose'

interface TimeInput {
  time: Date
  text: string
  include: boolean
}

interface TimeInputComponentProps {
  endDate?: TimeInput | null
  closeClick: () => void
  appendClick: (selectedTimes: TimeInput[]) => void
}

const TimeInputComponent: React.FC<TimeInputComponentProps> = ({ endDate, closeClick, appendClick }) => {
  const initialize = useRef(false)
  const [timesInDay, setTimesInDay] = useState<TimeInput[]>([])
  const [selectedTimes, setSelectedTimes] = useState<TimeInput[]>([])

  const handleFetchTimesInDay = (): void => {
    const date = new Date()
    const times: TimeInput[] = []

    const validate = (time: Date): boolean => {
      if (endDate) {
        return time.getTime() < endDate.time.getTime()
      }
      return time.getTime() > date.getTime()
    }

    let hour = 8
    let min = 0
    let sec = 0

    while (hour < 17) {
      date.setHours(hour)
      date.setMinutes(min)
      date.setSeconds(sec)
      times.push({
        time: new Date(date),
        text: `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`,
        include: validate(date),
      })
      min += 30
      if (min === 60) {
        hour += 1
        min = 0
        sec = 0
      }
    }

    setTimesInDay(times)
  }

  const handleSelectTime = (timeInput: TimeInput): void => {
    if (!timeInput.include) return

    setSelectedTimes(prev => {
      const start = prev.find(e => e.time.getTime() === timeInput.time.getTime())

      if (start) {
        return prev.filter(e => e.time.getTime() !== timeInput.time.getTime())
      }

      return [...prev, timeInput]
    })
  }

  const handleAlertValidator = (): boolean => {
    if (selectedTimes.length) {
      const selected = selectedTimes[0].time.getTime()
      const selectedEnd = selectedTimes[selectedTimes.length - 1].time.getTime()

      const diff = (selectedEnd - selected) / (60 * 60 * 1000)

      return diff < 1 ? true : false
    }

    return true
  }

  useEffect(() => {
    if (!initialize.current) {
      handleFetchTimesInDay()
      initialize.current = true
    }
  }, [])

  return (
    <div className="pb-6">
      <div className="flex items-center space-x-4 mb-6">
        <button onClick={closeClick}>
          <IconClose className="w-6 h-6"></IconClose>
        </button>
        <div className="text-xl font-semibold">Pilih Jam</div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {timesInDay.map((val, index) => (
          <div
            onClick={() => handleSelectTime(val)}
            key={index}
            className={`${
              val.include
                ? selectedTimes.find(e => e.time.getTime() === val.time.getTime())
                  ? 'bg-[#E5F2FC] text-[#2C598D]'
                  : ''
                : 'bg-[#B1B1B1] text-[#B1B1B1] cursor-not-allowed'
            } text-center rounded-md p-4 cursor-pointer`}
          >
            {val.text}
          </div>
        ))}
      </div>
      <div className={`${handleAlertValidator() ? 'hidden' : ''} text-red-600 text-left text-xs mb-1`}>
        * Range waktu tidak boleh lebih dari 1 jam
      </div>
      <button
        disabled={selectedTimes.length < 1}
        onClick={() => appendClick(selectedTimes)}
        type="button"
        className={`${
          selectedTimes.length < 1 ? 'bg-[#B1B1B1] cursor-not-allowed' : 'bg-[#2C598D]'
        } w-full h-11 text-[#ffffff] py-2.5 font-semibold rounded-lg mt-6`}
      >
        Pilih Jam
      </button>
    </div>
  )
}

export default TimeInputComponent
