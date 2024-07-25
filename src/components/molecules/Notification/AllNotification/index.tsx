'use client'

import Link from 'next/link'

import { FilterLocation } from '@components/atoms/FilterLocation'
import { FilterProduk } from '@components/atoms/FilterProduk'
import { dataNotification } from './data'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconMeetingRoom from '@assets/icons/IconMeetingRoom'
import IconBallroom from '@assets/icons/IconBallroom'
import IconVehicle from '@assets/icons/IconVehicle'
import IconPod from '@assets/icons/IconPod'
import IconKaraoke from '@assets/icons/IconKaraoke'
import IconManpowerSecurity from '@assets/icons/IconManpowerSecurity'
import IconManpowerMaintenance from '@assets/icons/IconManpowerMaintanance'
import IconManpowerReceptionist from '@assets/icons/IconManpowerReceptionist'

export function AllNotification() {
  const handleNotificationStatus = (status: any) => {
    if (status) {
      return 'bg-[#e5f2fc]'
    } else {
      return 'bg-white'
    }
  }

  const getNotificationText = (notification: any) => {
    switch (notification.product) {
      case 'Meeting Room':
        return `Booking untuk "${notification.asset}" berhasil dibooking`
      case 'Ballroom':
        return `Booking untuk "${notification.asset}" berhasil dibooking`
      default:
        return `Booking untuk kendaraan "${notification.asset} sudah diapprove oleh team GA"`
    }
  }

  const selisihHari = (date: Date) => {
    const today = new Date()
    const diffInMilliseconds = today.getTime() - date.getTime()
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24)
    return Math.floor(diffInDays)
  }

  const handleIconNotification = (product: string, size = 20) => {
    switch (product) {
      case 'Meeting Room':
        return <IconMeetingRoom width={size} height={size} />
      case 'Ballroom':
        return <IconBallroom width={size} height={size} />
      case 'Vehicle':
        return <IconVehicle width={size} height={size} />
      case 'Pods':
        return <IconPod width={size} height={size} />
      case 'Karaoke':
        return <IconKaraoke width={size} height={size} />
      case 'Maintenance':
        return <IconManpowerMaintenance width={size} height={size} />
      case 'Security':
        return <IconManpowerSecurity width={size} height={size} />
      case 'Receptionist':
        return <IconManpowerReceptionist width={size} height={size} />
      // case 'Operational Khusus':
      // 	return <IconOperationalKhusus width={size} height={size} />;
      // case 'Operational Kantor':
      // 	return <IconOperationalKantor width={size} height={size} />;
      // case 'Cleaning Service':
      // 	return <IconCleaningService width={size} height={size} />;
      // case 'Urgent Action':
      // 	return <IconUrgentAction width={size} height={size} />;
      // case 'Pengajuan Perbaikan':
      // 	return <IconPengajuanPerbaikan width={size} height={size} />;
      // case 'Budget & Timeline':
      // 	return <IconBudgetTimeline width={size} height={size} />;
      // case 'Report Kondisi Cabang':
      // 	return <IconReportKondisiCabang width={size} height={size} />;
      // case 'History Perbaikan':
      // 	return <IconHistoryPerbaikan width={size} height={size} />;
      // case 'Standar Cabang':
      // 	return <IconStandarCabang width={size} height={size} />;
      // case 'Waste Management':
      // 	return <IconWasteManagement width={size} height={size} />;
      // case 'Penggunaan Air':
      // 	return <IconPenggunaanAir width={size} height={size} />;
      // case 'Penggunaan BBM':
      // 	return <IconPenggunaanBBM width={size} height={size} />;
      // case 'Penggunaan Listrik':
      // 	return <IconPenggunaanListrik width={size} height={size} />;
      // case 'AGC':
      // 	return <IconAGC width={size} height={size} />;
      // case 'P2LK3':
      // 	return <IconP2LK3 width={size} height={size} />;
      // case 'Manpower SG':
      // 	return <IconManpowerSG width={size} height={size} />;
      // case 'ASMS':
      // 	return <IconASMS width={size} height={size} />;
      // case 'SOI':
      // 	return <IconSOI width={size} height={size} />;
      // case 'Manpower CS':
      // 	return <IconManpowerCS width={size} height={size} />;
      // case 'Penilaian CS':
      // 	return <IconPenilaianCS width={size} height={size} />;
      // case 'Cleaning Service Guidance':
      // 	return (
      // 		<IconCleaningServiceGuidance width={size} height={size} />
      // 	);
      default:
        return null // Atau ikon default lainnya
    }
  }

  return (
    <div className="bg-white max-container bottom-0 top-0 z-[101]">
      <div className="relative flex flex-row items-center px-4 pt-4">
        <div className="relative flex">
          <Link href={'/'} className="rounded-md bg-white w-8 h-8 flex items-center justify-center">
            <IconChevronLeft />
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <span className="font-semibold text-[18px] text-[#2C598D]">Notifikasi</span>
        </div>
      </div>

      <div className="flex flex-row items-center mb-2 px-4 pt-4">
        <div className="w-[150px] mr-2">
          <FilterLocation />
        </div>
        <div className="w-[150px]">
          <FilterProduk />
        </div>
      </div>
      <div>
        {dataNotification.map(notification => (
          <div
            key={notification.id}
            className={`${handleNotificationStatus(notification.status)} px-4 h-[85px] flex flex-col justify-between`}
          >
            <div className="flex">
              <div className="mt-2 mr-2">{handleIconNotification(notification.product)}</div>
              <div className="w-full">
                <div className="justify-between flex mt-2 w-full">
                  <span className="text-extra-small regular-12 text-[#909090]">
                    {notification.location} - {notification.product}
                  </span>
                  <span className="text-extra-small regular-12 text-[#909090]">
                    {selisihHari(notification.date) < 7
                      ? `${selisihHari(notification.date)} hari yang lalu`
                      : notification.date.toLocaleDateString('en-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                  </span>
                </div>
                <p className="text-heading xs semibold-16 py-2">{getNotificationText(notification)}</p>
              </div>
            </div>
            <div className="dividers"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
