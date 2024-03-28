import styles from './styles/list.module.scss';
import TaskCart from '../TaskCart/TaskCart';
import AddTaskFeature from '../../features/AddTaskFeature/AddTaskFeature';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ChangeModal from '../CgangeModal/ChangeModal';
import DeleteListFeature from '../../features/DeleteListFeature/DeleteListFeature';

const List = ({id, name}: {id: number, name: string}) => {
    const tasks = useSelector((state: any) => state.Tasks.value)
    const [tasksCount, setTasksCount] = useState<number>(0);

    useEffect(() => {
        setTasksCount(tasks.reduce((amount: number, task: any) => task.list_id === id ? amount + 1 : amount + 0, 0));
    }, [tasks])
    
    return (
        <div className={styles.block}>
            <h2 className={styles.listHeader}>{name}: {tasksCount} 
                <ChangeModal>
                    <DeleteListFeature list_id={id} list_name={name} />
                </ChangeModal></h2>
            <AddTaskFeature list_id={id} />
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