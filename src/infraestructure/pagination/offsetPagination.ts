import { Pagination } from './pagination'

export interface OffsetPaginationResponse<T> {
    page: number,
    size: number,
    total?: number,
    items: T[],
}

export class OffsetPagination implements Pagination {
    public total?: number
    
    constructor(
        public page: number = 1,
        public size: number = 10,
    ) {}

    paginate<Response>(items: Response[]): OffsetPaginationResponse<Response> {
        return {
            page: this.page,
            size: this.size,
            ...(this.total ? { total: this.total } : {}),
            items
        }
    }
}