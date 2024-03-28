export default function moveTask({
    task_id, new_list_name, old_list_name, list_id, task_name
}: {
    task_id: number,
    new_list_name: string, 
    old_list_name: string, 
    list_id: number,
    task_name: string
}) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch(`http://localhost:3001/tasks/${task_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    taskData: {
                        list_id: +list_id,
                    },
                    action: {
                        activity_type: 'moveTask', 
                        from: old_list_name, 
                        to: new_list_name, 
                        task_name: task_name,
                    }
                })
            }))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
}