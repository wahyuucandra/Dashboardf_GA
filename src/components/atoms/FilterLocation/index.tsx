import IconClose from '@assets/icons/IconClose'
import { useState } from 'react'
import { Modal } from '../ModalCustom'
import IconChevronBottom from '@assets/icons/IconChevronBottom'
import './style.css'

export const FilterLocation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [location, setLocation] = useState<string>('')

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full h-9 border border-[#D5D5D5] text-left py-2.5 px-3 rounded-3xl flex items-center space-x-4"
      >
        <div className={`flex-1 text-paragraph regular-14 `}>Semua Lokasi</div>
        <IconChevronBottom></IconChevronBottom>
      </button>

      <Modal isOpen={isOpen} isFloating={false} backdropClick={() => setIsOpen(false)}>
        <div className="w-screen h-4/5 bg-white relative px-4 py-6 text-center rounded-xl">
          <div className="">
            <div className="flex justify-between items-center">
              <div className="flex">
                <button onClick={() => setIsOpen(false)} className="mr-2">
                  <IconClose width={24} height={24} color="#252525"></IconClose>
                </button>
                <div className="text-heading s semibold-18">Lokasi</div>
              </div>
              <button
                onClick={() => {
                  setLocation('')
                }}
              >
                <div className=" text-extra-small semibold-12 text-[#2C598D]">Reset</div>
              </button>
            </div>
            <div className="divider"></div>
          </div>
          <div>
            <label className="container text-heading xs semibold-16">
              Semua Lokasi{' '}
              <input
                type="radio"
                checked={location === 'all'}
                onChange={handleLocationChange}
                name="location"
                value="all"
              />
              <span className="radio"></span>
            </label>
            <div className="divider"></div>

            <label className="container text-heading xs semibold-16">
              ACC HO{' '}
              <input
                type="radio"
                checked={location === 'HO'}
                onChange={handleLocationChange}
                name="location"
                value="HO"
              />
              <span className="radio"></span>
            </label>
            <div className="divider"></div>

            <label className="container text-heading xs semibold-16">
              Berijalan{' '}
              <input
                type="radio"
                checked={location === 'Berijalan'}
                onChange={handleLocationChange}
                name="location"
                value="Berijalan"
              />
              <span className="radio"></span>
            </label>
          </div>
        </div>
      </Modal>
    </>
  )
}
