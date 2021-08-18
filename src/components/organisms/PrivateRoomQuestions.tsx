import { ThumbUpIcon, TrashIcon } from '@heroicons/react/outline'
import { IQuestions } from '../../entities/IQuestions'
import { Question } from '../molecules'

interface Props {
    questions: IQuestions[]
    onClickLike: (questionId: string, likeId: string) => Promise<void>
    onClickDelete: (questionId: string) => Promise<void>
}

export const PrivateRoomQuestions = ({
    questions,
    onClickLike,
    onClickDelete
}: Props) => {
    return (
        <>
            {questions?.map((question) => (
                <Question
                    key={question.id}
                    content={question.content}
                    author={question.author}
                    isAnswered={question.isAnswered}
                    isHighlighted={question.isHighLighted}
                    action={
                        <section className="flex items-end gap-2 font-bold">
                            {question.likeCount > 0 && (
                                <span className="text-purple-500">
                                    {question.likeCount}
                                </span>
                            )}

                            <button
                                onClick={() =>
                                    onClickLike(question.id, question.likeId)
                                }
                            >
                                {question.likeCount > 0 ? (
                                    <ThumbUpIcon className="w-6 h-6 text-purple-500" />
                                ) : (
                                    <ThumbUpIcon className="w-6 h-6 text-purple-100" />
                                )}
                            </button>
                            <button onClick={() => onClickDelete(question.id)}>
                                <TrashIcon className="w-6 h-6 text-pink-500" />
                            </button>
                        </section>
                    }
                />
            ))}
        </>
    )
}
