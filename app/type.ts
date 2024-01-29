type IPost = {
    id: number,
    title: string
    slug: string
    author: string
    image: string
    des: string
    cmt: number,
    createAt: string
}

type ITodo = {
    userId: number,
    id: number
    title: string
    completed : boolean
}