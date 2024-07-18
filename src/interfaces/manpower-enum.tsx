import { EnumClass } from './enums'

export enum ManpowerStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
}

export class ManpowerStatusClassEnum {
  public enums: EnumClass<ManpowerStatus>[] = [
    {
      id: ManpowerStatus.SUCCESS,
      text: 'Berhasil',
      desc: 'lorem ipsum',
      badgeClass: 'inline text-extra-small semibold-12 bg-[#D3FED7] text-[#4EC558] px-2 py-[1.5px] rounded',
    },
    {
      id: ManpowerStatus.FAILED,
      text: 'Tidak Berhasil',
      desc: 'lorem ipsum',
      badgeClass: 'inline text-extra-small semibold-12 bg-[#FCEBEE] text-[#FF4040] px-2 py-[1.5px] rounded',
    },
  ]

  public find(key: ManpowerStatus): EnumClass<ManpowerStatus> | undefined {
    return this.enums.find(val => val.id === key) || undefined
  }
}
