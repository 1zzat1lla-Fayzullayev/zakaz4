import React from 'react'
import priceList from '../arrays/PapperPriceArr'
import { motion } from 'framer-motion'

function PapperPriceList() {
	return (
		<div className='flex flex-col md:flex-row justify-center gap-[65px] items-center font-Rubik mt-[75px]'>
			{priceList.map((item, index) => (
				<motion.div
					key={index}
					className='mb-4'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: index * 0.2 }}
				>
					<motion.div
						className='border-[2px] border-[#DDD] transition ease-in hover:border-[#2BC6F6] flex flex-col items-center w-[300px] h-[full] rounded-[10px]'
						whileHover={{ scale: 1.05 }}
					>
						<h3 className='text-[#0B132A] text-[18px] font-normal mt-[57px]'>
							Standard
						</h3>
						<ul className='flex'>
							<li className='flex flex-col gap-4 mt-[30px]'>
								<motion.div
									className='flex items-center gap-4 text-[#4F5665]'
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.2 }}
								>
									<img src={item.img} alt='check' />
									{item.first_name}
								</motion.div>
								<motion.div
									className='flex items-center gap-4 text-[#4F5665]'
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.3 }}
								>
									<img src={item.img} alt='check' />
									{item.second_name}
								</motion.div>
								<motion.div
									className='flex items-center gap-4 text-[#4F5665]'
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.4 }}
								>
									<img src={item.img} alt='check' />
									{item.third_name}
								</motion.div>
								<motion.div
									className='flex items-center gap-4 text-[#4F5665]'
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.5 }}
								>
									<img src={item.img} alt='check' />
									{item.fourth_name}
								</motion.div>
							</li>
						</ul>
						<h1 className='text-center text-[#0B132A] text-[25px] font-semibold mt-[54px]'>
							{item.price}
						</h1>
						<motion.button
							className='border-[2px] text-[#2BC6F6] border-[#2BC6F6] rounded-[50px] w-[177px] h-[45px] mt-[20px] mb-[57px] transition ease-in hover:shadow-lg hover:shadow-[#2BC6F6] hover:bg-[#2BC6F6] hover:text-white'
							whileHover={{ scale: 1.05 }}
						>
							Select
						</motion.button>
					</motion.div>
				</motion.div>
			))}
		</div>
	)
}

export default PapperPriceList
