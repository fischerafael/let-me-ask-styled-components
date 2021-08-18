interface Props {
    roomId: string
}

export const PrivateRoomHeader = ({ roomId }: Props) => {
    return (
        <section className="max-w-screen-lg w-full flex justify-between items-center">
            <img src="/assets/logo.svg" alt="" className="w-28" />

            <section>
                <section></section>

                <section>
                    <p>Sala #{roomId}</p>
                </section>
            </section>
        </section>
    )
}
