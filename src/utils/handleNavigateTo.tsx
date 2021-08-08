import router from 'next/router'

export const handleNavigateTo = (url: string) => {
    router.push(url)
}
