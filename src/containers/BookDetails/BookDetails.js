import React, { Component } from 'react';
import BookDetailsComponent from '../../components/BookDetailsComponent/BookDetailsComponent'
import { connect } from 'react-redux'
import axios from 'axios';

class BookDetails extends Component {

    state = {
        selectedProduct: null,
        displaySpinner: false
    }

    componentDidMount() {
        if (this.props.selectedProductFromStore !== null) {
            this.setState({ selectedProduct: this.props.selectedProductFromStore, displaySpinner: true });

            axios.get("http://localhost:3001/books/description/" + this.props.selectedProductFromStore.ISBN)
                .then(response => {
                    const selectedProduct = { ...this.state.selectedProduct };
                    selectedProduct.description = response.data;
                    this.setState({ selectedProduct: selectedProduct, displaySpinner: false });

                })
                .catch(error => {
                    console.log(error)
                })
        }


    }

    render() {
        return (
            <React.Fragment>
                {this.state.selectedProduct ? <BookDetailsComponent selectedProduct={this.state.selectedProduct} /> : null}
                {this.state.displaySpinner ? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Spinner"/> : null}
            </React.Fragment>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        selectedProductFromStore: state.selectedProduct
    }
}

export default connect(mapStateToProps, null)(BookDetails);