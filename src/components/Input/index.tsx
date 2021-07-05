import { InputHTMLAttributes } from 'react'
import { Input } from '../../../styles/components'

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export const CustomInput = ({ label, ...props }: ICustomInput) => {
    return (
        <Input>
            <span>{label}</span>
            <input {...props} />
        </Input>
    )
}
