import React, { useState } from 'react'
import Images from '../assets/Images'
import Hamburger from '../shared/ui/Hamburger'
import { AnimatePresence, motion } from 'framer-motion'

function Navbar() {
	const [showNav, setShowNav] = useState(false)

	const handleShowNav = () => {
		setShowNav(!showNav)
	}

	return (
		<>
			<motion.div
				className='flex justify-around items-center font-Rubik my-[40px] mx-[20px] md:mx-0'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -50 }}
				transition={{ duration: 0.5 }}
			>
				<motion.div
					className='flex items-center gap-[10px] cursor-pointer'
					whileHover={{ scale: 1.1 }}
				>
					<motion.img
						src={Images.logo}
						alt='logo'
						className='w-[52px]'
						whileHover={{ rotate: 360 }}
					/>
					<motion.h1
						className='text-[#0B132A] font-bold text-[20px]'
						whileHover={{ scale: 1.1 }}
					>
						English Essay Writing Help
					</motion.h1>
				</motion.div>
				<AnimatePresence>
					{!showNav ? (
						<ul className='hidden md:flex items-center gap-[30px] text-[#4F5665] mr-[200px]'>
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
						</ul>
					) : (
						<motion.ul
							className='flex flex-col justify-center items-center gap-[30px] text-[#4F5665] absolute top-0 left-0 right-0 bottom-0 m-auto bg-white'
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -50 }}
							transition={{ duration: 0.3 }}
						>
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
					)}
				</AnimatePresence>
				<motion.button
					className='text-[#2BC6F6] border border-[#2BC6F6] w-[154px] h-[45px] rounded-[50px] hidden md:block transition ease-in hover:bg-[#2BC6F6] hover:text-white hover:shadow-lg hover:shadow-[#2BC6F6]'
					whileHover={{ scale: 1.1 }}
				>
					Get started
				</motion.button>
				<motion.div className='flex md:hidden' whileHover={{ scale: 1.1 }}>
					<Hamburger handleShowNav={handleShowNav} />
				</motion.div>
			</motion.div>
		</>
	)
}

export default Navbar
