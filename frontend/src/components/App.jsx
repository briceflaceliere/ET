import React from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../routes/Home.jsx';
import About from '../routes/About.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    addTest(){
        this.props.addTest();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        // You can now say this.props.books
        test: state.test
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        // You can now say this.props.createBook
        addTest: () => dispatch({type: 'ADD_TEST'})
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));