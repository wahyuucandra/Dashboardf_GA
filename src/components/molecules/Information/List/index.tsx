'use client'

import IconSearch from '@assets/icons/IconSearch'
import Header from '@components/atoms/Header'

import { InformationCard } from '@components/atoms/Information'
import Link from 'next/link'
import { informations } from './data'

import './style.css'

export function List() {
  return (
    <>
      <Header prevLink="/" title="Semua Informasi" key={'header'}></Header>
      <div className="px-3 pt-16 h-screen bg-[#FFFFFF]">
        <div className="bg-[#FFFFFF] search-input h-11 mb-4 px-3 flex items-center justify-center space-x-3 border border-[#D5D5D5] rounded-sm">
          <IconSearch></IconSearch>
          <input type="text" placeholder="Cari informasi" className="flex-1 text-paragraph regular-14 mt-1" />
        </div>

        {informations.map(val => {
          return (
            <Link key={val.id} href={`/informations/${val.id}`}>
              <InformationCard information={val}></InformationCard>
            </Link>
          )
        })}
      </div>
    </>
  )
}
