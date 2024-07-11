'use client'

import IconChevronBottom from '@assets/icons/IconChevronBottom'
import Header from '@components/atoms/Header'
import { AssetFailedCard, AssetReturnCard, AssetSuccessCard } from '@components/atoms/Transaction'
import './style.css'

export function List() {
  const filterTypes = ['Semua Status', 'Semua Produk', 'Semua Tanggal']

  return (
    <>
      <Header prevLink="/booking-asset" title="Booking Transaction" key={'header'}></Header>
      <div className="px-6 pt-20 h-screen">
        <div className="w-screen whitespace-nowrap overflow-x-auto px-6 -mx-6">
          <div className="border-b border-[#E6E5E6] -mx-6 mb-6">
            <div className="mx-6 text-heading xs regular-16">
              <div className="inline-block mr-6 pb-2 px-2 border-b-2 border-[#000000]">Transaction</div>
              <div className="inline-block mr-6 pb-2 px-2">Approval</div>
            </div>
          </div>
        </div>

        <div className="w-screen whitespace-nowrap overflow-x-auto mb-6 px-6 -mx-6">
          {filterTypes.map(val => (
            <div
              key={val}
              onKeyDown={() => {}}
              className={`inline-block py-2 px-3 text-badge mr-2 border border-[#D5D5D5] rounded-full `}
            >
              <div className="flex items-center space-x-1">
                <span className="text-paragraph reguler-14 text-[#0C0C0C]">{val}</span>
                <IconChevronBottom height={20} width={20}></IconChevronBottom>
              </div>
            </div>
          ))}
        </div>

        <div>
          <AssetReturnCard></AssetReturnCard>
          <br />
          <AssetSuccessCard></AssetSuccessCard>
          <br />
          <AssetFailedCard></AssetFailedCard>
        </div>
      </div>
    </>
  )
}
