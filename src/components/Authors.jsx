import React from 'react'
import Wrapper from '../layout/Wrapper'
import AuthorsList from '../shared/AuthorsList'
import { motion } from 'framer-motion'

function Authors() {
	return (
		<Wrapper>
			<motion.div
				className='font-Rubik mt-[137px] mx-[20px] md:mx-0'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className='flex flex-col justify-center items-center text-center gap-[20px]'>
					<motion.h1
						className='text-[#0B132A] text-[35px] font-normal w-[60%]'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Who Are the Authors Who Will Take My Paper for Writing?
					</motion.h1>
					<motion.p
						className='text-[#4F5665]'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						The authors of our service are thoroughly selected specialists in
						particular fields meaning that your essay in history will be written
						by a historian. It is a pretty usual task to write a scientific
						paper for our authors marked with a degree and experienced
						copywriters. However, there is another difficulty to manage with —
						the uniqueness of the article.
					</motion.p>
				</div>
				<div className='mt-[50px]'>
					<AuthorsList />
				</div>
				<motion.p
					className='text-[#4F5665] text-[16px] text-center mt-[80px]'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					Each submitted material is necessarily checked for plagiarism,
					however, you can always order the urgent translation and essay in the
					particular segment of the site. If you want to bring some changes to
					the article or have several remarks, feel free to report them because
					our professionals will be happy to make the necessary edits to reach
					perfection. There are no obstacles on your way to receive support in
					English paper writing, all you have to do it’s to give it to pure
					masters.
				</motion.p>
			</motion.div>
		</Wrapper>
	)
}

export default Authors
