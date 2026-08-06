import { Skeleton } from "@/components/ui/skeleton"

const CommentCardSkeleton = () => {
    return (
        <div>
            <div className="flex items-center gap-2">
                <Skeleton className="rounded-full w-12 h-12"></Skeleton>
            </div>
        </div>
    )
}

export default CommentCardSkeleton