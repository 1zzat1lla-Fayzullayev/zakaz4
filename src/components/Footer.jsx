import React from 'react'
import { motion } from 'framer-motion'
import Images from '../assets/Images'

function Footer() {
	return (
		<>
			<div className='bg-[#F8F8F8] w-full h-[420px] z-[-1] font-Rubik flex flex-col md:flex-row justify-between items-center mt-[200px]'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='flex-col md:ml-[150px]'
				>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className='flex items-center gap-2 cursor-pointer mt-[100px] md:mt-0'
					>
						<motion.img
							src={Images.logo}
							alt='logo'
							whileHover={{ rotate: 360 }}
						/>
						<motion.h1
							className='text-[#0B132A] text-[20px] font-bold'
							whileHover={{ scale: 1.1 }}
						>
							English Essay Writing Help
						</motion.h1>
					</motion.div>


					{/* Hidden on laptop window */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className='flex flex-col items-center gap-4 md:mr-[150px] md:hidden mt-[40px]'
					>
						<h1 className='text-[#0B132A] font-normal text-[18px]'>
							Navigation
						</h1>
						<ul className='flex flex-col gap-4'>
							<li className='text-[#4F5665] text-[16px] cursor-pointer'>
								About
							</li>
							<li className='text-[#4F5665] text-[16px] cursor-pointer'>
								Pricing
							</li>
							<li className='text-[#4F5665] text-[16px] cursor-pointer'>
								Authors
							</li>
						</ul>
					</motion.div>
					{/* / Hidden on laptop window */}


					{/* Footer icons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.5 }}
						className='flex flex-col items-start'
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8, duration: 0.5 }}
							className='flex items-center mt-[60px] gap-2'
						>
							<img
								src={Images.facebook}
								alt='facebook'
								className='cursor-pointer'
							/>
							<img
								src={Images.twitter}
								alt='twitter'
								className='cursor-pointer'
							/>
							<img
								src={Images.instagram}
								alt='instagram'
								className='cursor-pointer'
							/>
						</motion.div>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1, duration: 0.5 }}
							className='text-[#AFB5C0] text-[16px] mt-[10px]'
						>
							©2024 English Essay Writing Help
						</motion.p>
					</motion.div>
					{/* Footer icons */}
				</motion.div>


				{/* Hidden on mobile window */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2, duration: 0.5 }}
					className='md:flex flex-col items-start gap-4 md:mr-[150px] hidden'
				>
					<motion.h1
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.4, duration: 0.5 }}
						className='text-[#0B132A] font-normal text-[18px]'
					>
						Navigation
					</motion.h1>
					<motion.ul
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.6, duration: 0.5 }}
						className='flex flex-col gap-4'
					>
						<li className='text-[#4F5665] text-[16px] cursor-pointer'>About</li>
						<li className='text-[#4F5665] text-[16px] cursor-pointer'>
							Pricing
						</li>
						<li className='text-[#4F5665] text-[16px] cursor-pointer'>
							Authors
						</li>
					</motion.ul>
				</motion.div>
				{/* / Hidden on mobile window */}
			</div>
		</>
	)
}

export default Footer
