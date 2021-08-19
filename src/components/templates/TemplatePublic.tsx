export const TemplatePublic = ({ sidebar, main }) => {
    return (
        <div className="w-screen h-screen grid grid-cols-1 sm:grid-cols-2 items-center justify-center">
            <aside className="bg-purple-500 h-full md:flex flex-col justify-center p-8 gap-4">
                {sidebar}
            </aside>

            <main className="bg-purple-50 h-full w-full flex flex-col items-center justify-center p-8 gap-4">
                {main}
            </main>
        </div>
    )
}
