import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Subscription from './components/Subscription'
import Help from './components/Help'
import Help2 from './components/Help2'
import PapperPrice from './components/PapperPrice'
import Authors from './components/Authors'
import GetStart from './components/GetStart'
import Footer from './components/Footer'

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Subscription />
			<Help />
			<Help2 />
			<PapperPrice />
			<Authors />
			<div className='relative'>
				<GetStart />
				<Footer />
			</div>
		</>
	)
}

export default App
