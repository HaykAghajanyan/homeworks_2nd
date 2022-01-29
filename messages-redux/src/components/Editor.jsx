import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";
import {saveMessage} from '../redux/ducks/messageDuck';

function Editor({id, handleSave, handleCancel}) {

    const dispatch = useDispatch();
    const {messages} = useSelector(state => state.messageDuck);
    const message = messages.find(message => message.id === id );

    const defaultInputValues = { text: message.text };

    const { register, handleSubmit, formState: {errors} } = useForm({defaultValues: defaultInputValues});

    const onSubmit = data => {
        dispatch( saveMessage({id, text: data.text}) );
        handleSave();
    }

  return <div className="editor">
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <div className="form-group">
                    <textarea {...register("text", {required: "This field is required."})} placeholder="Message text..." className={'form-control ' + (errors.text ? 'is-invalid' : '')}/>
                    <div className="invalid-feedback">{errors.text?.message}</div>
                </div>
                <div className="form-group form-bottom">
                    <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button> 
                    <input type="submit" name="Save" value="Save" className="btn btn-primary"/>
                </div>
            </form>
        </div>;
}

export default Editor;
