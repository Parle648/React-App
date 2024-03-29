import deleteIcon from '../../shared/assets/img/delete-icon.png';
import styles from './styles/deleteList.module.scss';
import deleteList from './api/deleteTask';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setTasks } from '../../shared/lib/slices/Tasks';

const DeleteTaskFeature = ({task_id, task_name}: {task_id: number, task_name: string}) => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: any) => state.Tasks.value);

    function deleteListFunction() {
        deleteList({task_id, task_name})
        .then(() => dispatch(setTasks(tasks.filter((item: any) => item.id !== task_id))))
    }

    const [visible, setVisible] = useState<boolean>(false)

    function toggleModal(event: any) {
        event.stopPropagation()
        setVisible(!visible)
    }

    return (
        <>
            <button className={styles.block} onClick={toggleModal}>
                <img className={styles.basket} src={deleteIcon} alt="delete-icon" /> Delete
            </button>
            <div className={`${styles.modal} ${visible && styles.modalBlock}`}>
                <div className={styles.modalOpen}>
                    You really want to delete this task?
                    <button className={styles.deleteBtn} onClick={deleteListFunction}>delete</button>
                </div>
            </div>
        </>
    );
};

export default DeleteTaskFeature;