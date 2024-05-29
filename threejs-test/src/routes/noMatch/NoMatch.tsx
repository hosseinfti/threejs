import React from 'react';
import './style.css'

const NoMatch = () => {
    return (
        <div className={"flex-center notFount"}>
            <div className={"notFount-text"}>
                <p className={"notFount-text-p"}>404!</p>
                <p className={"notFount-text-p"}>
                    Not Found...
                </p>
            </div>
        </div>
    );
};

export default NoMatch;
