import styles from './styles/taskCart.module.scss';
import calendar from '../../shared/assets/img/calendar.png';
import PriorityBlock from './UI/PriorityBlock/PriorityBlock';
import { MoveTo } from '../../features/MoveTo/MoveTo';
import { TaskCartProps } from './types/taskCartProps';
import ChangeModal from '../CgangeModal/ChangeModal';
import DeleteTaskFeature from '../../features/DeleteTaskFeature/DeleteListFeature';
import ChangeTaskInfo from '../../features/ChangeTaskInfo/ChangeTaskInfo';
import { useState } from 'react';
import TaskActivitiesBlock from '../../features/TaskActivitiesBlock/TaskActivitiesBlock';

const TaskCart = ({
    priority, 
    name, 
    description, 
    deadline,
    id,
    listName }: TaskCartProps) => {
    const date = new Date(deadline).toLocaleDateString();

    const [visible, setVisible] = useState<boolean>(false);

    function toggleModal() {
        setVisible(!visible)
    }

    return (
        <div className={styles.cartWrapper}>
            <div className={styles.cart} onClick={toggleModal}>
                <h2 className={styles.taskName}>{name}</h2>
                    <p className={styles.description}>
                        {description}
                    </p>
                    <p className={styles.deadline}>
                        <img src={calendar} alt="calendar-icon" />
                        {date}
                    </p>
                    <PriorityBlock priority={priority} />
                    <MoveTo list_name={listName} task_id={id} task_name={name} />
                </div>
            <div >
                <ChangeModal>
                    <DeleteTaskFeature task_id={id} task_name={name} />
                    <ChangeTaskInfo id={id} name={name} deadline={deadline} descryption={description} priority={priority} />
                </ChangeModal>
                <div className={`${styles.modalContainer} ${visible && styles.visible}`}>
                    <div className={styles.modalBlock}>
                       <div className={styles.inform}>
                            <div className={styles.informActivities}>
                                <button onClick={toggleModal}>X</button>
                                <ChangeTaskInfo id={id} name={name} deadline={deadline} descryption={description} priority={priority} />
                            </div>
                            <h2>Task name:</h2>
                            <h2 className={styles.taskName}>{name}</h2>
                            <h2>deadline:</h2> 
                            <p className={styles.deadline}>
                                <img src={calendar} alt="calendar-icon" />
                                {date}
                            </p>
                            <h2>priority</h2>
                            <PriorityBlock priority={priority} />
                            <h2>description: </h2>
                            <p className={styles.description}>
                                {description}
                            </p>
                       </div>
                       {visible && <TaskActivitiesBlock id={id} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCart;