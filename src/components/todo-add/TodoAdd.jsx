import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import './TodoAdd.css'
import { Form, Field } from 'react-final-form';
import Plus from '../../assets/plus.png'
import Close from '../../assets/closed.png'
import {required} from '../common/validate/validate'

const TodoAdd = (props) => {

  const [adding, setAdding] = useState(false)


  const onAddTask = (formObj) => {
    setAdding(!adding);
    props.onAddTask(formObj)
  };

  return (
    <div className="todo-add main-padding">
      <div onClick={() => setAdding(!adding)} className="add-btn">
        <div className="add-btn__icon">
          <img src={Plus} alt="plus" />
        </div>
        <div className="add-btn__text">
          <span>Add task</span>
        </div>
      </div>

      {adding && (
        <div>
          <div className="dark-background">
            <div className="modal add-modal">
              <div className="add-modal__header">
                <h2>Add task</h2>
                <div
                  onClick={() => setAdding(false)}
                  className="add-modal__close"
                >
                  <img src={Close} alt="close" />
                </div>
              </div>

              <Form onSubmit={(formObj) => onAddTask(formObj)}>
                {({ handleSubmit }) => (
                  <form className="add-modal__form" onSubmit={handleSubmit}>
                    <div className="add-modal__input">
                      <Field name="title" validate={required}>
                        {({ input, meta }) => (
                          <>
                            <input
                              type="text"
                              {...input}
                              placeholder="Name of Task"
                            />
                            {meta.error && meta.touched && (
                              <span className="field-error">{meta.error}</span>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                    <div className="add-modal__input add-modal__textarea">
                      <Field name="description">
                        {({ input }) => (
                          <textarea
                            type="text"
                            {...input}
                            placeholder="Description"
                          />
                        )}
                      </Field>
                    </div>
                    <div className="add-modal__dates">
                      <Field name="startDate">
                        {() => (
                          <>
                            <div>
                              <div>Start Date</div>
                              <DatePicker
                                selected={props.startDate}
                                onChange={(date) => props.setStartDate(date)}
                              />
                            </div>
                            <div>
                              <div>End Date</div>
                              <DatePicker
                                selected={props.endDate}
                                onChange={(date) => props.setEndDate(date)}
                              />
                            </div>
                          </>
                        )}
                      </Field>
                    </div>
                    <button className="button add-modal__button">Add</button>
                  </form>
                )}
              </Form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoAdd;
