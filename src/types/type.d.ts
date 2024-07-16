type FormItem<T> = {
    type: string,
    content: T,
    placeholder: string,
    className? :string,
}

export type HeaderItem = {
    itemName: string;
    itemUrl: string;
}

export type TodoItem = {
    id?: string;
    title: string;
    description: string;
    createAt?: string;
    updateAt?: string;
    dueDate: string;
    createBy: string; //userId
    progress: Progress;
    genre: Genre;
    memos?: TodoMemo[];
    isShowDetails: boolean;
}

export type TodoMemo = {
    content: string;
    createAt: Date;
    createBy: string; //userId
    isEdited: boolean;
}

export type UserSetting = {
    userId: string;
    displayGenre: Genre[];
}

export type Progress = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100

export type Genre = 'Study' | 'Work' | 'Fitness'
