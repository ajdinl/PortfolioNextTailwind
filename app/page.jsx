import HomePage from '@components/HomePage'
import db from '@/db.json'

export default function Page() {
  return <HomePage data={db} />
}
