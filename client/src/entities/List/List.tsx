import styles from './styles/list.module.scss';
import TaskCart from '../TaskCart/TaskCart';
import AddCartBtn from '../../features/AddCartBtn/AddCartBtn';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const List = ({id, name}: {id: number, name: string}) => {
    const tasks = useSelector((state: any) => state.Tasks.value)
    const [tasksCount, setTasksCount] = useState<number>(0);

    useEffect(() => {
        setTasksCount(tasks.reduce((amount: number, task: any) => task.list_id === id ? amount + 1 : amount + 0, 0));
    }, [tasks])
    
    console.log(name, id, tasksCount)
    return (
        <div className={styles.block}>
            <h2 className={styles.listHeader}>{name}: {tasksCount}</h2>
            <AddCartBtn />
            <div className="">
                {!!tasks && tasks.map((task: any) => {
                    if (task.list_id === id) {
                        return <TaskCart 
                            key={task.id}
                            name={task.name}
                            description={task.description}
                            deadline={task.deadline}
                            priority={task.priority} />
                    }
                })}
            </div>
        </div>
    );
};

export default List;