'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import { DataProfile } from '@interfaces/profile'
import { employee } from '@components/organisms/Profile/Detail/data'

export function AccountDetail() {
  const router = useRouter()

  const [dataEmployee] = useState<DataProfile[]>([employee])

  const formattedDate =
    dataEmployee[0].tanggalLahir.getDate().toString().padStart(2, '0') +
    '/' +
    (dataEmployee[0].tanggalLahir.getMonth() + 1).toString().padStart(2, '0') +
    '/' +
    dataEmployee[0].tanggalLahir.getFullYear()

  return (
    <div className="bg-[#f6f6f6] px-3 pt-2 h-full w-full">
      <div className="flex flex-row mb-2" onClick={() => router.push('/profile')} onKeyDown={() => {}}>
        <IconChevronLeft width={24} height={24} className="mr-2" />
        <span className="font-semibold text-[18px]">Profile</span>
      </div>
      <div className="flex flex-col items-center bg-white px-4 py-4 mb-2 rounded-lg">
        <div className="w-[95px] h-[95px] rounded-full bg-[#D9D9D9]"></div>
        <div className="items-center justify-center text-center self-center mt-2">
          <p className="font-semibold text-[16px]">{dataEmployee[0].nama.toUpperCase()}</p>
          <p className="font-semibold text-[16px] text-blue-900">{dataEmployee[0].jabatan.toUpperCase()}</p>
          {/* <p className=" font-normal text-[14px] text-[#909090]">View my profile</p> */}
        </div>
      </div>
      <div className="overflow-x-auto rounded-md">
        <table className="table bg-white">
          <thead className="bg-[#00376a] text-white">
            <tr>
              <th>Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="font-normal">Employee No</p>
                <p className="font-semibold text-[14px] text-[#00376a]">{dataEmployee[0].npk}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="font-normal">Full name</p>
                <p className="font-semibold text-[14px] text-[#00376a]">{dataEmployee[0].nama}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="font-normal">Email</p>
                <p className="font-semibold text-[14px] text-[#00376a]">{dataEmployee[0].email}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="font-normal">Date of birth</p>
                <p className="font-semibold text-[14px] text-[#00376a]">{formattedDate}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="font-normal">Phone No</p>
                <p className="font-semibold text-[14px] text-[#00376a]">{dataEmployee[0].noTelepon}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
