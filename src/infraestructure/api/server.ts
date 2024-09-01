import express from 'express'

import { GetTaskListUseCase } from '../../application/usecases/getTaskListUseCase'
import { FakerTaskRepository } from '../database/fakerTaskRepository'
import { OffsetPagination } from '../pagination/offsetPagination'

const app = express()
const port = 3000

app.get('/tasks', async (request, response) => {
    const page = parseInt(request.query.page as string) || 1
    const size = parseInt(request.query.size as string) || 10

    const pagination = new OffsetPagination(page, size)
    const taskRepository = new FakerTaskRepository(pagination)
    const getListUseCase = new GetTaskListUseCase(taskRepository)

    const taskList = await getListUseCase.execute()

    const paginatedReponse = pagination.paginate(taskList)

    response.json(paginatedReponse)
})

app.listen(port, () => {
    console.log(`Listening in port: ${port}`)
})