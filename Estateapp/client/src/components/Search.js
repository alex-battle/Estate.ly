import React from 'react';
import SearchBanner from './SearchBanner';
import SearchTitle from './SearchTitle';
import SearchForm from './SearchForm';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <SearchBanner />
                <SearchTitle />
                <SearchForm/>
            </div>
        );
    }
}

export default Search;