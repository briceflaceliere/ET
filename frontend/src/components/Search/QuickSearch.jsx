import React from 'react';

class QuickSearch extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div class="row">
                <div style={rowStyle}>
                    <div class="row">
                        <h1 class="white-text" style={titleStyle} title="Je cherche à acheter ou louer">Je cherche à</h1>
                        <ul class="tabs tabs-fixed-width" style={tabStyle}>
                            <li class="tab"><a class="active" href="#quick-search-buy">Acheter</a></li>
                            <li class="tab"><a href="#quick-search-location">Louer</a></li>
                        </ul>
                        <div style={boxStyle} id="quick-search-buy" class="col s12">Test 1</div>
                        <div style={boxStyle} id="quick-search-location" class="col s12">Test 2</div>
                    </div>
                </div>
            </div>
        );
    }
}

const titleStyle = {
    fontSize: '2em',
    margin: '0 0 10px 0',
    textAlign: 'center',
};

const boxStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
};

const tabStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
};

const rowStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '600px',
    transform: 'translate(-50%, -50%)',
}

export default QuickSearch;