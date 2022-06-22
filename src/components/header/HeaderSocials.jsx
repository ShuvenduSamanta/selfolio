import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://react-icons.github.io/react-icons/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://react-icons.github.io/react-icons/" target="_blank"><BsGithub/></a>
        <a href="https://react-icons.github.io/react-icons/" target="_blank"><HiMail/></a>
    </div>
  )
}

export default HeaderSocials