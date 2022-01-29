import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from '../redux/ducks/messageDuck';

function Reply() {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.userDuck);

    const defaultInputValues = { 
        id: 0, 
        name: user.username, 
        text: '', 
        date: new Date().toLocaleDateString(),
        textColor: 'black', 
        nameColor: 'black' 
    };
    const {register, handleSubmit, reset, formState: {errors}} = useForm({defaultValues: defaultInputValues});

    const onSubmit = data => {
        dispatch(addMessage(data));
        reset(defaultInputValues);
    }

    return <div className="reply">
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <div className="form-group">
                    <textarea {...register("text", {required: "This field is required."})} placeholder="Message text..." className={'form-control ' + (errors.text ? 'is-invalid' : '')}/>
                    <div className="invalid-feedback">{errors.text?.message}</div>
                </div>
                <div className="form-group form-bottom">
                    <input type="submit" name="Reply" value="Reply" className="btn btn-primary"/>
                </div>
            </form>
        </div>;
}

export default Reply;
