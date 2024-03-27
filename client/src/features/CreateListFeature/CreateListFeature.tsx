import React, { useState } from 'react';
import styles from './styles/createListFeature.module.scss';
import { useForm } from 'react-hook-form';
import { createListFormFields } from './types/createListFormProps';
import createListRequest from './api/createListRequest';
import { useDispatch, useSelector } from 'react-redux';
import { setLists } from '../../shared/lib/slices/Lists';

const CreateListFeature = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm<createListFormFields>();

    const dispatch = useDispatch();
    const lists = useSelector((state: any) => state.Lists.value)

    function createList(data: createListFormFields) {
        createListRequest(data)
        .then((data: any) => dispatch(setLists([...lists, {id: data.id, list_name: data.list_name}])))
        reset()
    }

    const [visible, setVisible] = useState(false);

    function toggleModal() {
        setVisible(!visible);
    }

    return (
        <div className={styles.block}>
            <button className={styles.openFormBtn} onClick={toggleModal}>
                Create List
            </button> 
            <form className={`${styles.createListForm} ${visible && styles.formVisible}`} onSubmit={handleSubmit(createList)} >
               <div className={styles.formInnerContainer}>
                    <button className={styles.closeModal} onClick={toggleModal}>X</button>
                    <label className={`${styles.label} ${errors?.list_name && styles.invalidField}`}>
                        <h4 className={styles.listTitle}>Enter name for list</h4>
                        <input className={styles.input} type="text" {...register('list_name', {
                            required: "Enter list name",
                        })} />
                        {errors?.list_name && <span className={styles.errorMessage}>{errors.list_name.message}</span>}
                    </label>
                    <button className={styles.submitBtn} type='submit'>send data</button>
               </div>
            </form>  
        </div>
    );
};

export default CreateListFeature;