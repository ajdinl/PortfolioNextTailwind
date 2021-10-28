import Image from 'next/image'

const selfie = () => {
	return (
		<div>
			<Image
				src='/images/selfie.jpg'
				width='100px'
				height='100px'
				alt='myimage'
				className='rounded-full'
			/>
		</div>
	)
}

export default selfie
