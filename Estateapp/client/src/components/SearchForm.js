import React from 'react';
import {Link} from 'react-router-dom'

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="searchForm">
                <input type="text" className="searchBar" onChange={this.state.handleChange} value={this.state.searchInput} placeholder="Find Property..."></input>
                <Link to="/search/:name"><button type="submit"><i className="searchButton">Search</i></button></Link> 
            </div>
        );
    }
}

export default SearchForm;