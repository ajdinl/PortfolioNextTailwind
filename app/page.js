import Button from '@components/Button'
import Info from '@components/Info'
import Personal from '@components/Personal'
import Career from '@components/Career'

async function getData() {
  const res = await fetch(process.env.FETCH_URL)
  return res.json()
}

export default async function Page() {
  const data = await getData()

  return (
    <>
      <Button />
      <div className='flex flex-row flex-wrap dark:bg-[#252525] pt-36 space-y-6 space-x-0 sm:space-x-6 justify-center min-h-screen bg-mybackground '>
        <Info infoData={data.info} />
        <Personal personalData={data.personal} />
        <Career careerData={data.career} />
      </div>
    </>
  )
}
