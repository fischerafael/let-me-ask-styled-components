export const TemplatePublic = ({ sidebar, main }) => {
    return (
        <div className="w-screen grid grid-cols-2 items-center justify-center">
            {sidebar}
            {main}
        </div>
    )
}
