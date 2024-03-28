import styles from './styles/taskCart.module.scss';
import calendar from '../../shared/assets/img/calendar.png';
import PriorityBlock from './UI/PriorityBlock/PriorityBlock';
import { MoveTo } from '../../features/MoveTo/MoveTo';
import { TaskCartProps } from './types/taskCartProps';
import ChangeModal from '../CgangeModal/ChangeModal';
import DeleteTaskFeature from '../../features/DeleteTaskFeature/DeleteListFeature';
import ChangeTaskInfo from '../../features/ChangeTaskInfo/ChangeTaskInfo';
import { useState } from 'react';

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
        <div className={styles.cart} onClick={toggleModal}>
            <ChangeModal>
                <DeleteTaskFeature task_id={id} task_name={name} />
                <ChangeTaskInfo id={id} name={name} deadline={deadline} descryption={description} priority={priority} />
            </ChangeModal>
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
            <div className={`${styles.modalContainer} ${visible && styles.visible}`}>
                <div className={styles.modalBlock}>
                    <button onClick={toggleModal}>X</button>
                    <h2 className={styles.taskName}>{name}</h2>
                    <p className={styles.description}>
                        {description}
                    </p>
                    <p className={styles.deadline}>
                        <img src={calendar} alt="calendar-icon" />
                        {date}
                    </p>
                    <PriorityBlock priority={priority} />
                </div>
            </div>
        </div>
    );
};

export default TaskCart;