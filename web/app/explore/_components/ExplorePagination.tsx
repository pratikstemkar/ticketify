import {
    Pagination,
    PaginationContent,
    // PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export function ExplorePagination(props: { currentPage: number }) {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href={
                            props.currentPage > 1
                                ? `/explore/movies?page=${
                                      props.currentPage - 1
                                  }`
                                : `#`
                        }
                    />
                </PaginationItem>
                {props.currentPage > 1 ? (
                    <PaginationItem>
                        <PaginationLink
                            href={`/explore/movies?page=${
                                props.currentPage - 1
                            }`}
                        >
                            {props.currentPage - 1}
                        </PaginationLink>
                    </PaginationItem>
                ) : null}
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        isActive
                    >
                        {props.currentPage}
                    </PaginationLink>
                </PaginationItem>
                {props.currentPage < 11 ? (
                    <PaginationItem>
                        <PaginationLink
                            href={`/explore/movies?page=${
                                props.currentPage + 1
                            }`}
                        >
                            {props.currentPage + 1}
                        </PaginationLink>
                    </PaginationItem>
                ) : null}
                {/* <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem> */}
                <PaginationItem>
                    <PaginationNext
                        href={
                            props.currentPage < 11
                                ? `/explore/movies?page=${
                                      props.currentPage + 1
                                  }`
                                : `#`
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
