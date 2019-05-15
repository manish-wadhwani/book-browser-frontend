import React from 'react';
import SearchBarComponent from './SearchBarComponent/SearchBarComponent'
import SearchResultsComponent from './SearchResultsComponent/SearchResultsComponent'

const booksBrowserComponent = (props) => {
    return (
        <React.Fragment>
            <SearchBarComponent
                onSearchClicked={props.onSearchClicked}
                onQueryChanged={props.onQueryChanged}
                query={props.query} />

            <SearchResultsComponent
                resultData={props.resultData}
                bookSelected={props.bookSelected} />
        </React.Fragment>
    );
};

export default booksBrowserComponent;