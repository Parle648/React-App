import styles from './styles/addTasksForm.module.scss';
import { useForm } from 'react-hook-form';
import { CreteTaskFields } from '../../types/taskFormFields';
import createTaskRequest from '../../api/postTask';
import { useDispatch } from 'react-redux';
import { setTasks } from '../../../../shared/lib/slices/Tasks';
import { TaskFormProps } from '../../types/taskFormProps';
import { DeadlineInput, DescriptionInput, NameInput, PriorityInput, StatusInput } from '../Inputs/Inputs';

const AddTaskForm = ({visible, children, list_id}: TaskFormProps) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm<CreteTaskFields>();

    function createTask(data: CreteTaskFields) {
        createTaskRequest(data, list_id)
        .then((response) => {
            if (response.status === 200) {
                dispatch(setTasks(response.tasks))
            } else {
                alert('something went wrong make sure tat your data is correct')
            }
        })
        reset()
    }
    
    return (
        <form className={`${styles.form} ${visible && styles.visible}`} onSubmit={handleSubmit(createTask)}>
            {children}
            <NameInput register={register} errors={errors}/>
            <StatusInput register={register} errors={errors}/>
            <DeadlineInput register={register} errors={errors}/>
            <PriorityInput register={register} errors={errors}/>
            <DescriptionInput register={register} errors={errors}/>
            <button type="submit">+ Create</button>
        </form>
    );
};

export default AddTaskForm;