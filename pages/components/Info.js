import Image from 'next/image'
import user from '../../data/user.json'

const Info = () => {
	const {
		fullName,
		description,
		cell,
		git,
		website,
		email,
		linkedin,
		linkedinLink,
		address,
	} = user.info

	return (
		<div className='flex flex-col mt-0.5'>
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
				<div className='flex flex-row flex-wrap -mt-10 w-60 h-40 bg-myblue rounded-2xl mb-10 justift-center'>
					<div className='text-2xl font-heboo font-extrabold ml-14 pt-12 bg-transparent'>
						{fullName}
					</div>
					<div className='text-white bg-transparent text-sm ml-16 -mt-7'>
						{description}
					</div>
				</div>
			</div>
			<div className='flex flex-col space-y-2 ml-6'>
				<div className='text-myblue font-bold mb-6'> How to reach me: </div>
				<div className='font-bold'>Cell:</div>
				<div className='text-mygrey dark:text-blue-100 text-sm'>{cell}</div>
				<div className='font-bold'>Git:</div>
				<a
					href={git}
					target='_blank'
					rel='noopener noreferrer'
					className='text-mygrey dark:text-green-100 underline text-sm dark:hover:text-mygreen hover:text-mygreen'
				>
					{git}
				</a>
				<div className='font-bold'>Web:</div>
				<a
					href={website}
					target='_blank'
					rel='noopener noreferrer'
					className='text-mygrey dark:text-green-100 underline text-sm dark:hover:text-mygreen hover:text-mygreen'
				>
					{website}
				</a>
				<div className='font-bold'>Email:</div>
				<div className='text-mygrey dark:text-blue-100 text-sm underline dark:hover:text-yellow-600 hover:text-yellow-600'>
					<a href={'mailto:' + email}>{email}</a>
				</div>
				<div className='font-bold'>Linkedin:</div>
				<a
					href={linkedinLink}
					target='_blank'
					rel='noopener noreferrer'
					className='text-mygrey dark:text-blue-100 underline text-sm dark:hover:text-myblue hover:text-myblue'
				>
					{linkedin}
				</a>
				<div className='font-bold'>Country - City:</div>
				<div className='text-mygrey dark:text-blue-100 text-sm'>{address}</div>
			</div>
		</div>
	)
}

export default Info
