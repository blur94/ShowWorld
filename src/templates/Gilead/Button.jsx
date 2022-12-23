import React from 'react';

export default function Button({ title, handleClick, className }) {
    return (
        <>
            <button
                onClick={handleClick}
                className={className}
            >
                {title}
            </button>
        </>
    );
}
