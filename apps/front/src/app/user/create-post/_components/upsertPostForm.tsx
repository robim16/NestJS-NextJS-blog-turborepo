"use client"

import SubmitButton from "@/components/SubmitButton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { PostFormState } from "@/lib/types/formState"
import Image from "next/image"
import { useEffect, useState } from "react"


type Props = {
    state: PostFormState,
    formAction: (payload: FormData) => void
}

const UpsertPostForm = ({ state, formAction }: Props) => {
    const [imageUrl, setImageUrl] = useState("")
    const { toast } = useToast()

    useEffect(() => {
        if (state?.message)
            toast({
                title: state?.ok ? "Success" : "Oops",
                description: state?.message,
            })
    }, [state])

    return (
        <form
            action={formAction}
            className="flex flex-col gap-5 [&>div>label]:text-slate-500 [&>div>input]:transition [&>div>textarea]:transition">
            <input type="hidden" name="postId" value={state?.data?.postId} />
            <div>
                <Label htmlFor="title">Title</Label>
                <Input name="title"
                    placeholder="Enter the title of your post"
                    defaultValue={state?.data?.title}
                />
            </div>
            {!!state?.errors?.title && (
                <p className="text-red-500 animate-shake">{state?.errors.title}</p>
            )}

            <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                    name="content"
                    id="content"
                    placeholder="Enter the content of your post"
                    rows={6}
                    defaultValue={state?.data?.title}
                />
            </div>
            {!!state?.errors?.content && (
                <p className="text-red-500 animate-shake">{state?.errors.content}</p>
            )}

            <div>
                <Label htmlFor="thumbnail">Thumbnail</Label>
                <Input
                    type="file"
                    name="thumbnail"
                    accept="image/*"
                    onChange={(e) => {
                        if (e.target.files)
                            setImageUrl(URL.createObjectURL(e.target.files[0]))
                    }}
                />
                {!!imageUrl && !!state?.data?.previousThumbnailUrl && (
                    <Image
                        src={(imageUrl || state?.data?.previousThumbnailUrl) ?? ""}
                        alt="Thumbnail Preview"
                        width={200}
                        height={150}
                    />
                )}
            </div>
            {!!state?.errors?.thumbnail && (
                <p className="text-red-500 animate-shake">{state?.errors.thumbnail}</p>
            )}

            <div>
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input name="tags"
                    placeholder="Enter tags for your post"
                    defaultValue={state?.data?.title}
                />
            </div>
            {!!state?.errors?.tags && (
                <p className="text-red-500 animate-shake">{state?.errors.tags}</p>
            )}

            <div className="flex items-center gap-2">
                <Label htmlFor="published">Published Now</Label>
                <Input type="checkbox" className="mx-2 w-4 h-4" name="published"
                    defaultChecked={state?.data?.published === "on" ? true : false} />
            </div>
            {!!state?.errors?.isPublished && (
                <p className="text-red-500 animate-shake">{state?.errors.isPublished}</p>
            )}

            <SubmitButton>Save</SubmitButton>

        </form>
    )
}

export default UpsertPostForm