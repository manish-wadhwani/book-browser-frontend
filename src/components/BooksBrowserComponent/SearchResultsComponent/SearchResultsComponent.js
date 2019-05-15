import React from 'react';

import BooksListComponent from './BooksListComponent/BooksListComponent'

const searchResultsComponent = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-4">
                    <h3>Search Results:</h3>
                </div>
            </div>

            <BooksListComponent
                data={props.resultData}
                bookSelected={props.bookSelected} />
        </React.Fragment>
    );
};

export default searchResultsComponent;