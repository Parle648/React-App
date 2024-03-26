import React from 'react';
import styles from './styles/taskCart.module.scss';
import calendar from '../../shared/assets/img/calendar.png';
import PriorityBlock from './UI/PriorityBlock/PriorityBlock';
import MoveTo from '../../features/MoveTo/MoveTo';

const TaskCart = ({priority}: {priority: string}) => {
    const date = new Date().toLocaleDateString();
    return (
        <div className={styles.cart}>
            <h2 className={styles.taskName}>Task name</h2>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                labore voluptatum, porro dolorem provident temporibus.
            </p>
            <p className={styles.deadline}>
                <img src={calendar} alt="calendar-icon" />
                {date}
            </p>
            <PriorityBlock priority={priority} />
            <MoveTo />
        </div>
    );
};

export default TaskCart;