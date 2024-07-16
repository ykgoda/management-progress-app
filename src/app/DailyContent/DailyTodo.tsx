import {Genre, TodoItem, UserSetting} from '../../types/type'
import { useState, useEffect} from 'react'
import {DailyTodoItem} from '../../index'
import styled from 'styled-components'

const DailyTodo : React.FC = () => {
    const [todos, setTodos] = useState<TodoItem[]>(dummyTodoData)
    const [todoStudy, setTodoStudy] = useState<TodoItem[]>([])
    const [todoWork, setTodoWork] = useState<TodoItem[]>([])
    const [todoFitness, setTodoFitness] = useState<TodoItem[]>([])
    
    return (
        <SDailyTodo>

                <DailyTodoItem todos={todos} setTodo={setTodos}/>
            
           
        </SDailyTodo>
    )
}

export default DailyTodo

const userSetting : UserSetting = {
    userId:'123456',
    displayGenre: ['Study','Fitness'],
}

//Todo delete
const dummyTodoData: TodoItem[] = [
    {
        title: 'TOEIC勉強',
        description: 'TOEIC900点',
        createAt: '2023-07-12 22:17:00',
        dueDate: '2023-09-31',
        createBy: '123456',
        progress: 10,
        genre: 'Study',
        isShowDetails: false,
    },
    {
        title: '腕立て100回',
        description: '腕立てを100回する',
        createAt: '2023-07-12 22:57:00',
        dueDate: '2023-07-31',
        createBy: '123456',
        progress: 0,
        genre: 'Fitness',
        isShowDetails: false,
    },
    {
        title: 'youtubeに動画をupする',
        description: 'youtubeに動画を1本upする',
        createAt: '2023-07-12 21:32:00',
        dueDate: '2023-07-21',
        createBy: '123456',
        progress: 40,
        genre: 'Work',
        isShowDetails: false,
    },

]

const SDailyTodo = styled.div`
    padding: 48px 64px;
`
