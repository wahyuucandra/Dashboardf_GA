'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { FilterLocation } from '@components/atoms/FilterLocation'
import { FilterProduk } from '@components/atoms/FilterProduk'
import { dataNotification } from './data'
import Header from '@components/atoms/Header'
import IconMeetingRoom from '@assets/icons/IconMeetingRoom'
import IconBallroom from '@assets/icons/IconBallroom'
import IconVehicle from '@assets/icons/IconVehicle'
import IconPod from '@assets/icons/IconPod'
import IconKaraoke from '@assets/icons/IconKaraoke'
import IconManpowerSecurity from '@assets/icons/IconManpowerSecurity'
import IconManpowerMaintenance from '@assets/icons/IconManpowerMaintanance'
import IconManpowerReceptionist from '@assets/icons/IconManpowerReceptionist'
import IconVehicleSpecialOperation from '@assets/icons/IconVehicleSpecialOperation'
import IconVehicleOfficeOperation from '@assets/icons/IconVehicleOfficeOperation'
import IconPengajuanPerbaikan from '@assets/icons/IconPengajuanPerbaikan'
import IconBudgetTimeline from '@assets/icons/IconBudgetTimeline'
import IconReportKondisi from '@assets/icons/IconReportKondisi'
import IconHistory from '@assets/icons/IconHistory'
import IconStandarCabang from '@assets/icons/IconStandarCabang'
import IconCleaningService from '@assets/icons/IconCleaningService'
import IconEHSWaste from '@assets/icons/IconEHSWaste'
import IconEHSWater from '@assets/icons/IconEHSWater'
import IconEHSAGC from '@assets/icons/IconEHSAGC'
import IconEHSP2LK3 from '@assets/icons/IconEHSP2LK3'
import IconSecurityManpower from '@assets/icons/IconSecurityManpower'
import IconSecurityASMS from '@assets/icons/IconSecurityASMS'
import IconSecuritySOI from '@assets/icons/IconSecuritySOI'
import IconCleaningServiceManpower from '@assets/icons/IconCleaningServiceManpower'
import IconCleaningServiceRating from '@assets/icons/IconCleaningServiceRating'
import IconCleaningServiceGuidance from '@assets/icons/IconCleaningServiceGuidance'

export function AllNotification() {
  const router = useRouter()

  const [selectedLocation, setSelectedLocation] = useState<string>('')
  const [selectedProduct, setSelectedProduct] = useState<string>('')
  const [notificationsToDisplay, setNotificationsToDisplay] = useState<any[]>(dataNotification)

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
      case 'Operational Khusus':
        return <IconVehicleSpecialOperation width={size} height={size} />
      case 'Operational Kantor':
        return <IconVehicleOfficeOperation width={size} height={size} />
      case 'Pengajuan Perbaikan':
        return <IconPengajuanPerbaikan width={size} height={size} />
      case 'Budget & Timeline':
        return <IconBudgetTimeline width={size} height={size} />
      case 'Report Kondisi Cabang':
        return <IconReportKondisi width={size} height={size} />
      case 'History Perbaikan':
        return <IconHistory width={size} height={size} />
      case 'Standar Cabang':
        return <IconStandarCabang width={size} height={size} />
      case 'Cleaning Service':
        return <IconCleaningService width={size} height={size} />
      case 'Waste Management':
        return <IconEHSWaste width={size} height={size} />
      case 'Penggunaan Air':
        return <IconEHSWater width={size} height={size} />
      case 'AGC':
        return <IconEHSAGC width={size} height={size} />
      case 'P2LK3':
        return <IconEHSP2LK3 width={size} height={size} />
      case 'Manpower SG':
        return <IconSecurityManpower width={size} height={size} />
      case 'ASMS':
        return <IconSecurityASMS width={size} height={size} />
      case 'SOI':
        return <IconSecuritySOI width={size} height={size} />
      case 'Manpower CS':
        return <IconCleaningServiceManpower width={size} height={size} />
      case 'Penilaian CS':
        return <IconCleaningServiceRating width={size} height={size} />
      case 'Cleaning Service Guidance':
        return <IconCleaningServiceGuidance width={size} height={size} />
      // case 'Urgent Action':
      // 	return <IconUrgentAction width={size} height={size} />;
      // case 'Penggunaan BBM':
      // 	return <IconPenggunaanBBM width={size} height={size} />;
      // case 'Penggunaan Listrik':
      // 	return <IconPenggunaanListrik width={size} height={size} />;
      default:
        return null
    }
  }

  const handleLocationChange = (newLocation: string) => {
    setSelectedLocation(newLocation)
  }

  const handleProductChange = (newProduct: string) => {
    setSelectedProduct(newProduct)
  }

  useEffect(() => {
    const filteredNotifications = dataNotification.filter(notification => {
      const locationMatch =
        selectedLocation === '' || selectedLocation === 'all' || notification.location === selectedLocation
      const productMatch =
        selectedProduct === '' || selectedProduct === 'all' || notification.product === selectedProduct
      return locationMatch && productMatch
    })
    setNotificationsToDisplay(filteredNotifications)
  }, [selectedLocation, selectedProduct, dataNotification])

  return (
    <div className="bg-white">
      <Header prevLink="/" title="Notification" key={'header'} useLink={false} onBack={() => router.back()} />
      <div className="flex flex-row items-center mb-2 px-4 pt-16">
        <div className="w-[150px] mr-2">
          <FilterLocation onLocationChange={handleLocationChange} />
        </div>
        <div className="w-[150px]">
          <FilterProduk onProductChange={handleProductChange} />
        </div>
      </div>
      <div className="overflow-y-auto max-h-[calc(100vh-7rem)]">
        {notificationsToDisplay.length > 0 ? (
          notificationsToDisplay.map(notification => (
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
              <div className="dividers" />
            </div>
          ))
        ) : (
          <div className="border border-grey-300 text-center py-4 mx-4 rounded-xl">
            Tidak ada data yang dapat ditampilkan
          </div>
        )}
      </div>
    </div>
  )
}
