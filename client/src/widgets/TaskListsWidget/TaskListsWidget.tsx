import { useEffect } from 'react';
import List from '../../entities/List/List';
import { setLists } from '../../shared/lib/slices/Lists';
import getLists from '../../shared/api/getLists';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/taskLists.module.scss';

const TaskListsWidget = () => {
    const lists = useSelector((state: any) => state.Lists.value)

    const dispatch = useDispatch();
  
    useEffect(() => {
      getLists()
      .then((data: any) => dispatch(setLists(data)))
    }, [])
    
    return (
        <div className={styles.block}>
            {lists.map((list: any) => <List name={list.list_name} />)}
        </div>
    );
};

export default TaskListsWidget;
