import React from 'react';

class SlideShow extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const slideShowStyle = {
            backgroundImage: 'url(' + this.props.image + ')',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        };

        const containerStyle = {
            height: this.props.height + 'px',
            position: 'relative',
        };

        return (
            <div style={slideShowStyle}>
                <div style={containerStyle} class="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default SlideShow;