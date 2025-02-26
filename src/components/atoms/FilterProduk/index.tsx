'use client'

import { useState } from 'react'

import {
  dataCleaningService,
  dataMaintenance,
  dataManagementSystem,
  dataManpower,
  dataRoom,
  dataSecurityGuard,
  dataVehicle,
} from './data'
import IconClose from '@assets/icons/IconClose'
import IconChevronBottom from '@assets/icons/IconChevronBottom'
import { Modal } from '../ModalCustom'

import './style.css'

export const FilterProduk = ({ onProductChange }: { onProductChange: (product: string) => void }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [isRoomDrop, setIsRoomDrop] = useState<boolean>(false)
  const [isVehicleDrop, setIsVehicleDrop] = useState<boolean>(false)
  const [isManpowerDrop, setIsManpowerDrop] = useState<boolean>(false)
  const [isMaintenanceDrop, setIsMaintenanceDrop] = useState<boolean>(false)
  const [isManagementDrop, setIsManagementDrop] = useState<boolean>(false)
  const [isSecurityDrop, setIsSecurityDrop] = useState<boolean>(false)
  const [isCleaningDrop, setIsCleaningDrop] = useState<boolean>(false)

  const [rooms] = useState(dataRoom)
  const [vehicles] = useState(dataVehicle)
  const [manpower] = useState(dataManpower)
  const [maintenance] = useState(dataMaintenance)
  const [managementSystem] = useState(dataManagementSystem)
  const [securityGuard] = useState(dataSecurityGuard)
  const [cleaningService] = useState(dataCleaningService)

  const [product, setProduct] = useState<string>('all')

  const handleRoom = () => {
    setIsRoomDrop(!isRoomDrop)
  }

  const handleVehicle = () => {
    setIsVehicleDrop(!isVehicleDrop)
  }

  const handleManpower = () => {
    setIsManpowerDrop(!isManpowerDrop)
  }

  const handleMaintenance = () => {
    setIsMaintenanceDrop(!isMaintenanceDrop)
  }

  const handleManagement = () => {
    setIsManagementDrop(!isManagementDrop)
  }

  const handleSecurity = () => {
    setIsSecurityDrop(!isSecurityDrop)
  }

  const handleCleaning = () => {
    setIsCleaningDrop(!isCleaningDrop)
  }

  const handleProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newProduct = event.target.value
    setProduct(newProduct)
    onProductChange(newProduct)
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
          <div className={`flex-1 text-paragraph regular-14 `}>Semua Produk</div>
          <IconChevronBottom />
        </button>
      </div>

      <Modal isOpen={isOpen} isFloating={false} backdropClick={() => setIsOpen(false)}>
        <div className="w-screen max-container bg-white relative px-4 py-6 text-center rounded-xl">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <button onClick={() => setIsOpen(false)} className="mr-2">
                  <IconClose width={24} height={24} color="#252525" />
                </button>
                <div className="text-heading s semibold-18">Produk</div>
              </div>
              <button
                onClick={() => {
                  setProduct('all')
                  setIsOpen(false)
                }}
              >
                <div className=" text-extra-small semibold-12 text-[#2C598D]">Reset</div>
              </button>
            </div>
            <div className="dividing" />
          </div>

          {/* Filter items */}
          <div>
            <label className="containers text-heading xs semibold-16">
              <p className="text-left">Semua Produk</p>
              <input
                type="radio"
                checked={product === 'all'}
                onChange={handleProductChange}
                name="product"
                value="all"
              />
              <span className="radios" />
            </label>
            <div className="dividing" />

            {/* Menu Room */}
            <label className="containers text-heading xs semibold-16 mainmenu">
              <p className="text-left">Room</p>
              <input
                type="radio"
                checked={product === 'Room'}
                onChange={handleProductChange}
                name="product"
                value="Room"
              />
              <button
                className={`absolute right-0 top-0 z-[101] mr-10 transition-transform ${
                  isRoomDrop ? 'rotate-180' : ''
                }`}
                onClick={handleRoom}
              >
                <IconChevronBottom width={24} height={24} />
              </button>
              <span className="radios" />
            </label>
            <div className="dividing" />

            {/* Submenu Room */}
            {isRoomDrop && (
              <div className={`pl-9 transition-all duration-300`}>
                {rooms.map(item => (
                  <label key={item.id} className="containers text-heading xs regular-16">
                    <p className="text-left">{item.name}</p>
                    <input
                      type="radio"
                      checked={product === item.values}
                      onChange={handleProductChange}
                      name="product"
                      value={item.values}
                    />
                    <span className="radios"></span>
                    <div className="dividing" />
                  </label>
                ))}
              </div>
            )}

            {/* Vehicle */}
            <label className="containers text-heading xs semibold-16">
              <p className="text-left">Vehicle</p>
              <input
                type="radio"
                checked={product === 'Vehicle'}
                onChange={handleProductChange}
                name="product"
                value="Vehicle"
              />
              <button
                className={`absolute right-0 top-0 z-[101] mr-10 transition-transform ${
                  isVehicleDrop ? 'rotate-180' : ''
                }`}
                onClick={handleVehicle}
              >
                <IconChevronBottom width={24} height={24} />
              </button>
              <span className="radios" />
            </label>
            <div className="dividing" />

            {/* Submenu Vehicle */}
            {isVehicleDrop && (
              <div className={`pl-9 transition-all duration-300`}>
                {vehicles.map(item => (
                  <label key={item.id} className="containers text-heading xs regular-16">
                    <p className="text-left">{item.name}</p>
                    <input
                      type="radio"
                      checked={product === item.values}
                      onChange={handleProductChange}
                      name="product"
                      value={item.values}
                    />
                    <span className="radios"></span>
                    <div className="dividing" />
                  </label>
                ))}
              </div>
            )}

            {/* Asset */}
            <label className="containers text-heading xs semibold-16" htmlFor="asset">
              <p className="text-left">Asset</p>
            </label>
            <div className="dividing" />

            {/* Manpower */}
            <label className="containers text-heading xs semibold-16">
              <p className="text-left">Manpower</p>
              <input
                type="radio"
                checked={product === 'Manpower'}
                onChange={handleProductChange}
                name="product"
                value="Manpower"
              />
              <button
                className={`absolute right-0 top-0 z-[101] mr-10 transition-transform ${
                  isManpowerDrop ? 'rotate-180' : ''
                }`}
                onClick={handleManpower}
              >
                <IconChevronBottom width={24} height={24} />
              </button>
              <span className="radios" />
            </label>
            <div className="dividing" />

            {/* Submenu Manpower */}
            {isManpowerDrop && (
              <div className={`pl-9 transition-all duration-300`}>
                {manpower.map(item => (
                  <label key={item.id} className="containers text-heading xs regular-16">
                    <p className="text-left">{item.name}</p>
                    <input
                      type="radio"
                      checked={product === item.values}
                      onChange={handleProductChange}
                      name="product"
                      value={item.values}
                    />
                    <span className="radios"></span>
                    <div className="dividing" />
                  </label>
                ))}
              </div>
            )}

            {/* Menu Building Maintenance */}
            <label className="containers text-heading xs semibold-16">
              <p className="text-left">Building Maintenance</p>
              <input
                type="radio"
                checked={product === 'Berijalan'}
                onChange={handleProductChange}
                name="product"
                value="buildingMaintenance"
              />
              <button
                className={`absolute right-0 top-0 z-[101] mr-10 transition-transform ${
                  isMaintenanceDrop ? 'rotate-180' : ''
                }`}
                onClick={handleMaintenance}
              >
                <IconChevronBottom width={24} height={24} />
              </button>
              <span className="radios" />
            </label>
            <div className="dividing" />

            {/* Submenu Building Maintenance */}
            {isMaintenanceDrop && (
              <div className={`pl-9 transition-all duration-300`}>
                {maintenance.map(item => (
                  <label key={item.id} className="containers text-heading xs regular-16">
                    <p className="text-left">{item.name}</p>
                    <input
                      type="radio"
                      checked={product === item.values}
                      onChange={handleProductChange}
                      name="product"
                      value={item.values}
                    />
                    <span className="radios"></span>
                    <div className="dividing" />
                  </label>
                ))}
              </div>
            )}

            {/* Menu EHS Management System */}
            <label className="containers text-heading xs semibold-16">
              <p className="text-left">EHS Management System</p>
              <input
                type="radio"
                checked={product === 'ehs'}
                onChange={handleProductChange}
                name="product"
                value="ehs"
              />
              <button
                className={`absolute right-0 top-0 z-[101] mr-10 transition-transform ${
                  isManagementDrop ? 'rotate-180' : ''
                }`}
                onClick={handleManagement}
              >
                <IconChevronBottom width={24} height={24} />
              </button>
              <span className="radios" />
            </label>
            <div className="dividing" />

            {/* Submenu EHS Management */}
            {isManagementDrop && (
              <div className={`pl-9 transition-all duration-300`}>
                {managementSystem.map(item => (
                  <label key={item.id} className="containers text-heading xs regular-16">
                    <p className="text-left">{item.name}</p>
                    <input
                      type="radio"
                      checked={product === item.values}
                      onChange={handleProductChange}
                      name="product"
                      value={item.values}
                    />
                    <span className="radios"></span>
                    <div className="dividing" />
                  </label>
                ))}
              </div>
            )}

            {/* Menu Security Guard */}
            <label className="containers text-heading xs semibold-16">
              <p className="text-left">Security Guard</p>
              <input
                type="radio"
                checked={product === 'security'}
                onChange={handleProductChange}
                name="product"
                value="security"
              />
              <button
                className={`absolute right-0 top-0 z-[101] mr-10 transition-transform ${
                  isSecurityDrop ? 'rotate-180' : ''
                }`}
                onClick={handleSecurity}
              >
                <IconChevronBottom width={24} height={24} />
              </button>
              <span className="radios" />
            </label>
            <div className="dividing" />

            {/* Submenu Security */}
            {isSecurityDrop && (
              <div className={`pl-9 transition-all duration-300`}>
                {securityGuard.map(item => (
                  <label key={item.id} className="containers text-heading xs regular-16">
                    <p className="text-left">{item.name}</p>
                    <input
                      type="radio"
                      checked={product === item.values}
                      onChange={handleProductChange}
                      name="product"
                      value={item.values}
                    />
                    <span className="radios"></span>
                    <div className="dividing" />
                  </label>
                ))}
              </div>
            )}

            {/* Menu Cleaning Service */}
            <label className="containers text-heading xs semibold-16">
              <p className="text-left">Cleaning Service</p>
              <input
                type="radio"
                checked={product === 'Berijalan'}
                onChange={handleProductChange}
                name="product"
                value="Berijalan"
              />
              <button
                className={`absolute right-0 top-0 z-[101] mr-10 transition-transform ${
                  isCleaningDrop ? 'rotate-180' : ''
                }`}
                onClick={handleCleaning}
              >
                <IconChevronBottom width={24} height={24} />
              </button>
              <span className="radios" />
            </label>
            <div className="dividing" />

            {/* Submenu Cleaning Service */}
            {isCleaningDrop && (
              <div className={`pl-9 transition-all duration-300`}>
                {cleaningService.map(item => (
                  <label key={item.id} className="containers text-heading xs regular-16">
                    <p className="text-left">{item.name}</p>
                    <input
                      type="radio"
                      checked={product === item.values}
                      onChange={handleProductChange}
                      name="product"
                      value={item.values}
                    />
                    <span className="radios"></span>
                    <div className="dividing" />
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  )
}
