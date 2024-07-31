'use client'

import { EHSWasteManagementForm } from '@components/atoms/EHS'
import Header from '@components/atoms/Header'
import './style.css'

export function AdminManagement() {
  return (
    <>
      <Header prevLink="/building-maintenance/ehs" title="EHS Management System" key={'header'}></Header>
      <div className="px-4 pt-16 overflow-hidden">
        <div className="w-screen whitespace-nowrap overflow-x-scroll hide-scrollbar mb-6 px-6 pt-2 -mx-6">
          <div className={'badge-option-active'}>Waste Management</div>
          {/* <div className={'badge-option-active'}>Pengunaan Air</div>
          <div className={'badge-option-active'}>Pengunaan BBM</div>
          <div className={'badge-option-active'}>Pengunaan Listrik</div> */}
        </div>
      </div>

      <div className="px-4">
        <EHSWasteManagementForm
          type="Admin"
          onSubmitForm={() => {
            // action here
          }}
        />
        {/*        
          <EHSWaterManagementForm
            type="Admin"
            onSubmitForm={() => {
              // action here
            }}
          />
          <EHSFuelManagementForm
            type="Admin"
            onSubmitForm={() => {
              // action here
            }}
          />
          <EHSElectricityManagementForm
            type="Admin"
            onSubmitForm={() => {
              // action here
            }}
          /> */}
      </div>
    </>
  )
}
