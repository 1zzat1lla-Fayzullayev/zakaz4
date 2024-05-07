import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import toast from 'react-hot-toast'

function Modal({ isOpen, onClose }) {
	const [data, setData] = useState({
		username: '',
		Messanger: '',
	})

	const { username, Messanger } = data

	const handleChange = e => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async () => {
		try {
			const response = await axios.post(
				'https://api.telegram.org/bot6878357311:AAHPK8p7ZAXptDY6KEJl7KlqmJwN9sFIiXg/sendMessage',
				{
					chat_id: -1002060233106,
					text: `Hi, new order! \n\nName: ${username}\nMessanger: ${Messanger}\n`,
				}
			)
			if (response.status === 200) {
				toast.success('Message sent successfully!')
			} else {
				toast.error('Failed to send message. Please try again later.')
			}
			onClose() // Close the modal after successful submission
		} catch (error) {
			console.error('Error:', error)
			toast.error('An error occurred. Please try again later.')
		}
	}

	const handleCloseModal = e => {
		if (e.target.classList.contains('bg-gray-900')) {
			onClose()
		}
	}

	return (
		<>
			{isOpen && (
				<motion.div
					className='fixed z-[10000] top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50'
					onClick={handleCloseModal}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<motion.div
						className='bg-white rounded-lg p-8 md:w-[450px] w-full mx-[20px] md:mx-0'
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
								onChange={handleChange}
								value={username}
							/>
							<input
								type='text'
								name='Messanger'
								className='input input-info'
								placeholder='Messanger...'
								onChange={handleChange}
								value={Messanger}
							/>
						</div>
						<motion.button
							className='bg-[#2BC6F6] text-white w-full rounded-[10px] h-[40px] mt-[30px]'
							whileHover={{ scale: 1.1 }}
							onClick={handleSubmit}
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
