import React from 'react';
import styles from './styles/moveTo.module.scss';
import arrow from '../../shared/assets/img/drop-down-arrow.png';

const MoveTo = () => {
    return (
        <div className={styles.block}>
            <h3 className={styles.toggleChoises}>
                Move To: <img className={styles.arrow} src={arrow} alt="arrow" />
            </h3>
            <ol className={styles.list}>
                <li>List 1</li>
                <li>List 2</li>
                <li>List 3</li>
                <li>List 4</li>
            </ol>
        </div>
    );
};

export default MoveTo;