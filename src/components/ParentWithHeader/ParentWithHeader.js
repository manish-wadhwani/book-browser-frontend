import React from 'react';

const parentWithHeader = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-inverse">

                <div className="navbar-header">
                    <a className="navbar-brand" href="http://localhost:3000">Books Browser</a>
                </div>

            </nav>
            {props.children}
        </React.Fragment>
    );
};

export default parentWithHeader;