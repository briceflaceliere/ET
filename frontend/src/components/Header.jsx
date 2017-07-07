import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <nav class="white">
                <div class="nav-wrapper container">
                    <div class="row">
                        <div class="col s12">
                            <a href="#" class="grey-text text-darken-3 brand-logo">E.T.</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}


export default Header;