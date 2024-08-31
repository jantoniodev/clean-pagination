import { faker } from '@faker-js/faker'
import { TaskRepository } from '../../application/repositories/taskRepository'
import { Task } from '../../domain/entities/task'

const database: Task[] = new Array(100).fill(0).map(() => {
    return {
        id: faker.string.uuid().toString(),
        title: faker.lorem.lines(1),
        description: faker.lorem.paragraph(),
        done: faker.datatype.boolean(),
        createdAt: faker.date.anytime(),
        updatedAt: faker.date.anytime(),
    }
})

export class FakerTaskRepository implements TaskRepository {
    async getList(): Promise<Task[]> {
        return database
    }
}