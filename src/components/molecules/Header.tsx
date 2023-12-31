import React from 'react'
import Image from 'next/image'
import sunIcon from '../../assets/SunIcon.svg'
import moonIcon from '../../assets/MoonIcon.svg'


// ToDO: Fix issue here -- possibly next.js doesn't allow dynamic rendering of src like this
// Can't get both moon and sun icon to render
const Header = props => {
  return (
   <div className="flex flex-row justify-between text-blue-600 text-4xl">
      <div>NFCBOARD</div>
      <div onClick={props.toggleDarkMode}>
         {!props.darkMode ? 
            <Image src={sunIcon} alt="dark mode toggle icon" width={32} height={32} />
            : 
            <Image src={moonIcon} alt="dark mode toggle icon" width={32} height={32} />
         }
      </div>
   </div>
  )
}


export default Header