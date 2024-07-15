'use client'

import { useState } from 'react'

import './style.css'

// import { dataProduk } from './data';
import IconClose from '@assets/icons/IconClose'
import IconChevronBottom from '@assets/icons/IconChevronBottom'
import { Modal } from '../ModalCustom'

export const FilterProduk = () => {
  // const [isProductOpen, setIsProductOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [isRoomDrop, setIsRoomDrop] = useState<boolean>(false)
  const [isVehicleDrop, setIsVehicleDrop] = useState<boolean>(false)
  const [isManpowerDrop, setIsManpowerDrop] = useState<boolean>(false)
  const [isMaintenanceDrop, setIsMaintenanceDrop] = useState<boolean>(false)
  const [isManagementDrop, setIsManagementDrop] = useState<boolean>(false)
  const [isSecurityDrop, setIsSecurityDrop] = useState<boolean>(false)
  const [isCleaningDrop, setIsCleaningDrop] = useState<boolean>(false)

  const [product, setProduct] = useState<string>('')
  // const [produks] = useState(dataProduk);

  // console.log(produks);

  const handleProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct(event.target.value)
  }

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

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full h-9 border border-[#D5D5D5] text-leftpy-2.5 px-3 rounded-3xl flex items-center space-x-4"
      >
        <div className={`flex-1 text-paragraph regular-14 `}>Semua Produk</div>
        <IconChevronBottom />
      </button>

      <Modal isOpen={isOpen} isFloating={false} backdropClick={() => setIsOpen(false)}>
        <div className="w-screen h-4/5 bg-white relative px-4 py-6 text-center rounded-xl">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <button onClick={() => setIsOpen(false)} className="mr-2">
                  <IconClose width={24} height={24} color="#252525"></IconClose>
                </button>
                <div className="text-heading s semibold-18">Produk</div>
              </div>
              <button
                onClick={() => {
                  setProduct('')
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
              <p className="text-left">Semua Lokasi</p>
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
            <div className={`pl-9 ${isRoomDrop ? 'opacity-100' : 'opacity-0 hidden'} transition-all duration-300`}>
              <label className="containers text-heading xs regular-16">
                <p className="text-left">Meeting Room</p>
                <input
                  type="radio"
                  checked={product === 'meetingRoom'}
                  onChange={handleProductChange}
                  name="product"
                  value="meetingRoom"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>
              <label className="containers text-heading xs regular-16">
                <p className="text-left">Pods</p>
                <input
                  type="radio"
                  checked={product === 'Pods'}
                  onChange={handleProductChange}
                  name="product"
                  value="Pods"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>
              <label className="containers text-heading xs regular-16">
                <p className="text-left">Karaoke</p>
                <input
                  type="radio"
                  checked={product === 'Karaoke'}
                  onChange={handleProductChange}
                  name="product"
                  value="Karaoke"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>
              <label className="containers text-heading xs regular-16">
                <p className="text-left">Ballroom</p>
                <input
                  type="radio"
                  checked={product === 'Ballroom'}
                  onChange={handleProductChange}
                  name="product"
                  value="Ballroom"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>
            </div>

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
            <div className={`pl-9 ${isVehicleDrop ? '' : 'hidden'}`}>
              <label className="containers text-heading xs regular-16">
                <p className="text-left">Operational Khusus</p>
                <input
                  type="radio"
                  checked={product === 'operasionalKhusus'}
                  onChange={handleProductChange}
                  name="product"
                  value="operasionalKhusus"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">Operational Kantor</p>
                <input
                  type="radio"
                  checked={product === 'operasionalKantor'}
                  onChange={handleProductChange}
                  name="product"
                  value="operasionalKantor"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>
            </div>

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
            <div className={`pl-9 ${isManpowerDrop ? '' : 'hidden'}`}>
              <label className="containers text-heading xs regular-16">
                <p className="text-left">Cleaning Service</p>
                <input
                  type="radio"
                  checked={product === 'cleaningService'}
                  onChange={handleProductChange}
                  name="product"
                  value="cleaningService"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">Maintenance</p>
                <input
                  type="radio"
                  checked={product === 'operasionalKantor'}
                  onChange={handleProductChange}
                  name="product"
                  value="operasionalKantor"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">Security</p>
                <input
                  type="radio"
                  checked={product === 'security'}
                  onChange={handleProductChange}
                  name="product"
                  value="security"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">Receptionist</p>
                <input
                  type="radio"
                  checked={product === 'receptionist'}
                  onChange={handleProductChange}
                  name="product"
                  value="receptionist"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>
            </div>

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
            <div className={`pl-9 ${isMaintenanceDrop ? '' : 'hidden'}`}>
              <label className="containers text-heading xs regular-16">
                <p className="text-left">Urgent Action</p>
                <input
                  type="radio"
                  checked={product === 'urgentAction'}
                  onChange={handleProductChange}
                  name="product"
                  value="urgentAction"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">Pengajuan Perbaikan</p>
                <input
                  type="radio"
                  checked={product === 'pengajuanPerbaikan'}
                  onChange={handleProductChange}
                  name="product"
                  value="pengajuanPerbaikan"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">Budget & Timeline</p>
                <input
                  type="radio"
                  checked={product === 'budgetTimeline'}
                  onChange={handleProductChange}
                  name="product"
                  value="budgetTimeline"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">Report Kondisi Cabang</p>
                <input
                  type="radio"
                  checked={product === 'reportKondisiCabang'}
                  onChange={handleProductChange}
                  name="product"
                  value="reportKondisiCabang"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">History Perbaikan</p>
                <input
                  type="radio"
                  checked={product === 'historyPerbaikan'}
                  onChange={handleProductChange}
                  name="product"
                  value="historyPerbaikan"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">Standar Cabang</p>
                <input
                  type="radio"
                  checked={product === 'standarCabang'}
                  onChange={handleProductChange}
                  name="product"
                  value="standarCabang"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>
            </div>

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
            <div className={`pl-9 ${isManagementDrop ? '' : 'hidden'}`}>
              <label className="containers text-heading xs regular-16">
                <p className="text-left">Waste Management</p>
                <input
                  type="radio"
                  checked={product === 'wasteManagement'}
                  onChange={handleProductChange}
                  name="product"
                  value="wasteManagement"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">Penggunaan Air</p>
                <input
                  type="radio"
                  checked={product === 'penggunaanAir'}
                  onChange={handleProductChange}
                  name="product"
                  value="penggunaanAir"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">Penggunaan BBM</p>
                <input
                  type="radio"
                  checked={product === 'penggunaanBBM'}
                  onChange={handleProductChange}
                  name="product"
                  value="penggunaanBBM"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">Penggunaan Listrik</p>
                <input
                  type="radio"
                  checked={product === 'penggunaanListrik'}
                  onChange={handleProductChange}
                  name="product"
                  value="penggunaanListrik"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">AGC</p>
                <input
                  type="radio"
                  checked={product === 'agc'}
                  onChange={handleProductChange}
                  name="product"
                  value="agc"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">P2LK3</p>
                <input
                  type="radio"
                  checked={product === 'p2lk3'}
                  onChange={handleProductChange}
                  name="product"
                  value="p2lk3"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>
            </div>

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
            <div className={`pl-9 ${isSecurityDrop ? '' : 'hidden'}`}>
              <label className="containers text-heading xs regular-16">
                <p className="text-left">Manpower SG</p>
                <input
                  type="radio"
                  checked={product === 'manpowerSG'}
                  onChange={handleProductChange}
                  name="product"
                  value="manpowerSG"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">ASMS</p>
                <input
                  type="radio"
                  checked={product === 'asms'}
                  onChange={handleProductChange}
                  name="product"
                  value="asms"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">SOI</p>
                <input
                  type="radio"
                  checked={product === 'soi'}
                  onChange={handleProductChange}
                  name="product"
                  value="soi"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>
            </div>

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
            <div className={`pl-9 ${isCleaningDrop ? '' : 'hidden'}`}>
              <label className="containers text-heading xs regular-16">
                <p className="text-left">Manpower CS</p>
                <input
                  type="radio"
                  checked={product === 'manpowerCS'}
                  onChange={handleProductChange}
                  name="product"
                  value="manpowerCS"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">Penilaian CS</p>
                <input
                  type="radio"
                  checked={product === 'penilaianCS'}
                  onChange={handleProductChange}
                  name="product"
                  value="penilaianCS"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>

              <label className="containers text-heading xs regular-16">
                <p className="text-left">Cleaning Service Guidance</p>
                <input
                  type="radio"
                  checked={product === 'cleaningServiceGuidance'}
                  onChange={handleProductChange}
                  name="product"
                  value="cleaningServiceGuidance"
                />
                <span className="radios" />
                <div className="dividing" />
              </label>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
