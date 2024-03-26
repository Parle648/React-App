import React from 'react';
import styles from './styles/list.module.scss';
import TaskCart from '../TaskCart/TaskCart';
import AddCartBtn from '../../features/AddCartBtn/AddCartBtn';

const List = () => {
    return (
        <div>
            <h2 className={styles.listHeader}>List name: 45</h2>
            <AddCartBtn />
            <div className="">
                <TaskCart priority='low' />
                <TaskCart priority='top' />
                <TaskCart priority='middle' />
                <TaskCart priority='low' />
                <TaskCart priority='asdas' />
            </div>
        </div>
    );
};

export default List;