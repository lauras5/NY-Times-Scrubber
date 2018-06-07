import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './Form.css';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            topic: '',
            start: '',
            end: ''
        };

        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3a341da1a8904ceb964f5c03f867c453&q=' + this.state.topic)
            .then(r => {
                const article = r.data
                console.log(article)
                this.setState({ articles: article })
            })
            .catch(e => {
                console.log(e)
            })
    }


    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3a341da1a8904ceb964f5c03f867c453&q=' + this.state.topic + '?begin_date=' + this.state.start + '0101?end_date=' + this.state.end + '0101')
            .then(r => {
                const article = r.data
                console.log(article)
                this.setState({ articles: article })
            })
            .catch(e => {
                console.log(e)
            })
            
        console.log('Your topic is ' + this.state.topic);
        console.log('Your start year is ' + this.state.start);
        console.log('Your end year is ' + this.state.end);
    }

    render() {
        return (
            <Fragment>
                <h2>Search</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Topic:
                          <input
                            name='topic'
                            type="text"
                            onChange={this.handleInputChange} />
                        Start Year:
                          <input
                            name='start'
                            type="text"
                            onChange={this.handleInputChange} />
                        End Year:
                          <input
                            name='end'
                            type="text"
                            onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </Fragment>
        )
    }
}

export default Form;