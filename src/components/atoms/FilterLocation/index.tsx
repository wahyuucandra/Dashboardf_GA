'use client'

import { useState } from 'react'

import IconClose from '@assets/icons/IconClose'
import IconChevronBottom from '@assets/icons/IconChevronBottom'
import { Modal } from '../ModalCustom'

import './style.css'

export const FilterLocation = ({ onLocationChange }: { onLocationChange: (location: string) => void }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [location, setLocation] = useState<string>('all')

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLocation = event.target.value
    setLocation(newLocation)
    onLocationChange(newLocation)
    setIsOpen(false)
  }

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full h-9 border border-[#D5D5D5] text-left py-2.5 px-3 rounded-3xl flex items-center space-x-4"
        >
          <div className={`flex-1 text-paragraph regular-14 `}>Semua Lokasi</div>
          <IconChevronBottom />
        </button>
      </div>

      <Modal isOpen={isOpen} isFloating={false} backdropClick={() => setIsOpen(false)}>
        <div className="w-screen max-container h-4/5 bg-white relative px-4 py-6 text-center rounded-xl">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <button onClick={() => setIsOpen(false)} className="mr-2">
                  <IconClose width={24} height={24} color="#252525" />
                </button>
                <div className="text-heading s semibold-18">Lokasi</div>
              </div>
              <button
                onClick={() => {
                  setLocation('all')
                  setIsOpen(false)
                }}
              >
                <div className=" text-extra-small semibold-12 text-[#2C598D]">Reset</div>
              </button>
            </div>
            <div className="divider" />
          </div>
          <div>
            <label className="containers text-heading xs semibold-16">
              <p className="text-left">Semua Lokasi</p>
              <input
                type="radio"
                checked={location === 'all'}
                onChange={handleLocationChange}
                name="location"
                value="all"
              />
              <span className="radios"></span>
            </label>
            <div className="divider" />

            <label className="containers text-heading xs semibold-16">
              <p className="text-left">ACC HO</p>
              <input
                type="radio"
                checked={location === 'ACC'}
                onChange={handleLocationChange}
                name="location"
                value="ACC"
              />
              <span className="radios"></span>
            </label>
            <div className="divider"></div>

            <label className="containers text-heading xs semibold-16">
              <p className="text-left">Berijalan</p>
              <input
                type="radio"
                checked={location === 'Berijalan'}
                onChange={handleLocationChange}
                name="location"
                value="Berijalan"
              />
              <span className="radios" />
            </label>
          </div>
        </div>
      </Modal>
    </div>
  )
}
