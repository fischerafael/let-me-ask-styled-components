import { useRouter } from 'next/router'
import { PageRoom } from '../../../src/pages/Room'

const index = () => {
    const { query } = useRouter()
    const { id } = query

    return <PageRoom roomId={id as string} />
}

export default index
