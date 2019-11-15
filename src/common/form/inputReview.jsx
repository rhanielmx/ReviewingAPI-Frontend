import React from 'react'

export default props => (
    <div className="form-group has-feedback">
        <textarea {...props.input}
            className='form-control'
            placeholder={props.placeholder}
            readOnly={props.readOnly}/>
    </div>
)
