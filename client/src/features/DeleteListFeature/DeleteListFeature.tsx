import deleteIcon from '../../shared/assets/img/delete-icon.png';
import styles from './styles/deleteList.module.scss';
import { useSelector } from 'react-redux';
import useToggle from '../../shared/lib/hooks/useToggle';
import deleteList from './helpers/deleteList';
import { useContext } from 'react';
import { ListContext } from '../../entities/List/context/listContext';

const DeleteListFeature = () => {
    const [visible, setVisible] = useToggle(false)
    const lists = useSelector((state: any) => state.Lists.value);
    const listContext = useContext(ListContext);

    function deleteListFunction() {
        deleteList(listContext.list_id, listContext.list_name, lists)
        .then(() => setVisible())
    }

    return (
        <>
            <button className={styles.block} onClick={() => setVisible()}>
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