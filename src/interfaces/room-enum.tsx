import { EnumClass } from "./enums";

export enum RoomStatus {
    SUCCESS = 'success',
    FAILED = 'failed'
}

export class RoomStatusClassEnum {
    public enums: EnumClass<RoomStatus>[] = [
        
        {
            id: RoomStatus.SUCCESS,
            text: 'Berhasil',
            desc: 'lorem ipsum',
            badgeClass : 'inline text-extra-small semibold-12 bg-[#D3FED7] text-[#4EC558] px-2 py-[1.5px] rounded'
        },
      
        {
            id: RoomStatus.FAILED,
            text: 'Tidak Berhasil',
            desc: 'lorem ipsum',
            badgeClass : 'inline text-extra-small semibold-12 bg-[#FCEBEE] text-[#FF40404] px-2 py-[1.5px] rounded'
        },
    ]

    public find(key: RoomStatus): EnumClass<RoomStatus> | undefined {
        return this.enums.find(val => val.id === key) ?? undefined
    }
}