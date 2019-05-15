import React from 'react';

const searchBarComponent = (props) => {
    return (
        <React.Fragment>

           

            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-12">
                    <div className="input-group">
                        <input type="text"
                            className="form-control"
                            value={props.query}
                            onChange={props.onQueryChanged}
                            placeholder="Search by title, author, or ISBN" />
                        <div className="input-group-btn">
                            <button className="btn btn-primary" type="submit" onClick={props.onSearchClicked}>
                                <span className="glyphicon glyphicon-search"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
};

export default searchBarComponent;