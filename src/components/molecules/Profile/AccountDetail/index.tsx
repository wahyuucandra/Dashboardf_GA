'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import { GetCookie } from '@store/storage'
// import { DataProfile } from '@interfaces/profile'
// import { employee } from '@components/organisms/Profile/Detail/data'

export function AccountDetail() {
  const router = useRouter()

  // const [dataEmployee] = useState<DataProfile[]>([employee])
  const [dataUser, setDataUser] = useState<any>({})

  useEffect(() => {
    const data = GetCookie('data_user')
    setDataUser(data)
  }, [])

  // const formattedDate =
  //   dataEmployee[0].tanggalLahir.getDate().toString().padStart(2, '0') +
  //   '/' +
  //   (dataEmployee[0].tanggalLahir.getMonth() + 1).toString().padStart(2, '0') +
  //   '/' +
  //   dataEmployee[0].tanggalLahir.getFullYear()

  const handleProfileClick = () => {
    router.push('/profile')
  }

  return (
    <div className="bg-[#f6f6f6] px-3 pt-2 h-full w-full">
      <div className="flex flex-row mb-2" onClick={handleProfileClick} onKeyDown={() => {}}>
        <IconChevronLeft width={24} height={24} className="mr-2" />
        <span className="font-semibold text-[18px]">Profile</span>
      </div>
      <div className="flex flex-col items-center bg-white px-4 py-4 mb-2 rounded-lg">
        <div className="w-[95px] h-[95px] rounded-full bg-[#D9D9D9]" />
        <div className="items-center justify-center text-center self-center mt-2">
          <p className="font-semibold text-[16px]">{dataUser?.nameUser?.toUpperCase() || '—'}</p>
          <p className="font-semibold text-[16px] text-blue-900">{dataUser?.groupUser?.toUpperCase() || '—'}</p>
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
                <p className="font-semibold text-[14px] text-[#00376a]">{dataUser?.npk || '—'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="font-normal">Full name</p>
                <p className="font-semibold text-[14px] text-[#00376a]">{dataUser?.nameUser || '—'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="font-normal">Email</p>
                <p className="font-semibold text-[14px] text-[#00376a]">{dataUser?.email || '—'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="font-normal">Date of birth</p>
                <p className="font-semibold text-[14px] text-[#00376a]">{dataUser?.dateOfBirth || '—'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="font-normal">Phone No</p>
                <p className="font-semibold text-[14px] text-[#00376a]">{dataUser?.noHp || '—'}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
