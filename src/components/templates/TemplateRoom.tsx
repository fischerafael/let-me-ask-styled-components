import { FormEvent, ReactNode } from 'react'

interface Props {
    header: any
    title: any
    questions: any
    form?: any
    onSubmit?: (e: FormEvent) => void
}

export const TemplateRoom = ({
    header,
    title,
    questions,
    form,
    onSubmit
}: Props) => {
    return (
        <div className="bg-purple-50 w-screen h-screen flex flex-col items-center">
            <header className="w-full border border-b h-1/6 flex justify-center px-4">
                {header}
            </header>

            <main className="max-w-screen-lg w-full h-5/6 overflow-y-auto flex flex-col gap-8 py-8 px-4">
                <section className="w-full flex gap-4 items-center">
                    {title}
                </section>

                <form
                    onSubmit={onSubmit}
                    className="w-full flex flex-col gap-8 items-center"
                >
                    {form}
                </form>

                <section className="flex flex-col gap-4">{questions}</section>
            </main>
        </div>
    )
}
