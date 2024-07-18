import { EnumClass } from "./enums";

export enum AssetStatus {
    RETURN = 'return',
    SUCCESS = 'success',
    DONE = 'done',
    FAILED = 'failed'
}

export class AssetStatusClassEnum {
    public enums: EnumClass<AssetStatus>[] = [
        {
            id: AssetStatus.RETURN,
            text: 'Pengembalian',
            desc: 'lorem ipsum',
            badgeClass : 'inline text-extra-small semibold-12 bg-[#FDF4E2] text-[#F19D38] px-2 py-[1.5px] rounded'
        },
        {
            id: AssetStatus.SUCCESS,
            text: 'Berhasil',
            desc: 'lorem ipsum',
            badgeClass : 'inline text-extra-small semibold-12 bg-[#D3FED7] text-[#4EC558] px-2 py-[1.5px] rounded'
        },
        {
            id: AssetStatus.DONE,
            text: 'Selesai',
            desc: 'lorem ipsum',
            badgeClass : 'inline text-extra-small semibold-12 bg-[#D3FED7] text-[#4EC558] px-2 py-[1.5px] rounded'
        },
        {
            id: AssetStatus.FAILED,
            text: 'Tidak Berhasil',
            desc: 'lorem ipsum',
            badgeClass : 'inline text-extra-small semibold-12 bg-[#FCEBEE] text-[#FF40404] px-2 py-[1.5px] rounded'
        },
    ]

    public find(key: AssetStatus): EnumClass<AssetStatus> | undefined {
        return this.enums.find(val => val.id === key) ?? undefined
    }
}