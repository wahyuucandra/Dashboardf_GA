import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconChevronRight from '@assets/icons/IconChevronRight'
import { IPaginations } from '@interfaces/api'

export default function Pagination({
  pagination,
  onPrevClicked,
  onNextClicked,
}: {
  pagination?: IPaginations
  onPrevClicked?: () => void
  onNextClicked?: () => void
}) {
  return (
    <>
      {pagination && <div></div>}
      {onPrevClicked}
      {onNextClicked}

      <div className="flex items-center space-x-2">
        <button type="button">
          <IconChevronLeft color="#0089CF"></IconChevronLeft>
        </button>
        <span>001</span>
        <span>/</span>
        <span>010</span>
        <button type="button">
          <IconChevronRight color="#0089CF"></IconChevronRight>
        </button>
      </div>
    </>
  )
}
