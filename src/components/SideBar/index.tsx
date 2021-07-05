import {
    LayoutSideBar,
    Image,
    TextTitle,
    TextSubTitle
} from '../../../styles/components'

export const SideBar = () => {
    return (
        <LayoutSideBar>
            <Image
                src="/assets/illustration.png"
                alt="Ilustração de fundo"
                style={{ width: '14rem' }}
            />
            <TextTitle>Toda pergunta tem uma resposta.</TextTitle>
            <TextSubTitle>
                Aprenda e compartilhe conhecimento com outras pessoas
            </TextSubTitle>
        </LayoutSideBar>
    )
}
