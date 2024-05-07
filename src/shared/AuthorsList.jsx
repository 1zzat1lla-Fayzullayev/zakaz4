import React from 'react'
import authors from '../arrays/AuthorsArr'

function AuthorsList() {
	return (
		<>
			<div className='flex flex-col md:flex-row justify-center items-center gap-5 font-Rubik'>
				{authors.map((item, key) => (
					<div className='transition ease-in border-[2px] border-[#DDD] hover:border-[#79BFFF] rounded-[10px] md:w-[400px] w-full h-[230px]'>
						<div key={key} className='mt-[30px] ml-[30px]'>
							<div className='flex items-center gap-[20px]'>
								<img src={item.img} alt='user' />
								<p className='text-[#0B132A] text-[18px] font-normal'>
									{item.name}
								</p>
							</div>
							<p className='mt-[20px] text-[#0B132A] text-[16px]'>
								{item.descreption}
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default AuthorsList
