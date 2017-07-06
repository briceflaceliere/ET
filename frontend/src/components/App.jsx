import React from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../routes/Home.jsx';
import About from '../routes/About.jsx';

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
                <Link to="/">Home</Link> /
                <Link to="/about">About</Link>
                <button onClick={() => this.addTest()}>Add</button>
                Test : {this.props.test}
                <hr />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
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