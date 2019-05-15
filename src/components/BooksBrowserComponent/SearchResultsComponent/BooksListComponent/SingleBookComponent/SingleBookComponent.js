import React from 'react';
import './SingleBookComponent.css'

const singleBookComponent = (props) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="SingleBookComponent" onClick={props.selected}>
                <div className="row">
                    <div className="col-md-12">
                        <img src={props.data.smallImageURL} alt={props.data.title} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <p><strong>Title:</strong>{props.data.title}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <p><strong>Author:</strong>{props.data.author}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default singleBookComponent;