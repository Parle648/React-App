import React, { useState } from 'react';
import styles from './styles/moveTo.module.scss';
import arrow from '../../shared/assets/img/drop-down-arrow.png';
import { useDispatch, useSelector } from 'react-redux';
import moveTask from './api/moveTask';
import { setTasks } from '../../shared/lib/slices/Tasks';

const MoveTo = ({list_name, task_id, task_name}: {list_name: string, task_id: number, task_name: string}) => {
    const lists = useSelector((state: any) => state.Lists.value)

    const [visible, setVisible] = useState<boolean>(false);

    function toggleModal() {
        setVisible(!visible)
    }

    const dispatch = useDispatch();

    function movetask(event: any) {
        if (event.target.innerText !== list_name) {
            moveTask({
                task_id: task_id,
                new_list_name: event.target.innerText, 
                old_list_name: list_name, 
                list_id: event.target.dataset.id,
                task_name: task_name
            })
            .then((data) => dispatch(setTasks(data.tasks)));
        };
    }

    return (
        <div className={styles.block}>
            <h3 className={styles.toggleChoises} onClick={toggleModal}>
                Move To: <img className={styles.arrow} src={arrow} alt="arrow" />
            </h3>
            <ol className={`${styles.list} ${visible && styles.listVisible}`}>
                {lists.map((list: any) => {
                
                    return <li 
                                className={styles.listTitle} 
                                key={list.list_name}
                                data-id={list.id}
                                onClick={movetask} >{list.list_name}</li>
                })}
            </ol>
        </div>
    );
};

export default MoveTo;