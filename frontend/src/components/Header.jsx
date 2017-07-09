import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.$el = $(this.el);
        this.$window = $(window);
        this.initialPos = this.$el.offset().top;

        $(window).on('scroll', () => this.onScrool());
    }

    onScrool() {
        if (this.$window.scrollTop() > this.initialPos) {
            if (this.fixed !== true) {
                this.$el.removeClass('initial')
                    .addClass('fixed');
                this.fixed = true;
            }
        } else {
            if (this.fixed !== false) {
                this.$el.removeClass('fixed')
                    .addClass('initial');
                this.fixed = false;
            }
        }
    }

    componentWillUnmount() {
        $window.off('scroll', this.onScrool);
    }

    render() {
        return (
            <header class="initial" ref={el => this.el = el}>
                <nav class="z-depth-0">
                    <div class="nav-wrapper container">
                        <div class="row">
                            <div class="col s12">
                                <a href="#" class="brand-logo">
                                    <strong class="red-text">E.T.</strong> Search Home
                                </a>
                                <ul class="right hide-on-med-and-down">
                                    <li><a href="#">Publier une annonce</a></li>
                                    <li><a href="#">Connexion</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}



export default Header;