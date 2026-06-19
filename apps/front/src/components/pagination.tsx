type Props = {
    totalPages: number
    currentPage: number
    pageNeighbors?: number
    className?: string
}

const Pagination = ({
    totalPages,
    currentPage,
    pageNeighbors = 2,
    className,
}: Props) => {
    return <div> Pagination</div>
}

export default Pagination