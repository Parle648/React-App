import { UseFormRegister } from 'react-hook-form';
import { CreteTaskFields } from '../../types/taskFormFields';
import styles from './styles/inputs.module.scss';

export function NameInput ({register, errors}: {register: UseFormRegister<CreteTaskFields>, errors: any}) {
    return (
        <label>
            <h4 className={styles.title}>Add task name</h4>
            <input className={styles.input} type="text" {...register('name', {
                required: 'enter task name'
            })}/>
            {errors?.name && <h4 className={styles.error}>{errors.name.message}</h4>}
        </label>
    );
};

export function StatusInput ({register, errors}: {register: UseFormRegister<CreteTaskFields>, errors: any}) {
    return (
        <label>
            <h4 className={styles.title}>Add task status</h4>
            <input className={styles.input} type="text" {...register('status', {
                required: 'enter status'
            })}/>
            {errors?.status && <h4 className={styles.error}>{errors.status.message}</h4>}
        </label>
    );
};
export function DeadlineInput ({register, errors}: {register: UseFormRegister<CreteTaskFields>, errors: any}) {
    return (
        <label>
            <h4 className={styles.title}>Add task deadline</h4>
            <input className={styles.input} type="date" {...register('deadline', {
                required: 'enter deadline'
            })}/>
            {errors?.deadline && <h4 className={styles.error}>{errors.deadline.message}</h4>}
        </label>
    );
};
export function PriorityInput ({register, errors}: {register: UseFormRegister<CreteTaskFields>, errors: any}) {
    return (
        <label>
            <h4 className={styles.title}>Add task priority</h4>
            <select className={styles.input} {...register('priority', {
                required: 'enter priority'
            })}>
                <option value="low">low</option>
                <option value="middle">middle</option>
                <option value="top">top</option>
            </select>
            {errors?.priority && <h4 className={styles.error}>{errors.priority.message}</h4>}
        </label>
    );
};
export function DescriptionInput ({register, errors}: {register: UseFormRegister<CreteTaskFields>, errors: any}) {
    return (
        <label>
            <h4 className={styles.title}>Add task description</h4>
            <input className={styles.input} type="textarea" {...register('description', {
                required: 'enter description'
            })}/>
            {errors?.description && <h4 className={styles.error}>{errors.description.message}</h4>}
        </label> 
    );
};