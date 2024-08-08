'use client';

import {
	VehicleBannerImage,
	VehicleBooking,
	VehicleDescription,
	VehicleInformation,
	VehicleTerms,
} from '@components/atoms/Vehicle';

import Link from 'next/link';
import { photos, vehicle } from './data';

import IconChevronLeft from '@assets/icons/IconChevronLeft';
import { useState } from 'react';

export function Detail() {
	const [acceptTerm, setAcceptTerm] = useState<boolean>(false);

	return (
		<>
			<div className='relative'>
				<VehicleBannerImage photos={photos} />

				<div className='fixed top-4 ml-4'>
					<Link
						href={'/booking-asset/vehicle/special-operational'}
						className='rounded-md bg-white w-8 h-8 flex items-center justify-center'
					>
						<IconChevronLeft />
					</Link>
				</div>

				<div className='px-6 pt-[290px] h-screen'>
					<VehicleDescription vehicle={vehicle} />
					<br />
					<VehicleInformation vehicle={vehicle} />
					<br />
					<VehicleTerms vehicle={vehicle} />
					<br />
					<label className='flex-1 flex items-center custom-checkbox text-paragraph regular-14'>
						<span className='text-[#252525]'>
							Saya menyetujui{' '}
							<span className='text-[#0089CF]'>
								syarat dan ketentuan
							</span>{' '}
							yang berlaku
						</span>
						<input
							type='checkbox'
							onChange={(e) => setAcceptTerm(e?.target?.checked)}
							defaultChecked={acceptTerm}
							name='checkmark'
						/>
						<span className='-mt-0.5 checkmark'></span>
					</label>
				</div>
			</div>
			<VehicleBooking acceptTerm={acceptTerm} />
		</>
	);
}
