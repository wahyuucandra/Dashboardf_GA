// import Menu from '@components/molecules/Menu'
import Navigation from '@components/molecules/Navigation'

export default function Container({ children }: { readonly children: React.ReactNode }) {
  return (
    <section className="bg-[#FFFFFF] h-screen w-screen">
      <div className="flex flex-row h-[92vh]">
        {/* <Menu /> */}
        <div className="flex-1 ">{children}</div>
      </div>
      <Navigation />
    </section>
  )
}
