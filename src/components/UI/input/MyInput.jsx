import React from 'react';
import classes from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} type="text" {...props} className={classes.myInput}/>
    );
})

export default MyInput;
