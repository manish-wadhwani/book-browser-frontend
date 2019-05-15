import React from 'react';
import './BookDetailsComponent.css'
import Rating from 'react-rating'

const bookDetailsComponent = (props) => {
    return (
        <div className="BookDetailsComponent">


            <div className="row">

                <div className="col-md-3">
                    <img src={props.selectedProduct.imageURL} alt={props.selectedProduct.title}></img>
                </div>

                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>{props.selectedProduct.title}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h3>By {props.selectedProduct.author}</h3>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-4">
                            <Rating
                                fractions={2}
                                initialRating={props.selectedProduct.averageRating}
                                readonly />
                            <p><strong>{props.selectedProduct.averageRating}</strong></p>
                        </div>
                        <div className="col-md-4">
                            <p><strong>{props.selectedProduct.ratingsCount} Ratings</strong></p>
                        </div>
                        <div className="col-md-4">
                            <p><strong>{props.selectedProduct.reviewsCount} Reviews</strong></p>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-md-12">
                            <p>{props.selectedProduct.description}</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default bookDetailsComponent;