import Header from '@components/molecules/Header'

export const metadata = {
  title: 'Profile',
}

export default function Profile() {
  return (
    <div className="h-full">
      <Header />
      <h1 className="text-4xl font-bold">Profile</h1>
    </div>
  )
}
