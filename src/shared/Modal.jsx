import React from 'react'
import { motion } from 'framer-motion'

function Modal({ isOpen, onClose }) {
	const handleCloseModal = e => {
		// Check if the click event occurred inside the modal content
		if (e.target.classList.contains('bg-gray-900')) {
			onClose()
		}
	}

	return (
		<>
			{isOpen && (
				<motion.div
					className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50'
					onClick={handleCloseModal}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<motion.div
						className='bg-white rounded-lg p-8'
						initial={{ y: -50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -50, opacity: 0 }}
					>
						<h2 className='text-[30px] text-center font-bold mb-4 text-[#0B132A]'>
							Form
						</h2>
						<div className='flex flex-col gap-3'>
							<input
								type='text'
								name='username'
								className='input input-info'
								placeholder='Your name'
							/>
							<input
								type='text'
								name='contact'
								className='input input-info'
								placeholder='+998'
							/>
						</div>
						<motion.button
							className='bg-[#2BC6F6] text-white w-full rounded-[10px] h-[40px] mt-[30px]'
							whileHover={{ scale: 1.1 }}
						>
							Submit
						</motion.button>
					</motion.div>
				</motion.div>
			)}
		</>
	)
}

export default Modal
