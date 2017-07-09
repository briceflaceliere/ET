import React from 'react';
import SlideShow from '../components/SlideShow.jsx';
import QuickSearch from '../components/Search/QuickSearch.jsx';
import HorizontalMarketCards from '../components/Market/HorizontalMarketCards.jsx';

export class Home extends React.Component {
    render() {
        return (
            <div class="home">
                <SlideShow image="/img/home-paris.jpg" height="700">
                    <QuickSearch />
                </SlideShow>
                <HorizontalMarketCards />
                <div class="container">
                    <div class="row">
                        <div class="col s12 m6">
                            <div class="card">
                                <div class="card-image">
                                    <img src="/img/sample/sample1.jpg" />
                                    <span class="card-title">Card Title</span>
                                </div>
                                <div class="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m6">
                            <div class="card">
                                <div class="card-image">
                                    <img src="/img/sample/sample1.jpg" />
                                    <span class="card-title">Card Title</span>
                                </div>
                                <div class="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card">
                                <div class="card-image">
                                    <img src="/img/sample/sample1.jpg" />
                                    <span class="card-title">Card Title</span>
                                </div>
                                <div class="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card">
                                <div class="card-image">
                                    <img src="/img/sample/sample1.jpg" />
                                    <span class="card-title">Card Title</span>
                                </div>
                                <div class="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card">
                                <div class="card-image">
                                    <img src="/img/sample/sample1.jpg" />
                                    <span class="card-title">Card Title</span>
                                </div>
                                <div class="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;