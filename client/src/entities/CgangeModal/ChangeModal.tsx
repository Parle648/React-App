import React, { useState } from 'react';
import styles from './styles/changeModal.module.scss';
import menu from '../../shared/assets/img/menu-vertical.png';

const ChangeModal = ({children}: {children: any}) => {
    const [visible, setVisible] = useState<boolean>(false)

    function toggleModal(event: any) {
        event.stopPropagation()
        setVisible(!visible)
    }

    return (
        <div className={styles.block}>
            <button className={styles.open} onClick={toggleModal}>
                <img className={styles.img} src={menu} alt="menu" />
            </button>
            <div className={`${styles.modal} ${visible && styles.modalActive}`}>
                {children}
            </div>
        </div>
    );
};

export default ChangeModal;