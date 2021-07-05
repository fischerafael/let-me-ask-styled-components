import { InputHTMLAttributes, ReactNode } from 'react'
import { InputWithIcon } from '../../../styles/components'

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    children: ReactNode
}

export const CustomInputWithIcon = ({
    children,
    label,
    ...props
}: ICustomInput) => {
    return (
        <InputWithIcon>
            <div>{children}</div>

            <section>
                <span>{label}</span>
                <input {...props} />
            </section>
        </InputWithIcon>
    )
}
