import styles from './styles/list.module.scss';
import TaskCart from '../TaskCart/TaskCart';
import AddCartBtn from '../../features/AddCartBtn/AddCartBtn';
import { useSelector } from 'react-redux';

const List = ({id, name}: {id: number, name: string}) => {
    const tasks = useSelector((state: any) => state.Tasks.value)

    return (
        <div className={styles.block}>
            <h2 className={styles.listHeader}>{name}: 45</h2>
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