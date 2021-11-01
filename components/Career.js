const Career = () => {
	return (
		<div className='flex flex-col pt-2'>
			<div className='bg-white p-6 w-64 h-auto rounded-xl sm:mt-24 mt-0'>
				<div className='text-mygreen font-bold bg-transparent mb-4'>
					Career Summary
				</div>
				<div className='text-mygrey text-md bg-transparent'>
					<div className='text-mygrey text-sm bg-transparent'>
						<div className='bg-transparent font-bold text-black mb-1'>
							Service Technician
						</div>
						<div className='mb-2'>
							<div className='bg-white text-black'>Xenon-forte d.o.o.</div>
							<div className='bg-white text-black'>Jan 2021 to Nov 2021</div>
						</div>
						<div className='ml-4 bg-white'>
							<ul className='list-disc mb-4'>
								<li className='bg-white'>
									Troubleshooting hardware and software
								</li>
								<li className='bg-white'>
									Printer and computer diagnostic and service
								</li>
								<li className='bg-white'>
									Installation and configuration of print / scan equipment,
									computers and more
								</li>
							</ul>
						</div>
						<div className='bg-transparent font-bold text-black mb-1 pb-2'>
							Administrative and technical assistant
						</div>
						<div className='mb-2'>
							<div className='bg-white text-black'>Accounting d.o.o.</div>
							<div className='bg-white text-black'>Jan 2015 to Dec 2020</div>
						</div>
						<div className='ml-4 bg-white'>
							<ul className='list-disc mb-4'>
								<li className='bg-white'>
									Coordinating and performing administrative tasks
								</li>
								<li className='bg-white'>
									Provide operational support to the team
								</li>
								<li className='bg-white'>
									Creating and posting documentation, keeping a budget and cash
									register table
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white p-6 w-64 h-auto mt-8 rounded-xl'>
				<div className='text-mygreen font-bold bg-transparent mb-4'>
					Education
				</div>
				<div className='text-mygrey text-sm bg-transparent'>
					<div className='bg-transparent font-bold text-black'>
						Faculty of Political Science, University of Sarajevo
					</div>
					<div className='bg-transparent mb-1 mt-1 text-black'>2012 - 2014</div>
					<div className='bg-transparent mb-3 text-black'>
						Bachelor of Business Communication.
					</div>
					<div className='bg-transparent font-bold text-black'>
						J.U. „Željeznički school centar“ Sarajevo and J.U. „Mješovita
						srednja škola“ Gračanica
					</div>
					<div className='bg-transparent mb-1 mt-1 text-black'>2003 - 2007</div>
					<div className='bg-transparent mb-3 pb-2 text-black'>
						Electrical technician.
					</div>
				</div>
			</div>
		</div>
	)
}

export default Career
