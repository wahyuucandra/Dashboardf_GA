'use client'

import { Asset } from '@interfaces/asset'
import Image from 'next/image'

export function Item({
  asset,
  qty = 0,
  onButtonClick,
}: Readonly<{ asset: Asset; qty?: number; onButtonClick?: () => void }>) {
  return (
    <div className="flex space-x-3">
      <div className="flex-1">
        <div className="text-heading xs semibold-16 mb-1">{asset.name}</div>
        <div className="text-extra-small regular-12">{asset.desc}</div>
      </div>

      <div>
        <Image
          width={0}
          height={0}
          sizes="100"
          className="rounded w-24 h-24 mb-3"
          src={asset.banner}
          alt={`Banner${asset.id}`}
        ></Image>

        <button
          onClick={onButtonClick}
          className="border border-[#0089CF] w-full text-extra-small regular-12 text-[#0089CF] py-1 rounded"
        >
          {qty ? qty + ' items' : 'Add'}
        </button>
      </div>
    </div>
  )
}
