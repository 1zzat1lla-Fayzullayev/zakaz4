import React, { useState } from 'react'
import Wrapper from '../layout/Wrapper'
import { motion } from 'framer-motion'
import Modal from '../shared/Modal'

function GetStart() {
	const [openModal, setOpenModal] = useState(false)

	const handleOpenModal = () => {
		setOpenModal(!openModal)
	}
	return (
		<Wrapper>
			<motion.div
				className='absolute flex flex-col md:flex-row justify-between items-center font-Rubik font-normal mt-[300px] md:mt-[200px] bg-white shadow-xl p-[50px] rounded-[10px] max-w-[1140px] w-full md:top-[-73%] top-[-120%] md:mx-0'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<motion.div
					className='flex flex-col items-center md:items-start text-center md:text-start'
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<motion.h1 className='text-[#0B132A] text-[35px]'>
						Get started
					</motion.h1>
					<motion.p
						className='text-[#4F5665] text-[16px] mt-[20px]'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						Receive your essay quickly and efficiently!
					</motion.p>
				</motion.div>
				<motion.button
					className='bg-[#38B1F5] rounded-[10px] w-[250px] h-[60px] text-white mt-[20px] md:mt-0'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					onClick={handleOpenModal}
				>
					Get started
				</motion.button>
			</motion.div>
			<Modal isOpen={openModal} onClose={handleOpenModal} />
		</Wrapper>
	)
}

export default GetStart
