import { faker } from '@faker-js/faker'

import { TaskRepository } from '../../application/repositories/taskRepository'
import { Task } from '../../domain/entities/task'
import { OffsetPagination } from '../pagination/offsetPagination'

const database: Task[] = new Array(93).fill(0).map((_, i) => {
    return {
        id: i.toString(),
        title: faker.lorem.lines(1),
        description: faker.lorem.paragraph(),
        done: faker.datatype.boolean(),
        createdAt: faker.date.anytime(),
        updatedAt: faker.date.anytime(),
    }
})

export class FakerTaskRepository implements TaskRepository {
    constructor(
        private pagination?: OffsetPagination
    ){}

    async getList(): Promise<Task[]> {
        if(!this.pagination) {
            return database
        }

        const startIndex = (this.pagination.page - 1) * this.pagination.size
        const endIndex = startIndex + this.pagination.size
        this.pagination.total = database.length

        return database
            .slice(startIndex, endIndex)
    }
}