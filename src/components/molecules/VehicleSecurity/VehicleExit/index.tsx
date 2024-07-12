'use client'

import BannerCar from '@assets/images/BannerCar.png'
import Header from '@components/atoms/Header'
import { ReasonInputArea } from '@components/atoms/ReasonInput'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import IconPlus from '@assets/icons/IconPlus'
import IconTime from '@assets/icons/IconTime'
import { VehicleSecurityExitForm } from '@interfaces/vehicle'
import { convertToBase64 } from '@utils/common'
import { useRef } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import './style.css'

export function VehicleExit() {
  const router = useRouter()

  const fuelInput = useRef<HTMLInputElement>(null)
  const frontsideInput = useRef<HTMLInputElement>(null)
  const backsideInput = useRef<HTMLInputElement>(null)
  const leftsideInput = useRef<HTMLInputElement>(null)
  const rightsideInput = useRef<HTMLInputElement>(null)

  const array = new Uint32Array(1)
  const fuelInputKey = useRef<string>(crypto.getRandomValues(array).toString())
  const frontsideInputKey = useRef<string>(crypto.getRandomValues(array).toString())
  const backsideInputKey = useRef<string>(crypto.getRandomValues(array).toString())
  const leftsideInputKey = useRef<string>(crypto.getRandomValues(array).toString())
  const rightsideInputKey = useRef<string>(crypto.getRandomValues(array).toString())

  const { handleSubmit, setValue, control } = useForm<VehicleSecurityExitForm>({
    defaultValues: {},
  })

  const fuelCondition = useWatch({
    control,
    name: 'fuelCondition',
  })

  const frontside = useWatch({
    control,
    name: 'frontside',
  })

  const backside = useWatch({
    control,
    name: 'backside',
  })

  const leftside = useWatch({
    control,
    name: 'leftside',
  })

  const rightside = useWatch({
    control,
    name: 'rightside',
  })

  const onSubmit = async () => {
    router.push('/booking-asset/vehicle/special-operational/process')
  }

  const onFuelInputClicked = () => {
    if (fuelInput.current) {
      fuelInput.current.click()
    }
  }

  const onFrontsideInputClicked = () => {
    if (frontsideInput.current) {
      frontsideInput.current.click()
    }
  }

  const onBacksideInputClicked = () => {
    if (backsideInput.current) {
      backsideInput.current.click()
    }
  }

  const onRightsideInputClicked = () => {
    if (rightsideInput.current) {
      rightsideInput.current.click()
    }
  }

  const onLeftsideInputClicked = () => {
    if (leftsideInput.current) {
      leftsideInput.current.click()
    }
  }

  const handleFetchFuelImage = async () => {
    if (fuelCondition) {
      const src = await convertToBase64(fuelCondition)
      if (src) {
        return (
          <div>
            <Image
              height={0}
              width={0}
              sizes="100"
              className="h-28 w-1/2 object-cover rounded-md"
              src={`data:image/png;base64, ${src}`}
              alt="Banner"
            ></Image>
          </div>
        )
      }
      return ''
    }
    return ''
  }

  const handleFetchFrontsideImage = async () => {
    if (frontside) {
      const src = await convertToBase64(frontside)
      if (src) {
        return (
          <div>
            <Image
              height={0}
              width={0}
              sizes="100"
              className="h-28 w-full object-cover rounded-md"
              src={`data:image/png;base64, ${src}`}
              alt="Banner Frontside"
            ></Image>
          </div>
        )
      }
      return ''
    }
    return ''
  }

  const handleFetchBacksideImage = async () => {
    if (frontside) {
      const src = await convertToBase64(frontside)
      if (src) {
        return (
          <div>
            <Image
              height={0}
              width={0}
              sizes="100"
              className="h-28 w-full object-cover rounded-md"
              src={`data:image/png;base64, ${src}`}
              alt="Banner Backside"
            ></Image>
          </div>
        )
      }
      return ''
    }
    return ''
  }

  const handleFetchRightsideImage = async () => {
    if (frontside) {
      const src = await convertToBase64(frontside)
      if (src) {
        return (
          <div>
            <Image
              height={0}
              width={0}
              sizes="100"
              className="h-28 w-full object-cover rounded-md"
              src={`data:image/png;base64, ${src}`}
              alt="Banner Rightside"
            ></Image>
          </div>
        )
      }
      return ''
    }
    return ''
  }

  const handleFetchLeftsideImage = async () => {
    if (frontside) {
      const src = await convertToBase64(frontside)
      if (src) {
        return (
          <div>
            <Image
              height={0}
              width={0}
              sizes="100"
              className="h-28 w-full object-cover rounded-md"
              src={`data:image/png;base64, ${src}`}
              alt="Banner Leftside"
            ></Image>
          </div>
        )
      }
      return ''
    }
    return ''
  }

  return (
    <>
      <Header
        prevLink="/booking-asset/vehicle-security/special-operational"
        title="Form Keluar Kendaraan Investaris"
        key={'header'}
      ></Header>
      <div className="px-6 pt-16 pb-40 h-screen overflow-y-auto bg-[#F6F6F6]">
        <div className="bg-[#FFFFFF] rounded-md p-3">
          <div>
            <div className="flex items-center space-x-1">
              <div className="flex-1 mt-1">
                <div className="text-paragraph semibold-14 mb-1">Vehicle</div>
                <div className="text-extra-small regular-12">14 Mei 2024</div>
              </div>
            </div>

            <hr className="my-3 border-b border-[#E6E5E6]" />

            <div className="flex space-x-3">
              <div>
                <Image
                  width={0}
                  height={0}
                  sizes="100"
                  className="object-cover w-[72px] h-[72px] rounded"
                  src={BannerCar.src}
                  alt="Banner 1"
                />
              </div>
              <div className="flex-1">
                <div className="text-paragraph semibold-14 tetx-[#0C0C0C] mb-1">Operational Khusus</div>
                <div className="text-extra-small regular-12 text-[#909090]">Toyota Innova Reborn 2022</div>
              </div>
            </div>
          </div>
        </div>

        <br />

        {/* Order Detail */}
        <div className="bg-[#FFFFFF] rounded-md  p-3">
          <div className="text-heading xs semibold-16 mb-4">Rincian Peminjaman</div>

          <div className="text-paragraph regular-14">
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Lokasi</span>
              <span className="text-[#0C0C0C]">ACC HO</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Dengan Driver</span>
              <span className="text-[#0C0C0C]">Ya</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Nomor Polisi</span>
              <span className="text-[#0C0C0C]">B1234ZXC</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Tanggal</span>
              <span className="text-[#0C0C0C]">23 Mei - 24 Mei 2024</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Jam</span>
              <span className="text-[#0C0C0C]">16:00 - 18:00</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Kapasitas</span>
              <span className="text-[#0C0C0C]">4 orang</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div>
              <div className="text-[#505050] mb-3">Keperluan</div>
              <ReasonInputArea
                disabled={true}
                showCounter={false}
                value={'Mengunjungi dealer untuk sosialisasi program baru'}
              ></ReasonInputArea>
            </div>
          </div>
        </div>

        <br />

        <div className="bg-[#FFFFFF] rounded-md p-3">
          <div className="text-heading xs semibold-16">Form Keluar Kendaraan</div>

          {/* Form */}

          <hr className="my-4 border-b border-[#E6E5E6]" />

          <div className="p-1">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-2">
                <div>
                  <div className="text-heading xs regular-16 mb-2">
                    Km Berangkat<span className="text-[#E15241]">*</span>
                  </div>
                  <div className="text-input h-[38px] mb-4 px-3 flex items-center justify-center space-x-3 border border-[#D5D5D5] rounded-lg">
                    <input
                      onChange={() => {}}
                      type="text"
                      placeholder="Isi km berangkat"
                      className="flex-1 text-paragraph regular-14 mt-1"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-heading xs regular-16 mb-2">
                    Nama Security<span className="text-[#E15241]">*</span>
                  </div>
                  <div className="text-input h-[38px] mb-4 px-3 flex items-center justify-center space-x-3 border border-[#D5D5D5] rounded-lg">
                    <input
                      onChange={() => {}}
                      type="text"
                      placeholder="Nama Security"
                      className="flex-1 text-paragraph regular-14 mt-1"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-heading xs regular-16 mb-2">
                    Jam Mobil Keluar<span className="text-[#E15241]">*</span>
                  </div>
                  <div className="text-input h-[40px] mb-4 px-3 flex items-center justify-center space-x-3 border border-[#D5D5D5] rounded-lg">
                    <IconTime width={20} height={20} color="#2C598D"></IconTime>
                    <input
                      onChange={() => {}}
                      type="text"
                      placeholder="Isi jam mobil keluar"
                      className="flex-1 text-paragraph regular-14 mt-1"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-heading xs regular-16 mb-2">
                    Kondisi Mobil Sebelum Keluar<span className="text-[#E15241]">*</span>
                  </div>
                  <div>
                    <ReasonInputArea
                      value={''}
                      max={200}
                      rows={3}
                      placeholder="Deskripsikan kondisi mobil"
                      onChangeInput={val => {
                        setValue('condition', val)
                      }}
                    ></ReasonInputArea>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-heading xs regular-16 mb-1">
                    Kondisi BBM<span className="text-[#E15241]">*</span>
                  </div>
                  <div className="text-paragraph regular-14 mb-2">Foto kondisi bbm</div>
                  <input
                    key={fuelInputKey.current}
                    ref={fuelInput}
                    id="fuelInput"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={e => {
                      if (e?.target.files?.length) {
                        setValue('fuelCondition', e?.target?.files[0])
                        fuelInputKey.current = crypto.getRandomValues(array).toString()
                      }
                    }}
                  />

                  {!fuelCondition && (
                    <button
                      type="button"
                      onClick={onFuelInputClicked}
                      className="border-2 border-[#4A90E2] border-dashed text-paragraph regular-14 flex items-center px-4 py-3 w-1/2 h-28 justify-center space-x-2 rounded"
                    >
                      <IconPlus width={24} height={24}></IconPlus>
                    </button>
                  )}

                  {fuelCondition && handleFetchFuelImage()}
                </div>

                <div className="mb-6">
                  <div className="text-heading xs regular-16 mb-1">
                    Upload foto 4 sisi mobil<span className="text-[#E15241]">*</span>
                  </div>
                  <div className="text-paragraph regular-14 mb-2">Foto bagian depan, belakang, kanan, kiri mobil</div>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Frontside */}
                    <div className="text-center">
                      <input
                        key={frontsideInputKey.current}
                        ref={frontsideInput}
                        id="frontsideInput"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={e => {
                          if (e?.target.files?.length) {
                            setValue('frontside', e?.target?.files[0])
                            frontsideInputKey.current = crypto.getRandomValues(array).toString()
                          }
                        }}
                      />

                      {!frontside && (
                        <button
                          type="button"
                          onClick={onFrontsideInputClicked}
                          className="border-2 border-[#4A90E2] border-dashed text-paragraph regular-14 flex items-center px-4 py-3 w-full h-28 justify-center space-x-2 rounded"
                        >
                          <IconPlus width={24} height={24}></IconPlus>
                        </button>
                      )}

                      {frontside && handleFetchFrontsideImage()}

                      <div className="mt-2 text-[#424242] text-paragraph regular-14">Tampak Depan</div>
                    </div>

                    {/* Backside */}
                    <div className="text-center">
                      <input
                        key={backsideInputKey.current}
                        ref={backsideInput}
                        id="backsideInput"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={e => {
                          if (e?.target.files?.length) {
                            setValue('backside', e?.target?.files[0])
                            backsideInputKey.current = crypto.getRandomValues(array).toString()
                          }
                        }}
                      />

                      {!backside && (
                        <button
                          type="button"
                          onClick={onBacksideInputClicked}
                          className="border-2 border-[#4A90E2] border-dashed text-paragraph regular-14 flex items-center px-4 py-3 w-full h-28 justify-center space-x-2 rounded"
                        >
                          <IconPlus width={24} height={24}></IconPlus>
                        </button>
                      )}

                      {backside && handleFetchBacksideImage()}

                      <div className="mt-2 text-[#424242] text-paragraph regular-14">Tampak Belakang</div>
                    </div>

                    {/* Rightside */}
                    <div className="text-center">
                      <input
                        key={rightsideInputKey.current}
                        ref={rightsideInput}
                        id="rightsideInput"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={e => {
                          if (e?.target.files?.length) {
                            setValue('rightside', e?.target?.files[0])
                            rightsideInputKey.current = crypto.getRandomValues(array).toString()
                          }
                        }}
                      />

                      {!rightside && (
                        <button
                          type="button"
                          onClick={onRightsideInputClicked}
                          className="border-2 border-[#4A90E2] border-dashed text-paragraph regular-14 flex items-center px-4 py-3 w-full h-28 justify-center space-x-2 rounded"
                        >
                          <IconPlus width={24} height={24}></IconPlus>
                        </button>
                      )}

                      {rightside && handleFetchRightsideImage()}

                      <div className="mt-2 text-[#424242] text-paragraph regular-14">Tampak Kanan</div>
                    </div>

                    {/* Leftside */}
                    <div className="text-center">
                      <input
                        key={leftsideInputKey.current}
                        ref={leftsideInput}
                        id="leftsideInput"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={e => {
                          if (e?.target.files?.length) {
                            setValue('leftside', e?.target?.files[0])
                            leftsideInputKey.current = crypto.getRandomValues(array).toString()
                          }
                        }}
                      />

                      {!leftside && (
                        <button
                          type="button"
                          onClick={onLeftsideInputClicked}
                          className="border-2 border-[#4A90E2] border-dashed text-paragraph regular-14 flex items-center px-4 py-3 w-full h-28 justify-center space-x-2 rounded"
                        >
                          <IconPlus width={24} height={24}></IconPlus>
                        </button>
                      )}

                      {leftside && handleFetchLeftsideImage()}

                      <div className="mt-2 text-[#424242] text-paragraph regular-14">Tampak Kiri</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-heading xs regular-16 mb-2">
                    Deskripsikan kondisi foto mobil<span className="text-[#E15241]">*</span>
                  </div>
                  <div>
                    <ReasonInputArea
                      value={''}
                      max={200}
                      rows={3}
                      placeholder="Deskripsikan kondisi foto mobil"
                      onChangeInput={val => {
                        setValue('condition', val)
                      }}
                    ></ReasonInputArea>
                  </div>
                </div>
              </div>

              {/* <button
                disabled={!fileForm}
                type="submit"
                className={`${
                  !fileForm ? 'bg-[#B1B1B1]' : 'submit-button'
                } h-11 w-full text-[#ffffff] py-2.5 text-paragraph semibold-14 rounded-lg`}
              >
                Booking Sekarang
              </button> */}
            </form>
          </div>
        </div>
      </div>

      <div className="fixed z-[101] bottom-0 right-0 left-0 bg-white pb-12 pt-4 px-4">
        <button
          type="submit"
          className={`${'submit-button'} h-12 w-full text-[#ffffff] py-2.5 text-paragraph semibold-14 rounded-lg`}
        >
          Booking Sekarang
        </button>
      </div>
    </>
  )
}
