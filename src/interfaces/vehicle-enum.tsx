import { EnumClass } from "./enums";

export enum VehicleStatus {
    RETURN = 'return',
    SNEDING_DOCUMENTS = 'sending_documents',
    PENDING_APPROVAL = 'pending_approval',
    SUCCESS = 'success',
    FAILED = 'failed'
}

export class VehicleStatusClassEnum {
    public enums: EnumClass<VehicleStatus>[] = [
        {
            id: VehicleStatus.RETURN,
            text: 'Pengembalian',
            desc: 'lorem ipsum',
            badgeClass : 'inline text-extra-small semibold-12 bg-[#FDF4E2] text-[#F19D38] px-2 py-[1.5px] rounded'
        },
        {
            id: VehicleStatus.SNEDING_DOCUMENTS,
            text: 'Kirim Dokumen',
            desc: 'lorem ipsum',
            badgeClass : 'inline text-extra-small semibold-12 bg-[#FDF4E2] text-[#F19D38] px-2 py-[1.5px] rounded'
        },
        {
            id: VehicleStatus.PENDING_APPROVAL,
            text: 'Menunggu Approval',
            desc: 'lorem ipsum',
            badgeClass : 'inline text-extra-small semibold-12 bg-[#FDF4E2] text-[#F19D38] px-2 py-[1.5px] rounded'
        },
        {
            id: VehicleStatus.SUCCESS,
            text: 'Berhasil',
            desc: 'lorem ipsum',
            badgeClass : 'inline text-extra-small semibold-12 bg-[#D3FED7] text-[#4EC558] px-2 py-[1.5px] rounded'
        },
        {
            id: VehicleStatus.FAILED,
            text: 'Tidak Berhasil',
            desc: 'lorem ipsum',
            badgeClass : 'inline text-extra-small semibold-12 bg-[#FCEBEE] text-[#FF40404] px-2 py-[1.5px] rounded'
        },
    ]

    public find(key: VehicleStatus): EnumClass<VehicleStatus> | undefined {
        return this.enums.find(val => val.id === key) ?? undefined
    }
}