import HomePage from './HomePage'

async function getData() {
  const res = await fetch(process.env.FETCH_URL)
  return res.json()
}

export default async function Page() {
  const data = await getData()

  return <HomePage data={data} />
}
