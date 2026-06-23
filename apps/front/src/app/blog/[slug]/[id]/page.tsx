import { fetchPostById } from "@/lib/actions/postActions"

type Props = {
    params: {
        id: string
    }
}

const PostPage = async ({ params }: Props) => {
    const postId = (await params).id
    const post = await fetchPostById(+postId)

    return <main className="container">
        <h1>{post.id}</h1>
    </main>
}

export default PostPage