import styles from './styles/addCartBtn.module.scss';

const AddCartBtn = () => {
    return (
        <button className={styles.btn}>
            + Add new Task
        </button>
    );
};

export default AddCartBtn;