import Link from 'next/link'
import { ReactNode } from 'react'

import { TextAnchor } from '../../../styles/components'

interface ICustomLink {
    children: ReactNode
    href: string
}

export const CustomLink = ({ children, href }: ICustomLink) => {
    return (
        <Link href={href}>
            <TextAnchor>{children}</TextAnchor>
        </Link>
    )
}
