import { Task } from '../../domain/entities/task'
import { TaskRepository } from '../repositories/taskRepository'

export class GetTaskListUseCase {
    constructor(private taskRepository: TaskRepository) {}

    async execute(): Promise<Task[]> {
        return await this.taskRepository.getList()
    }
}