import Header from '@components/molecules/Header'

export const metadata = {
  title: 'SMP Status',
}

export default function SMPStatus() {
  return (
    <div className="h-full">
      <Header />
      <h1 className="text-4xl font-bold">SMP Status</h1>
    </div>
  )
}
