import React, {createRef, useState, useEffect} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})
    const [shake, setShake] = useState(false)

    const shakeForm = () =>{
        setShake(true)
        setTimeout(() => setShake(false), 500)
    }

    useEffect(() => {
        if(shake){
            
        }
    }, [shake])

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now(),
        }
        create(newPost)
        setPost({title: '', body: ''})
      }
    return (
    <form className={shake?'shake' :''}>
        <MyInput 
        type="text" 
        placeholder='Name of post'
        required='required'
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        />
        <MyInput 
        type="text" 
        placeholder='Description'
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        />
        {post.title === ''
        ?<MyButton onClick={shakeForm}>Post</MyButton>
        :<MyButton onClick={addNewPost}>Post</MyButton>
        }
        
    </form>
    );
}

export default PostForm;
