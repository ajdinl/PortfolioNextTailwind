import Head from 'next/head'
import Info from '../components/Info'
import Button from '../components/Button'
import Personal from '../components/Personal'
import Career from '../components/Career'

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Ajdin Lojic&apos;s Portfolio</title>
        <meta
          name='description'
          content='Ajdin Lojic Frontend Developer Portfolio React Next Ember'
        />
        <meta
          name='google-site-verification'
          content='I0bxza9FsmM34Q21YfY31hluNzPw6hJdo7t7rN1-um4'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Button />
      <div className='flex flex-row flex-wrap dark:bg-[#252525] pt-36 space-y-6 space-x-0 sm:space-x-6 justify-center min-h-screen bg-mybackground '>
        <Info infoData={data.info} />
        <Personal personalData={data.personal} />
        <Career careerData={data.career} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.FETCH_URL)
  const data = await res.json()
  return {
    props: { data },
  }
}
