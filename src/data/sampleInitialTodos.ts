
// Types:
interface Todo {
    id: number;
    title: string;
    author: string;
    urgency: 1 | 2 | 3 | 4 | 5;
    description?: string;
}

export const sampleTodos: Todo[] = [
    {
        id: 1,
        title: 'Imparare Typescript',
        author: 'Angelo',
        urgency: 5
    },
    {
        id: 2,
        title: 'Passeggiare',
        author: 'Angelo',
        urgency: 4,
        description: 'Ho davvero voglia di andare a passeggiare oggi'
    },
    {
        id: 3,
        title: 'Allenarsi',
        author: 'Angelo',
        urgency: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel est vel magna aliquet cursus et id sapien. Curabitur malesuada metus ac justo pharetra feugiat. Nam tempor dictum eros, non vehicula dolor vehicula sit amet. Etiam quis magna facilisis sem molestie mattis. Donec dapibus, justo lobortis gravida pretium, massa nisl malesuada dolor, laoreet consequat ligula nunc sed nisi. Suspendisse ipsum magna, tincidunt eget fermentum eu, pellentesque sed magna.'
    },
    {
        id: 4,
        title: 'Fare i compiti',
        author: 'Angelo',
        urgency: 2,
        description: 'Nullam euismod id mauris quis hendrerit. Suspendisse ut lacinia tellus. Curabitur malesuada maximus arcu lobortis iaculis. Suspendisse consequat urna ex, in feugiat turpis hendrerit non.'
    }
]

