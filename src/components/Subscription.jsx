import React from 'react'
import Images from '../assets/Images'
import Wrapper from '../layout/Wrapper'
import { motion } from 'framer-motion'

function Subscription() {
	return (
		<Wrapper>
			<motion.div
				className='flex flex-col gap-[50px] md:flex-row justify-around items-center font-Rubik mt-[100px] md:mt-[150px]'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<motion.div
					className='flex items-center gap-5'
					whileHover={{ scale: 1.05 }}
				>
					<div className='bg-[#D4FAFF] w-[60px] rounded-[70px] p-3'>
						<img src={Images.essays} alt='essays' className='w-[60px]' />
					</div>
					<div>
						<motion.h2 className='text-[#0B132A] text-[25px] font-bold'>
							260+
						</motion.h2>
						<motion.p className='text-[#4F5665] text-[20px]'>Essays</motion.p>
					</div>
				</motion.div>
				<motion.img
					src={Images.line}
					alt='line'
					className='hidden md:block'
					whileHover={{ scale: 1.05 }}
				/>
				<motion.div
					className='flex items-center gap-5'
					whileHover={{ scale: 1.05 }}
				>
					<div className='bg-[#D4FAFF] w-[60px] rounded-[70px] p-3'>
						<img src={Images.letters} alt='essays' className='w-[60px]' />
					</div>
					<div>
						<motion.h2 className='text-[#0B132A] text-[25px] font-bold'>
							520k
						</motion.h2>
						<motion.p className='text-[#4F5665] text-[20px]'>Letters</motion.p>
					</div>
				</motion.div>
				<motion.img
					src={Images.line}
					alt='line'
					className='hidden md:block'
					whileHover={{ scale: 1.05 }}
				/>
				<motion.div
					className='flex items-center gap-5 ml-[60px] md:ml-0'
					whileHover={{ scale: 1.05 }}
				>
					<div className='bg-[#D4FAFF] w-[60px] rounded-[70px] p-3'>
						<img src={Images.happyClients} alt='essays' className='w-[60px]' />
					</div>
					<div>
						<motion.h2 className='text-[#0B132A] text-[25px] font-bold'>
							100%
						</motion.h2>
						<motion.p className='text-[#4F5665] text-[20px]'>
							Happy clients
						</motion.p>
					</div>
				</motion.div>
			</motion.div>
		</Wrapper>
	)
}

export default Subscription
