
export interface Todo {
    id: number;
    title: string;
    author: string;
    urgency: 1 | 2 | 3 | 4 | 5;
    description?: string;
}

