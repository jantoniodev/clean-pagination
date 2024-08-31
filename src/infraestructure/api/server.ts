import express from 'express'

import { GetTaskListUseCase } from '../../application/usecases/getTaskListUseCase'
import { FakerTaskRepository } from '../database/fakerTaskRepository'

const app = express()
const port = 3000

app.get('/tasks', async (request, response) => {
    const taskRepository = new FakerTaskRepository()
    const getListUseCase = new GetTaskListUseCase(taskRepository)

    const taskList = await getListUseCase.execute()

    response.json(taskList)
})

app.listen(port, () => {
    console.log(`Listening in port: ${port}`)
})