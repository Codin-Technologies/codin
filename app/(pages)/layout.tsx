import SidebarNav from '@/components/navigation/sidebarNav'
import Header from '@/components/header'
import { ReactNode } from 'react'

const TMSLayout = ({children}: {children:ReactNode}) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-none w-64 bg-white shadow-lg">
        <SidebarNav />
      </div>
      <div className="flex-1 overflow-auto">
        <Header user={{name: "Moody", avatar: "https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151133887.jpg?t=st=1762602947~exp=1762606547~hmac=8cdcd490bf0ac80315488b720abda108a1f219a52c998d682b9334b1bd5478c4&w=2000"}} />
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  )
}

export default TMSLayout