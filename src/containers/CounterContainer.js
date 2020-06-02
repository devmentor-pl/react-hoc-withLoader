// ./src/containers/CounterContainer.js
import React from 'react';

import Counter from '../components/Counter';
import withLoader from '../hoc/withLoader';

const CounterWithLoader = withLoader('Loading')(Counter);

class CounterContainer extends React.Component {
    state = { 
        clicksNumber: 0,
        isLoaded: false,
    }

    componentDidMount() {
        this.id = setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 3000);
    }

    // ...

    componentWillMount() {
        clearTimeout( this.id );
    }

    increment = () => {
        const { clicksNumber } = this.state;
        this.setState({
            clicksNumber: clicksNumber +1,
        });
    }

    render() {
        return <CounterWithLoader
            isLoaded={ this.state.isLoaded }
            onIncrement={ this.increment }
            clicksNumber={ this.state.clicksNumber }
        />
    }
}

export default CounterContainer