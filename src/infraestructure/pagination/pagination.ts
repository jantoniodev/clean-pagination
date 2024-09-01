export interface Pagination {
    paginate<Response>(items: Response[]): any
}