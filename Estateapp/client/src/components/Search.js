import React from 'react';
import SearchBanner from './SearchBanner';
import SearchTitle from './SearchTitle';

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
            </div>
        );
    }
}

export default Search;