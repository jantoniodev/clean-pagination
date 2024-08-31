import { Task } from '../../domain/entities/task'

export interface TaskRepository {
    getList(): Promise<Task[]>
}