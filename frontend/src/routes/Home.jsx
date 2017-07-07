import React from 'react';
import SlideShow from '../components/SlideShow.jsx';
import QuickSearch from '../components/Search/QuickSearch.jsx';

export class Home extends React.Component {
    render() {
        return (
            <SlideShow image="/img/home-paris.jpg" height="500">
                <QuickSearch />
            </SlideShow>
        );
    }
}

export default Home;