import { useDispatch } from 'react-redux';
import changeTaskProperties from '../api/changeTaskProps';
import styles from './styles/changePropsForm.module.scss';

import { useForm } from "react-hook-form"
import { setTasks } from '../../../shared/lib/slices/Tasks';

export function ChangeNameForm({task_id, task_name, old_value}: {task_id: number, task_name: string, old_value: string}) {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<{name: string}>();

    const dispatch = useDispatch();

    function updateTaskName(data: {name: string}) {
        changeTaskProperties({
            id: task_id, 
            name: task_name, 
            property_old: old_value, 
            property_new: data.name, 
            property_name: 'name'
        })
        .then(responseData => dispatch(setTasks(responseData.tasks)));
    }

    return (
        <form onSubmit={handleSubmit(updateTaskName)}>
            <h2>Enter here new task name</h2>
            <label className={styles.changeInputBlock}>
                <input type="text" placeholder={task_name} {...register('name', {
                    required: true,
                })} />
                <input className={styles.sendBtn}  type="submit" value="Change name" />
            </label>
        </form>
    )
}

export function ChangeDeadlineForm({task_id, task_name, old_value}: {task_id: number, task_name: string, old_value: Date | string}) {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<{deadline: string}>();

    const dispatch = useDispatch();

    function updateTaskName(data: {deadline: string}) {
        changeTaskProperties({
            id: task_id, 
            name: task_name, 
            property_old: old_value, 
            property_new: new Date(data.deadline), 
            property_name: 'deadline'
        })
        .then(responseData => dispatch(setTasks(responseData.tasks)));
    }

    return (
        <form onSubmit={handleSubmit(updateTaskName)}>
            <h2>Enter here new task deadline</h2>
            <label className={styles.changeInputBlock}>
                <input type="date" {...register('deadline', {
                    required: true
                })} />
                <input className={styles.sendBtn}  type="submit" value="Change date" />
            </label>
        </form>
    )
}

export function ChangeDescryptionForm({task_id, task_name, old_value}: {task_id: number, task_name: string, old_value: string}) {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<{descryption: string}>();

    const dispatch = useDispatch();

    function updateTaskName(data: {descryption: string}) {
        changeTaskProperties({
            id: task_id, 
            name: task_name, 
            property_old: old_value, 
            property_new: data.descryption, 
            property_name: 'description'
        })
        .then(responseData => dispatch(setTasks(responseData.tasks)));
    }

    return (
        <form onSubmit={handleSubmit(updateTaskName)}>
            <h2>Enter here new task descryption</h2>
            <label className={styles.changeInputBlock}>
                <input type="text" {...register('descryption', {
                    required: true
                })} />
                <input className={styles.sendBtn}  type="submit" value="Change descryption" />
            </label>
        </form>
    )
}

export function ChangePriorityForm({task_id, task_name, old_value}: {task_id: number, task_name: string, old_value: string}) {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<{priority: string}>();

    const dispatch = useDispatch();

    function updateTaskName(data: {priority: string}) {
        if (data.priority !== old_value) {
            changeTaskProperties({
                id: task_id, 
                name: task_name, 
                property_old: old_value, 
                property_new: data.priority, 
                property_name: 'priority'
            })
            .then(responseData => dispatch(setTasks(responseData.tasks)));
        }
    }

    return (
        <form onSubmit={handleSubmit(updateTaskName)}>
            <h2>Chose here new priority for task</h2>
            <label className={styles.changeInputBlock}>
                <select {...register('priority', {
                    required: true
                })} > 
                    <option value="low">low</option>
                    <option value="middle">middle</option>
                    <option value="top">top</option>
                </select>
                <input className={styles.sendBtn} type="submit" value="Change priority" />
            </label>
        </form>
    )
}