import React from 'react';
import Note from './Note';

function Entry(props) {
    return (
        <Note
            key={props.key}
            id={props.key}
            title={props.title}
            content={props.content}
        />
    )
}

export default Entry;