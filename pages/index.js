import Head from 'next/head'
import Career from './components/Career'
import Info from './components/Info'
import Personal from './components/Personal'

export default function Home() {
	return (
		<>
			<div className='flex flex-row flex-wrap dark:bg-[#252525] pt-36 space-y-6 space-x-0 sm:space-x-6 justify-center min-h-screen bg-mybackground'>
				<Head>
					<title>Ajdin Lojic's portfolio</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<Info />
				<Personal />
				<Career />
			</div>
		</>
	)
}
