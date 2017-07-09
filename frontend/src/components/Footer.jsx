import React from 'react';

class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <footer class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col m3 s12">
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                            </ul>
                        </div>
                        <div class="col m3 s12">
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                            </ul>
                        </div>
                        <div class="col m3 s12">
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                        <div class="col m3 s12">
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2014 Copyright Text
                    </div>
                </div>
            </footer>
        );
    }
}



export default Footer;