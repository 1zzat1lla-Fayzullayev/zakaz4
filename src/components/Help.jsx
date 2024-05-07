import React from 'react'
import Images from '../assets/Images'
import Wrapper from '../layout/Wrapper'
import { motion } from 'framer-motion'

function Help() {
	return (
		<Wrapper>
			<motion.div
				className='flex flex-col md:flex-row justify-center items-center font-Rubik gap-[50px] mt-[150px]'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<motion.img
					src={Images.help__component}
					alt='help'
					className='w-[320px] md:w-[420px]'
					whileHover={{ scale: 1.05 }}
				/>
				<motion.div
					className='mx-[20px] md:mx-0'
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<motion.h1 className='text-[#0B132A] text-[35px] font-medium text-center md:text-start'>
						English Essay Writing Help
					</motion.h1>
					<motion.p
						className='text-[#4F5665] mt-[29px] text-center md:text-start'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						Language skills are not only about authentic speaking. Usually
						students receive a written task like an essay or a letter and so on
						to prove their knowledge of English in writing. let's say everything
						is fine with your speech but there are some difficulties with paper
						— what should you do? Our service is going to solve your problem!
						Visit the website to receive help with the texts that are necessary
						for your graduation and employment, etc.
					</motion.p>
				</motion.div>
			</motion.div>
		</Wrapper>
	)
}

export default Help
