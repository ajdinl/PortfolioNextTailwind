import user from '../../data/user.json'

const Career = () => {
	const { employer1, employer2 } = user.career
	const { college, highSchool } = user.education

	return (
		<div className='flex flex-col pt-2'>
			<div className='bg-white p-6 w-64 h-auto rounded-2xl sm:mt-24 -mt-8'>
				<div className='text-mygreen font-bold bg-transparent mb-4'>
					Career Summary
				</div>
				<div className='text-mygrey text-md bg-transparent'>
					<div className='text-mygrey text-sm bg-transparent'>
						<div className='bg-transparent font-bold text-black mb-1'>
							{employer1.headline}
						</div>
						<div className='mb-2'>
							<div className='bg-white text-black'>{employer1.employer}</div>
							<div className='bg-white text-black'>{employer1.period}</div>
						</div>
						<div className='ml-4 bg-white'>
							<ul className='list-disc mb-4'>
								{employer1.obligations.map((obligation, index) => (
									<li className='bg-white' key={index}>
										{obligation}
									</li>
								))}
							</ul>
						</div>
						<div className='bg-transparent font-bold text-black mb-1 pb-2'>
							{employer2.headline}
						</div>
						<div className='mb-2'>
							<div className='bg-white text-black'>{employer2.employer}</div>
							<div className='bg-white text-black'>{employer2.period}</div>
						</div>
						<div className='ml-4 bg-white'>
							<ul className='list-disc mb-4'>
								{employer2.obligations.map((obligation, index) => (
									<li className='bg-white' key={index}>
										{obligation}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white p-6 w-64 h-auto mt-8 rounded-2xl'>
				<div className='text-mygreen font-bold bg-transparent mb-4'>
					Education
				</div>
				<div className='text-mygrey text-sm bg-transparent'>
					<div className='bg-transparent font-bold text-black'>
						{college.headline}
					</div>
					<div className='bg-transparent mb-1 mt-1 text-black'>
						{college.period}
					</div>
					<div className='bg-transparent mb-3 text-black'>
						{college.profession}
					</div>
					<div className='bg-transparent font-bold text-black'>
						{highSchool.headline}
					</div>
					<div className='bg-transparent mb-1 mt-1 text-black'>
						{highSchool.period}
					</div>
					<div className='bg-transparent mb-3 pb-2 text-black'>
						{highSchool.profession}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Career
