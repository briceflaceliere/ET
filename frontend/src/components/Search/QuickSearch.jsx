import React from 'react';

class QuickSearch extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div class="quick-search">
                <div class="row">
                    <h1 class="white-text" title="Je cherche à acheter ou louer">Je cherche à</h1>
                    <ul class="tabs tabs-fixed-width">
                        <li class="tab"><a class="active" href="#quick-search-buy">Acheter</a></li>
                        <li class="tab"><a href="#quick-search-location">Louer</a></li>
                    </ul>
                    <div id="quick-search-buy" class="tab-content col s12">Test 1</div>
                    <div id="quick-search-location" class="tab-content col s12">Test 2</div>
                </div>
            </div>
        );
    }
}

export default QuickSearch;