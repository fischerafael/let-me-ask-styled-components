import { FormEvent } from 'react'

import { useAuth } from '../hooks/useAuth'
import { useQuestion } from '../hooks/useQuestion'

import { TemplateRoom } from '../components/templates/TemplateRoom'
import { PrivateRoomHeader } from '../components/organisms/PrivateRoomHeader'
import { PrivateRoomTitle } from '../components/organisms/PrivateRoomTitle'
import { PrivateRoomForm } from '../components/organisms/PrivateRoomForm'
import { PrivateRoomQuestions } from '../components/organisms/PrivateRoomQuestions'

export const PageRoom = ({ roomId }: { roomId: string }) => {
    const room = roomId
    const { user } = useAuth()
    const {
        newQuestion,
        setNewQuestion,
        sendQuestion,
        questions,
        title,
        likeQuestion,
        deleteQuestion
    } = useQuestion(room, user.id)

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        sendQuestion({ user, room, question: newQuestion })
    }

    return (
        <TemplateRoom
            header={<PrivateRoomHeader roomId={room} />}
            title={<PrivateRoomTitle questions={questions} title={title} />}
            form={
                <PrivateRoomForm
                    textAreaValue={newQuestion}
                    onTextAreaChange={(e: any) =>
                        setNewQuestion(e.target.value)
                    }
                    user={user}
                />
            }
            onSubmit={onSubmit}
            questions={
                <PrivateRoomQuestions
                    questions={questions}
                    onClickLike={likeQuestion}
                    onClickDelete={deleteQuestion}
                />
            }
        />
    )
}
