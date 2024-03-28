import React, { useState } from 'react';
import styles from './styles/changeList.module.scss';
import { useForm } from 'react-hook-form';
import renameListRequest from './api/renameListRequest';
import { useDispatch } from 'react-redux';
import { setLists } from '../../shared/lib/slices/Lists';
import plus from '../../shared/assets/img/plus.png';

const ChangeListNameFeature = ({id, list_name}: {id: number, list_name: string}) => {
    const [visible, setVisible] = useState<boolean>(false);

    function toggleModal() {
        setVisible(!visible)
    }

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm<{list_name: string}>()

    const dispatch = useDispatch();

    function renameList(data: any) {
        console.log(data);
        renameListRequest({id: id, old_name: list_name, list_name: data.list_name})
        .then((responsedata) => {
            console.log(responsedata);
            
            if (responsedata.status === 200) {
                dispatch(setLists(responsedata.lists))
            }
        })
        reset();
        toggleModal();
    }

    return (
        <div>
            <button className={styles.open} onClick={toggleModal}><img className={styles.plus} src={plus} alt="plus" /> Edit</button>
            <div className={`${styles.modalBlock} ${visible && styles.visible}`}>
                <form className={styles.form} onSubmit={handleSubmit(renameList)} >
                    <button className={styles.close} onClick={toggleModal}>X</button>
                
                    <h2 className={styles.inputTitle}>Enter new name for list</h2>

                   <label>
                        <input type="text" {...register('list_name', {
                            required: 'enter new name for list'
                        })} />
                        {errors.list_name && <span>{errors.list_name.message}</span>}
                   </label>

                    <button type="submit" onSubmit={handleSubmit(renameList)} >rename</button>
                </form>
            </div>
        </div>
    );
};

export default ChangeListNameFeature;