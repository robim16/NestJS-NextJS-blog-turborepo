"use client"

import DOMPurify from "dompurify"

type Props = {
    content: string
    className?: string
}

const SanitizedContent = (props: Props) => {
    const cleanHtml = DOMPurify.sanitize("<script></script>" + props.content)

    return (
        <div dangerouslySetInnerHTML={{ __html: cleanHtml }}></div>
    )
}

export default SanitizedContent