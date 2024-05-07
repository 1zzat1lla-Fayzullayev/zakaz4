import React, { useState } from 'react'
import Images from '../assets/Images'
import { AnimatePresence, motion } from 'framer-motion'
import Modal from '../shared/Modal'
import MobileNavbar from '../shared/MobileNavbar'

function Navbar() {
	const [showNav, setShowNav] = useState(false)
	const [openModal, setOpenModal] = useState(false)

	const handleShowNav = () => {
		setShowNav(!showNav)
		document.body.classList.toggle('overflow-hidden')
	}

	const handleOpenModal = () => {
		setOpenModal(!openModal)
	}

	return (
		<>
			<motion.div
				className='fixed top-0 z-[10] bg-white w-full flex md:justify-around items-center font-Rubik py-[20px] mx-[20px] md:mx-0'
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
						className='text-[#0B132A] font-bold md:text-[20px]'
						whileHover={{ scale: 1.1 }}
					>
						English Essay Writing Help
					</motion.h1>
				</motion.div>
				<AnimatePresence>
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
				</AnimatePresence>
				<motion.button
					className='text-[#2BC6F6] border border-[#2BC6F6] w-[154px] h-[45px] rounded-[50px] hidden md:block transition ease-in hover:bg-[#2BC6F6] hover:text-white hover:shadow-lg hover:shadow-[#2BC6F6]'
					whileHover={{ scale: 1.1 }}
					onClick={handleOpenModal}
				>
					Get started
				</motion.button>
				<motion.div
					className='flex md:hidden z-[1000] fixed right-2'
					whileHover={{ scale: 1.1 }}
				>
					<img
						src={Images.hamburger}
						alt='hamburger'
						onClick={handleShowNav}
						className='w-[40px]'
					/>
				</motion.div>
			</motion.div>
			<Modal isOpen={openModal} onClose={handleOpenModal} />

			{/* Mobile nav */}
			{showNav && <MobileNavbar handleShowNav={handleShowNav} />}
		</>
	)
}

export default Navbar
