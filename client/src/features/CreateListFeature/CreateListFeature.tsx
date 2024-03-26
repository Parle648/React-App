import React, { useState } from 'react';
import styles from './styles/createListFeature.module.scss';
import { useForm } from 'react-hook-form';

type CreateListFormFields = {
    name: string,
}

const CreateListFeature = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<CreateListFormFields>();

    function createListRequest(data: CreateListFormFields) {
        console.log(data);
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
            <form className={`${styles.createListForm} ${visible && styles.formVisible}`} onSubmit={handleSubmit(createListRequest)} >
               <div className={styles.formInnerContainer}>
                    <button className={styles.closeModal} onClick={toggleModal}>X</button>
                    <label className={`${styles.label} ${errors?.name && styles.invalidField}`}>
                        <h4 className={styles.listTitle}>Enter name for list</h4>
                        <input className={styles.input} type="text" {...register('name', {
                            required: "Enter list name",
                        })} />
                        {errors?.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
                    </label>
                    <button className={styles.submitBtn} type='submit'>send data</button>
               </div>
            </form>  
        </div>
    );
};

export default CreateListFeature;