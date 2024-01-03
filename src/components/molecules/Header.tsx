import React, { useEffect } from 'react'
import Image from 'next/image'
import sunIcon from '../../../public/SunIcon.svg'
import moonIcon from '../../../public/MoonIcon.svg'

const Header = (props) => {

  return (
   <div className="flex flex-row justify-between text-blue-600 text-4xl">
      <div>NFCBOARD</div>
      <div onClick={props.toggleDarkMode}>
            <Image src={props.darkMode ? sunIcon : moonIcon} alt="dark mode toggle icon" width={32} height={32} />
      </div>
   </div>
  )
}


export default Header