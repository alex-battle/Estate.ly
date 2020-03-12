import React from 'react';
import SearchBanner from './SearchBanner';
import SearchTitle from './SearchTitle';
import SearchForm from './SearchForm';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
        console.log(props)
    }
    render() {
        return (
            <div>
                <SearchBanner />
                <SearchTitle />
                <SearchForm searchInput={this.state.searchInput} handleChange={this.state.handleChange} />
            </div>
        );
    }
}

export default Search;