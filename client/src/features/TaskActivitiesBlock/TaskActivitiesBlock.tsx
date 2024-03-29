import { useEffect, useState } from 'react';
import styles from './styles/taskActivities.module.scss';
import getTaskActivities from './api/getTaskActivities';
import CreateTaskMessage from '../ShowActivitiesFeature/UI/CreateTaskMessage/CreateTaskMessage';
import MoveTaskMessage from '../ShowActivitiesFeature/UI/MovetaskMessage/MoveTaskMessage';
import ChangeTaskMessage from '../ShowActivitiesFeature/UI/ChangeTaskMessage/ChangeTaskMessage';
import DeleteTaskMessage from '../ShowActivitiesFeature/UI/DeleteTaskMessage/DeleteTaskMessage';
import { useSelector } from 'react-redux';

const TaskActivitiesBlock = ({id}: {id: number}) => {
    const [activities, setActivties] = useState([]);
    const tasks = useSelector((state: any) => state.Tasks.value);

    useEffect(() => {
        getTaskActivities(id)
        .then((data) => {
            console.log(data);
            setActivties(data)
        })
    }, [tasks])

    return (
        <div className={styles.block}>
                <div className={styles.header}>Task history</div>
               {activities.map(({from, to, activity_type, task_name, list_name}: {from: string, to: string, activity_type: string, task_name: string, list_name: string}) => {
                    switch (activity_type) {
                        case 'createTask':
                            return <CreateTaskMessage to={to} />
                        case 'movetask':
                            return <MoveTaskMessage task_name={task_name} from={from} to={to} />
                        case 'changeTask':
                            return <ChangeTaskMessage task_name={task_name} from={from} to={to} />
                        case 'deleteTask':
                            return <DeleteTaskMessage task_name={task_name} />
                        default:
                            break;
                    }
                })}
        </div>
    );
};

export default TaskActivitiesBlock;