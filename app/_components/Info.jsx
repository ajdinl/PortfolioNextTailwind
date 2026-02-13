import { highlightText } from './highlightText';

export default function Info({ infoData, personalData }) {
    const { fullName, description, git, website, email, linkedin, linkedinLink } = infoData;
    const { profile, languages, more, other, personalities, hobbies } = personalData;

    return (
        <div className='flex flex-col flex-start w-full md:max-w-[480px] lg:w-60'>
            <div className='flex flex-col flex-wrap justify-center text-center h-auto min-h-[10rem] bg-myblue rounded-2xl bg-gradient-to-tr from-myblue to-green-100 drop-shadow-md py-4 px-2'>
                <h1 className='text-mygraytwo lg:text-xl font-heboo font-extrabold bg-transparent drop-shadow mb-2'>{fullName}</h1>
                <p className='text-mygray bg-transparent text-base lg:text-sm drop-shadow'>{description}</p>
            </div>
            <div className='flex flex-col space-y-4'>
                <div className='flex flex-col p-6 pb-2 space-y-1.5'>
                    <div
                        className='text-mygreen font-bold drop-shadow-md
        dark:text-white mb-1'
                    >
                        How to reach me
                    </div>
                    <div className='font-bold dark:text-white drop-shadow-md'>LinkedIn:</div>
                    <a href={linkedinLink} target='_blank' rel='noopener noreferrer' className='dark:text-blue-100 text-mygray underline text-base lg:text-sm hover:text-myblue dark:hover:text-blue-400 overflow-hidden text-ellipsis w-fit'>
                        {linkedin}
                    </a>
                    <div className='font-bold dark:text-white drop-shadow-md'>GitHub:</div>
                    <a href={git} target='_blank' rel='noopener noreferrer' className='dark:text-green-100 text-mygray underline text-base lg:text-sm hover:text-mygreen dark:hover:text-green-400 overflow-hidden text-ellipsis w-fit'>
                        {git}
                    </a>
                    <div className='font-bold dark:text-white drop-shadow-md'>Website:</div>
                    <a href={website} target='_blank' rel='noopener noreferrer' className='dark:text-red-100 text-mygray underline text-base lg:text-sm hover:text-orange-400 dark:hover:text-orange-300 overflow-hidden text-ellipsis w-fit'>
                        {website}
                    </a>
                    <div className='font-bold dark:text-white drop-shadow-md'>Email:</div>
                    <a href={'mailto:' + email} className='dark:text-purple-100 text-mygray text-base lg:text-sm underline hover:text-purple-400 dark:hover:text-purple-300 overflow-hidden text-ellipsis w-fit'>
                        {email}
                    </a>
                </div>
                <div className='flex-col flex-start flex md:hidden'>
                    <div className='bg-white dark:bg-neutral-800 p-6 w-full rounded-2xl drop-shadow-md'>
                        <h2 className='text-mygreen dark:text-green-400 font-bold mb-2'>About me</h2>
                        <div className='text-mygray dark:text-gray-300 text-base lg:text-sm'>{highlightText(profile)}</div>
                    </div>
                </div>
                <div className='bg-white dark:bg-neutral-800 p-6 w-full rounded-2xl drop-shadow-md hidden md:block'>
                    <h2 className='text-mygreen dark:text-green-400 font-bold mb-2'>Skills</h2>
                    <div className='text-mygray dark:text-gray-300 text-base lg:text-sm'>
                        <div className='font-bold text-black dark:text-white'>Coding Languages:</div>
                        <div className='mb-1 mt-1'>{languages}</div>
                        <div className='font-bold text-black dark:text-white'>Frameworks:</div>
                        <div className='mb-1 mt-1'>{more}</div>
                        <div className='font-bold text-black dark:text-white'>Other:</div>
                        <div className='mt-1'>{other}</div>
                    </div>
                </div>
                <div className='bg-white dark:bg-neutral-800 p-6 rounded-2xl drop-shadow-md hidden md:block'>
                    <h2 className='text-mygreen dark:text-green-400 font-bold mb-2'>Qualities & Hobbies</h2>
                    <div className='text-mygray dark:text-gray-300 text-base lg:text-sm space-y-1'>
                        <div className='font-bold text-black dark:text-white'>Personalities:</div>
                        <div className='ml-4'>
                            <ul className='list-disc'>
                                {personalities.map((personality, index) => (
                                    <li key={index}>{personality}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='font-bold text-black dark:text-white'>Hobby:</div>
                        <div className='ml-4'>
                            <ul className='list-disc'>
                                {hobbies.map((hobby, index) => (
                                    <li key={index}>{hobby}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
