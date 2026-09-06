"use client"

import SubmitButton from "@/components/SubmitButton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useState } from "react"


type Props = {
}

const UpsertPostForm = (props: Props) => {
    const [imageUrl, setImageUrl] = useState("")

    return (
        <form className="flex flex-col gap-5 [&>div>label]:text-slate-500 [&>div>input]:transition [&>div>textarea]:transition">
            <div>
                <Label htmlFor="title">Title</Label>
                <Input name="title" id="title" placeholder="Enter the title of your post" />
            </div>

            <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                    name="content"
                    id="content"
                    placeholder="Enter the content of your post"
                    rows={6}
                />
            </div>

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
                {!!imageUrl && (
                    <Image
                        src={imageUrl}
                        alt="Thumbnail Preview"
                        width={200}
                        height={150}
                    />
                )}
            </div>
            <div>
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input name="tags" id="tags" placeholder="Enter tags for your post" />
            </div>
            <div className="flex items-center gap-2">
                <Label htmlFor="published">Published Now</Label>
                <Input type="checkbox" className="mx-2 w-4 h-4" name="published" />
            </div>

            <SubmitButton>Save</SubmitButton>

        </form>
    )
}

export default UpsertPostForm