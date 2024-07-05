import { BannerCarousel, Menu, ProfileHeader } from '@components/molecules/Home'

export default function Home() {
  return (
    <>
      <div className="mb-4 mt-3">
        <ProfileHeader></ProfileHeader>
      </div>
      <BannerCarousel></BannerCarousel>

      <Menu></Menu>
    </>
  )
}
