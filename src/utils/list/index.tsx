import IconHome from '@assets/icons/IconHome'
import IconIncentive from '@assets/icons/IconIncentive'
import IconPerformance from '@assets/icons/IconPerformance'
import IconChart from '@assets/icons/IconChart'
import IconSMPStatus from '@assets/icons/IconSMPStatus'

const MENU_HEADER = [
  {
    id: 'Home-01',
    name: 'Home',
    href: '/',
    icon: 'IconHome',
    submenu: [],
  },
  {
    id: 'Performance-02',
    name: 'Performance',
    href: '/performance',
    icon: 'IconPerformance',
    submenu: [],
  },
  {
    id: 'Incentive-03',
    name: 'Incentive',
    href: '/incentive',
    icon: 'IconIncentive',
    submenu: [],
  },
  {
    id: 'Chart-04',
    name: 'Chart',
    href: '/chart',
    icon: 'IconChart',
    submenu: [],
  },
  {
    id: 'SMPStatus-05',
    name: 'SMP Status',
    href: '/smpstatus',
    icon: 'IconSMPStatus',
    submenu: [],
  },
]

const ICON_MENU = {
  IconHome: ({ color }: { color: string }) => <IconHome width={20} height={20} color={color} />,
  IconPerformance: ({ color }: { color: string }) => <IconPerformance width={20} height={20} color={color} />,
  IconIncentive: ({ color }: { color: string }) => <IconIncentive width={20} height={20} color={color} />,
  IconChart: ({ color }: { color: string }) => <IconChart width={20} height={20} color={color} />,
  IconSMPStatus: ({ color }: { color: string }) => <IconSMPStatus width={20} height={20} color={color} />,
}

export { MENU_HEADER, ICON_MENU }
