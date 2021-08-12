export const PageRoom = ({ roomId }: { roomId: string }) => {
    return (
        <div className="bg-purple-50 w-screen h-screen flex flex-col items-center">
            <header className="w-full border border-b h-1/6 flex justify-center">
                <section className="max-w-screen-lg w-full flex justify-between items-center">
                    <img src="/assets/logo.svg" alt="" className="w-28" />
                    <section>
                        <section></section>
                        <section>
                            <p>Sala #{roomId}</p>
                        </section>
                    </section>
                </section>
            </header>

            <main className="max-w-screen-lg w-full flex flex-col py-8">
                <section className="w-full">
                    <h2 className="font-bold text-xl">Sala React Q&A</h2>
                </section>
            </main>
        </div>
    )
}
