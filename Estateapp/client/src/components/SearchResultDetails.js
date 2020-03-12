import React from 'react';
import SearchResultDetailBanner from './SearchResultDetailBanner';
import SearchResultDetailTitle from './SearchResultDetailTitle';

class Search_Result_Details extends React.Component {
    state = {  }
    render() {
        return (
            <div>
                <SearchResultDetailBanner />
                <SearchResultDetailTitle />

            </div>
        );
    }
}

export default Search_Result_Details;