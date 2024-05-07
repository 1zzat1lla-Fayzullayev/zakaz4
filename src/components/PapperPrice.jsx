import React from 'react'
import Wrapper from '../layout/Wrapper'
import PapperPriceList from '../shared/PapperPriceList'
import { motion } from 'framer-motion'

function PapperPrice() {
	return (
		<Wrapper>
			<motion.div
				className='font-Rubik mt-[150px]'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className='flex flex-col justify-center items-center mx-[20px] md:mx-0'>
					<motion.h1
						className='text-[#0B132A] text-[35px] font-normal text-center w-[60%]'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Professional Paper Writing at an Affordable Price
					</motion.h1>
					<motion.p
						className='text-[#4F5665] mt-[30px] text-center'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						It's hard to imagine a psychology essay without an abundance of
						specific terminology, isn't it? It means that translation requires a
						special treatment. And there are plenty of such cases when the help
						of specialists is needed. Our service is ready to help you write a
						high-quality article that meets the strict requirements of the
						university. How to make paragraphs in English correctly? What is the
						best way to prioritize the text? — relax and leave all these
						questions to professionals in writing such materials. You must admit
						that it's way better than losing a lot of time constantly redoing
						your business essay or something else because you have incorrectly
						drawn up the doc.
					</motion.p>
				</div>
				<PapperPriceList />
				<motion.p
					className='text-[#4F5665] mt-[75px] text-center mx-[20px] md:mx-0'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					The quality of the final result depends on how well your helper
					understands the topic, how well he is knowledgeable about all the
					subtleties of writing the text. If he is like a duck to water in this
					path, then you can hope that you will get excellent material. Nowadays
					all scientific researches, regardless of large or small volume, become
					a part of specialized publishing and translation in English is
					mandatory. Essay writing help timing could not have been better.
				</motion.p>
			</motion.div>
		</Wrapper>
	)
}

export default PapperPrice
