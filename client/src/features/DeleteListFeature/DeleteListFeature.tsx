import deleteIcon from '../../shared/assets/img/delete-icon.png';
import styles from './styles/deleteList.module.scss';
import deleteList from './api/deleteList';
import { useDispatch, useSelector } from 'react-redux';
import { setLists } from '../../shared/lib/slices/Lists';
import { useState } from 'react';

const DeleteListFeature = ({list_id, list_name}: {list_id: number, list_name: string}) => {
    const dispatch = useDispatch();
    const lists = useSelector((state: any) => state.Lists.value);

    function deleteListFunction() {
        deleteList({list_id, list_name})
        .then(() => dispatch(setLists(lists.filter((item: any) => item.id !== list_id))))
        .then(() => toggleModal())
    }

    const [visible, setVisible] = useState<boolean>(false)

    function toggleModal() {
        setVisible(!visible)
    }

    return (
        <>
            <button className={styles.block} onClick={toggleModal}>
                <img className={styles.basket} src={deleteIcon} alt="delete-icon" /> Delete
            </button>
            <div className={`${styles.modal} ${visible && styles.modalBlock}`}>
                <div className={styles.modalOpen}>
                    You really want to delete this list?
                    <button className={styles.deleteBtn} onClick={deleteListFunction}>delete</button>
                </div>
            </div>
        </>
    );
};

export default DeleteListFeature;