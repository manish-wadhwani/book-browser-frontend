import React, { Component } from 'react';
import axios from 'axios';
import BooksBrowserComponent from '../../components/BooksBrowserComponent/BooksBrowserComponent'
import { connect } from 'react-redux'

class BooksBrowser extends Component {

    state = {
        searchQuery: "",
        resultData: null,
        displaySpinner: false
    }

    onSearchHandler = (event) => {
        event.preventDefault();
        this.setState({ displaySpinner: true })
        axios.get("http://localhost:3001/books/searchBooks", { params: { q: this.state.searchQuery } })
            .then((response) => {
                this.setState({ resultData: response.data, displaySpinner: false })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onChangeHandler = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    onBookSelectedHandler = (id) => {
        let selectedProduct = this.state.resultData.filter((book) => {
            return book.id === id;
        })
        this.props.selectProduct(selectedProduct[0]);
        this.props.history.push("/books/" + selectedProduct[0].id);
    }

    render() {
        return (
            <React.Fragment>

                <BooksBrowserComponent
                    onSearchClicked={this.onSearchHandler}
                    onQueryChanged={this.onChangeHandler}
                    query={this.state.searchQuery}
                    resultData={this.state.resultData}
                    bookSelected={this.onBookSelectedHandler} />
                {this.state.displaySpinner ? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Spinner" /> : null}
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectProduct: (product) => { dispatch({ type: "SELECT_PRODUCT", value: product }) }
    }
}

export default connect(null, mapDispatchToProps)(BooksBrowser);