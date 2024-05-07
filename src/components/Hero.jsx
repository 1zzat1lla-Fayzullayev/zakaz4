// Hero.js
import React, { useState } from 'react'
import Images from '../assets/Images'
import Wrapper from '../layout/Wrapper'
import { motion } from 'framer-motion'
import Modal from '../shared/Modal'

function Hero() {
	const [openModal, setOpenModal] = useState(false)

	const handleOpenModal = () => {
		setOpenModal(!openModal)
	}

	return (
		<Wrapper>
			<motion.div
				className='flex flex-col md:flex-row justify-center items-center font-Rubik gap-[40px] mt-[100px]'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className='max-w-[520px]'>
					<motion.h1
						className='text-[#0B132A] text-[40px] text-center md:text-start md:text-[50px] font-bold'
						whileHover={{ scale: 1.05 }}
					>
						English Essay Writing Help
					</motion.h1>
					<motion.p
						className='text-[#4F5665] mt-[15px] text-center md:text-start'
						whileHover={{ scale: 1.05 }}
					>
						Language skills are not only about authentic speaking. Usually
						students receive a written task like an essay or a letter and so on
						to prove their knowledge of English in writing.
					</motion.p>
					<motion.div
						className='flex justify-center md:justify-start'
						whileHover={{ scale: 1.05 }}
					>
						<button
							className='bg-[#2BC6F6] rounded-[10px] w-[200px] md:w-[250px] h-[60px] text-white mt-[37px] transition ease-in hover:shadow-lg hover:shadow-[#2BC6F6]'
							onClick={handleOpenModal}
						>
							Get started
						</button>
					</motion.div>
				</div>
				<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
					<img src={Images.hero1} alt='hero image' />
				</motion.div>
			</motion.div>
			<Modal isOpen={openModal} onClose={handleOpenModal} />
		</Wrapper>
	)
}

export default Hero
