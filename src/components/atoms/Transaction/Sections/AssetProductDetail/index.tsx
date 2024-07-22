'use client'

import './style.css'

export function AssetProductDetail() {
  return (
    <div className="bg-[#FFFFFF] rounded-md  p-3">
      <div className="flex items-center space-x-1 mb-6">
        <div className="flex-1 text-heading xs semibold-16">Detail Produk</div>
        <div className={`inline text-extra-small semibold-12 bg-[#D3FED7] text-[#4EC558] px-2 py-[1.5px] rounded`}>
          Selesai
        </div>
        {/* <div className={`inline text-extra-small semibold-12 bg-[#FCEBEE] text-[#FF4040] px-2 py-[1.5px] rounded`}>
          Tidak Berhasil
        </div> */}
      </div>

      <div>
        <div className="flex items-center">
          <div className="flex-1 text-paragraph semibold-14 text-[#0C0C0C]">Proyektor</div>
          <div className="flex-shrink-0">
            <div className="border border-[#0089CF] w-full text-extra-small regular-12 text-[#0089CF] py-1 px-5 rounded">
              2 items
            </div>
          </div>
        </div>
        <div className="text-paragraph regular-14 text-[#505050] mx-4 mt-2">
          <div className="grid grid-cols-3 mb-1">
            <div className="col-span-1">Epson</div>
            <div className="col-span-2">7 Items</div>
          </div>
          <div className="grid grid-cols-3 mb-1">
            <div className="col-span-1">Sony</div>
            <div className="col-span-2">7 Items</div>
          </div>
          <div className="grid grid-cols-3 mb-1">
            <div className="col-span-1">Panasonic</div>
            <div className="col-span-2">7 Items</div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <div className="flex items-center">
          <div className="flex-1 text-paragraph semibold-14 text-[#0C0C0C]">Kamera</div>
          <div className="flex-shrink-0">
            <div className="border border-[#0089CF] w-full text-extra-small regular-12 text-[#0089CF] py-1 px-5 rounded">
              2 items
            </div>
          </div>
        </div>
        <div className="text-paragraph regular-14 text-[#505050] mx-4 mt-2">
          <div className="grid grid-cols-3 mb-1">
            <div className="col-span-1">Epson</div>
            <div className="col-span-2">7 Items</div>
          </div>
          <div className="grid grid-cols-3 mb-1">
            <div className="col-span-1">Sony</div>
            <div className="col-span-2">7 Items</div>
          </div>
          <div className="grid grid-cols-3 mb-1">
            <div className="col-span-1">Panasonic</div>
            <div className="col-span-2">7 Items</div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <div className="flex items-center">
          <div className="flex-1 text-paragraph semibold-14 text-[#0C0C0C]">Kursi</div>
          <div className="flex-shrink-0">
            <div className="border border-[#0089CF] w-full text-extra-small regular-12 text-[#0089CF] py-1 px-5 rounded">
              2 items
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <div className="flex items-center">
          <div className="flex-1 text-paragraph semibold-14 text-[#0C0C0C]">Meja</div>
          <div className="flex-shrink-0">
            <div className="border border-[#0089CF] w-full text-extra-small regular-12 text-[#0089CF] py-1 px-5 rounded">
              2 items
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
