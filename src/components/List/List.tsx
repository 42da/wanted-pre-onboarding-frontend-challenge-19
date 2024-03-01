import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { deleteContent } from '../../store/store';

function List(props: any) {

    const state = useSelector((state: any) => state.content);
    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(deleteContent(props.idx));
    }

    return (
        <div>
            <h1>{props.content}</h1>
            <button onClick={deleteItem}>delete</button>
        </div>
    )
}

export default List;