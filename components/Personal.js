import user from '../data/user.json'

const Personal = () => {
	const { profile, languages, more, other, personalities, hobbies } =
		user.personal

	return (
		<div className='flex flex-col pt-2'>
			<div className='bg-white p-6 w-64 h-60 sm:mt-24 mt-0 rounded-xl'>
				<div className='text-mygreen font-bold bg-transparent mb-4'>
					Personal Profile
				</div>
				<div className='text-mygrey text-md bg-transparent'>{profile}</div>
			</div>
			<div className='bg-white p-6 w-64 h-auto mt-8 rounded-xl'>
				<div className='text-mygreen font-bold bg-transparent mb-4'>Skills</div>
				<div className='text-mygrey text-sm bg-transparent'>
					<div className='bg-transparent font-bold text-black'>
						Coding Languages:
					</div>
					<div className='bg-transparent mb-3 mt-1'>{languages}</div>
					<div className='bg-transparent font-bold text-black'>More JS:</div>
					<div className='bg-transparent mb-3 mt-1'>{more}</div>
					<div className='bg-transparent font-bold text-black'>Other:</div>
					<div className='bg-transparent mb-3 mt-1'>{other}</div>
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
								{personalities.map((personality, index) => (
									<li className='bg-white' key={index}>
										{personality}
									</li>
								))}
							</ul>
						</div>
						<div className='bg-transparent font-bold text-black mb-1'>
							Hobby:
						</div>
						<div className='ml-4 bg-white'>
							<ul className='list-disc mb-4'>
								{hobbies.map((hobby, index) => (
									<li className='bg-white' key={index}>
										{hobby}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Personal
