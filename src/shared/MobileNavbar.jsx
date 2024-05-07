import React from 'react'
import { motion } from 'framer-motion'
import Images from '../assets/Images'

function MobileNavbar({handleShowNav}) {
	return (
		<div>
			<motion.ul
				className='flex flex-col justify-center items-center gap-[30px] text-[#4F5665]  top-0 left-0 right-0 bottom-0 m-auto bg-white z-[90] fixed'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -50 }}
				transition={{ duration: 0.3 }}
			>
				<img
					src={Images.close}
					alt='close'
					onClick={handleShowNav}
					className='w-[40px] fixed right-4 top-5'
				/>
				<li>
					<a href='#' className='transition ease-in hover:text-[#2BC6F6]'>
						About
					</a>
				</li>
				<li>
					<a href='#' className='transition ease-in hover:text-[#2BC6F6]'>
						Pricing
					</a>
				</li>
				<li>
					<a href='#' className='transition ease-in hover:text-[#2BC6F6]'>
						Authors
					</a>
				</li>
			</motion.ul>
		</div>
	)
}

export default MobileNavbar
