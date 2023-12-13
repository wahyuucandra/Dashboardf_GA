import Header from '@components/molecules/Header'
import Menu from '@components/molecules/Menu'

export default function Container({ children }: { readonly children: React.ReactNode }) {
  return (
    <section className="bg-secondary h-screen w-screen fixed">
      <Header />
      <div className="flex flex-row h-[92vh]">
        <Menu />
        <div className="px-5 py-5 flex-1">{children}</div>
      </div>
    </section>
  )
}
