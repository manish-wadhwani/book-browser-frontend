import React from 'react';
import SingleBookComponent from './SingleBookComponent/SingleBookComponent'

const booksListComponent = (props) => {
    let listOfBooks = null;
    if (props.data !== null) {
        listOfBooks = props.data.map((book) => {
            return <SingleBookComponent
                key={book.id}
                data={book}
                selected={() => { props.bookSelected(book.id) }} />
        })
    }


    return (
        <div className="row">
            {listOfBooks}
        </div>
    );
};

export default booksListComponent;