// import Menu from '@components/molecules/Menu'
import Navigation from '@components/molecules/Navigation'

export default function Container({ children }: { readonly children: React.ReactNode }) {
  return (
    <section className="bg-[#FFFFFF] h-screen">
      <div className="flex flex-row justify-center h-screen w-full overflow-x-hidden">
        <div className="flex-1 max-container shadow-[0px_-5px_1px_1px_rgba(0,0,0,0.1)]">{children}</div>
        {/* <Menu /> */}
      </div>
      <Navigation />
    </section>
  )
}
