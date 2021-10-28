const Personal = () => {
	return (
		<div className='flex flex-col pt-2'>
			<div className='bg-white p-6 w-64 h-60 sm:mt-24 mt-0 rounded-xl'>
				<div className='text-mygreen font-bold bg-transparent mb-4'>
					Personal Profile
				</div>
				<div className='text-mygrey text-md bg-transparent'>
					I am a web developer with robust problem-solving skills. Self-taught
					in React and Node js, with a desire for constant learning and problem-
					solving.
				</div>
			</div>
			<div className='bg-white p-6 w-64 h-auto mt-8 rounded-xl'>
				<div className='text-mygreen font-bold bg-transparent mb-4'>Skills</div>
				<div className='text-mygrey text-sm bg-transparent'>
					<div className='bg-transparent font-bold text-black'>
						Coding Languages:
					</div>
					<div className='bg-transparent mb-3 mt-1'>JavaScript, HTML/CSS</div>
					<div className='bg-transparent font-bold text-black'>More JS:</div>
					<div className='bg-transparent mb-3 mt-1'>
						React, React Router, Redux/Recoil, Node, Express, Mongoose(MongoDB)
					</div>
					<div className='bg-transparent font-bold text-black'>Other:</div>
					<div className='bg-transparent mb-3 mt-1'>
						Bootstrap, Tailwind CSS, Adobe Photoshop, Lightroom, Linux, Visual
						Studio
					</div>
				</div>
			</div>
			<div className='bg-white p-6 w-64 h-80 mt-8 rounded-xl mb-10'>
				<div className='text-mygreen font-bold bg-transparent mb-4'>
					About me
				</div>
				<div className='text-mygrey text-md bg-transparent'>
					<div className='text-mygrey text-sm bg-transparent'>
						<div className='bg-transparent font-bold text-black mb-1'>
							Personalities:
						</div>
						<div className='ml-4 bg-white'>
							<ul className='list-disc mb-4'>
								<li className='bg-white'>Accuracy</li>
								<li className='bg-white'>Creativity</li>
								<li className='bg-white'>Communication</li>
								<li className='bg-white'>Organization</li>
							</ul>
						</div>
						<div className='bg-transparent font-bold text-black mb-1'>
							Hobby:
						</div>
						<div className='ml-4 bg-white'>
							<ul className='list-disc mb-4'>
								<li className='bg-white'>CryptoCurrency</li>
								<li className='bg-white'>Motorcycling</li>
								<li className='bg-white'>Skiing</li>
								<li className='bg-white'>Photography</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Personal
