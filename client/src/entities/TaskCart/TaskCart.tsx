import styles from './styles/taskCart.module.scss';
import calendar from '../../shared/assets/img/calendar.png';
import PriorityBlock from './UI/PriorityBlock/PriorityBlock';
import MoveTo from '../../features/MoveTo/MoveTo';
import { TaskCartProps } from './types/taskCartProps';

const TaskCart = ({
    priority, 
    name, 
    description, 
    deadline }: TaskCartProps) => {
    const date = new Date(deadline).toLocaleDateString();
    return (
        <div className={styles.cart}>
            <h2 className={styles.taskName}>{name}</h2>
            <p className={styles.description}>
                {description}
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