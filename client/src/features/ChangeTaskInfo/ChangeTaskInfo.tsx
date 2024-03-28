import React, { useState } from 'react';
import styles from './styles/changeTaskInfo.module.scss';
import edit from '../../shared/assets/img/edit-icon.png';
import { useForm } from 'react-hook-form';
import changeTaskProperties from './api/changeTaskProps';
import { ChangeDeadlineForm, ChangeDescryptionForm, ChangeNameForm, ChangePriorityForm } from './UI/ChangePropsForms';

const ChangeTaskInfo = ({id, name, deadline, descryption, priority}: {
    id: number,
    name: string,
    deadline: Date | string,
    descryption: string,
    priority: string
}) => {
    const [visible, setVisible] = useState<boolean>(false);

    function toggleModal(event: any) {
        setVisible(!visible)
    }


    // function updateTask(data: any) {
    //     console.log(data);
        
    //     // changeTaskProperties({
    //     //     id: id,
    //     //     name: name,
    //     //     property_name: 'string',
    //     //     property_old: 'string',
    //     //     property_new: 'string'
    //     // })
    // }

    return (
        <>
            <button className={styles.open} onClick={toggleModal}>
                <img className={styles.editIcon} src={edit} alt="edit" />
                Edit
            </button>
            <div className={`${styles.modal} ${visible && styles.openedModal}`}>
                <div className={styles.changeForm}>
                    <button className={styles.close} onClick={toggleModal}>
                        X
                    </button>
                    <ChangeNameForm task_id={id} task_name={name} old_value={name} />
                    <ChangeDeadlineForm task_id={id} task_name={name} old_value={deadline} />
                    <ChangeDescryptionForm task_id={id} task_name={name} old_value={descryption} />
                    <ChangePriorityForm task_id={id} task_name={name} old_value={priority} />
                </div>
            </div>
        </>
    );
};

export default ChangeTaskInfo;