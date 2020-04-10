import React from 'react';

class Timer extends React.Component {
    constructor() {
        super()

        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        
        setInterval(() => {
            // const { counter } = this.state;

            this.setState({
                // counter: counter + 1
                counter: this.state.counter + 1
            })
        }, 1000)
    }

    render() {
        return (
            <div className="Timer">
                <p>{this.state.counter}</p>
            </div>
        )
    }
}

export default Timer