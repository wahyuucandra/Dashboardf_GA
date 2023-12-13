import React from 'react'

import moment from 'moment'
import Profile from '@components/atoms/profile'

// now indonesia
const today = moment().locale('id').format('dddd, DD MMMM YYYY')
const time = '09:00:00'

export default function Header() {
  return (
    <header className="flex flex-row bg-primary py-4 px-6 max-h-[8vh]">
      <div className="flex flex-row flex-1 items-center">
        <div className="ml-2 border-l-2 border-['#C2C2C2'] px-2">
          <h1 className="font-semibold text-teksPrimary text-base">Berijalan Next Template</h1>
        </div>
      </div>

      <div className="flex flex-row items-center">
        <div className="mr-2 border-r-2 border-['#C2C2C2'] px-2">
          <h1>{today}</h1>
        </div>
        <div className="bg-[#F5F5F5] px-2 py-1 rounded-md">
          <h1 className="font-semibold text-teksPrimary text-base">{time} WIB</h1>
        </div>

        <Profile />
      </div>
    </header>
  )
}
