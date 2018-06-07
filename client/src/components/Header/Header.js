import React, { Component, Fragment } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className='jumbotron'>
                    <h1>NY Times Article Scrubber</h1>
                    <p>Search for & Annotate articles of interest!</p>
                </div>
            </Fragment >
        )
    }
}

export default Header;