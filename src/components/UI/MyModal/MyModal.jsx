import React from 'react';
import cl from './MyModal.module.css'
const MyModal = ({children, visible, setVisible}) => {

    const rootClases = [cl.myModal]
    if(visible){
        rootClases.push(cl.active)
    }
    return (
        <div className={rootClases.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;
