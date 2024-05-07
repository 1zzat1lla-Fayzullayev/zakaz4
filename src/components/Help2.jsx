import React from 'react'
import Images from '../assets/Images'
import Wrapper from '../layout/Wrapper'
import { motion } from 'framer-motion'

function Help2() {
	return (
		<Wrapper>
			<div className='font-Rubik mt-[200px]'>
				<div className='flex flex-col items-center justify-center gap-[30px] mx-[20px] md:mx-0'>
					<motion.h1
						className='text-[#0B132A] text-[35px] font-normal text-center w-[65%]'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Paper Writing Help — Real Opportunities to Receive Assistance
					</motion.h1>
					<motion.img
						src={Images.help2__component}
						alt='help'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					/>
					<motion.p
						className='text-[#4F5665] text-center'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						Sometimes it is not enough to find a native English speaker,
						because, in addition to his consent to do the work for you, it is
						necessary that he has the special erudition on the topic about which
						the text will be written. Obviously, not every person from the USA
						or Great Britain is able to write, for example, a nursing essay in
						accordance with the high requirements for undergraduates and
						graduate students. It is great that our service’s authors are
						professionals in their fields.
					</motion.p>
					<motion.img
						src={Images.line__blue}
						alt='blue line'
						className='w-[300px]'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
					/>
					<motion.p
						className='text-[#4F5665] text-center'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
					>
						Surely, you can find a lot of identical websites on the Internet but
						the main question is: How competent are their authors? Before using
						the services of copywriters and translators, you need to make sure
						of the quality of their work.
					</motion.p>
				</div>
			</div>
		</Wrapper>
	)
}

export default Help2
