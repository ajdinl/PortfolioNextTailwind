import Image from 'next/image'

const Info = () => {
	return (
		<div className='flex flex-col'>
			<div>
				<div className='ml-10'>
					<Image
						className='rounded-full'
						src='/images/selfie.jpg'
						width={160}
						height={160}
						alt='myImage'
					/>
				</div>
				<div className='-mt-10 w-60 h-40 bg-myblue rounded-lg mb-10'>
					<div className='text-2xl font-heboo font-extrabold ml-14 pt-12 bg-transparent'>
						Ajdin Lojić
					</div>
					<div className='text-white bg-transparent text-sm ml-16'>
						Web developer
					</div>
				</div>
			</div>
			<div className='flex flex-col space-y-2 ml-6'>
				<div className='text-myblue font-bold mb-6'> How to reach me: </div>
				<div className='font-bold'>Cell:</div>
				<div className='text-mygrey text-sm'>+38761811375</div>
				<div className='font-bold'>Git:</div>
				<a
					href='https://github.com/ajdinl'
					target='_blank'
					rel='noopener noreferrer'
					className='text-mygrey underline text-sm hover:text-mygreen'
				>
					https://github.com/ajdinl
				</a>
				<div className='font-bold'>Linkedin:</div>
				<a
					href='https://www.linkedin.com/in/ajdin-lojic/'
					target='_blank'
					rel='noopener noreferrer'
					className='text-mygrey underline text-sm hover:text-myblue'
				>
					@ajdinlojic
				</a>
				<div className='font-bold'>Address:</div>
				<div className='text-mygrey text-sm'>Zagrebacka 55a, Sarajevo</div>
			</div>
		</div>
	)
}

export default Info
