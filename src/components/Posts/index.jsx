import { useContext, useEffect } from "react";
import { loadPosts } from "../../contexts/PostsProvider/actions";
import { PostsContext } from "../../contexts/PostsProvider/context";

export const Posts = () => {

    const postsContext = useContext(PostsContext);
    const { postsState, postsDispatch } = postsContext;

    useEffect(()=>{
        console.log('carregar');
        loadPosts(postsDispatch);
    }, [postsDispatch]);

    return (
        <div>
            <h1>POSTS</h1>
            {postsState.posts.map((p)=>{
                <p key={p.id}>{p.title}</p>
            })}
        </div>
    );
};