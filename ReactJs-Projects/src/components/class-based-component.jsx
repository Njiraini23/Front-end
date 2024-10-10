import { Component }from "react";

class ClassBasedComponent extends Component {
    // state
    state = {
        showText: false,
        changeColor: false,
        count: 0,
        changeCountStyle: false,
    };

    handleClick = () => {
        console.log('Button clicked');

        this.setState({
            showText: !this.state.showText,
            changeColor: !this.state.changeColor,
        })
    }

    handleCount = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1,
        });
    };

    componentDidMount(prevProps, prevState) {
        console.log(prevState, this.state);

        if(prevState && prevState.count !== this.state.count && this.state.count === 10) {
            this.setState({
                ...this.state,
                changeCountStyle: !this.state.changeCountStyle,
            });
    }

    render() {

        const { showText, changeColor, count } = this.state;

        return (
            <div>
                {showText? (
                    <h1 style={{color: changeColor? 'red': 'black'}}>
                        Class based component
                        </h1>
                ): null}
                <button onClick={this.handleClick}>Toggle Text</button>
                <buton onClick={this.handleCount} >Increase Count value</buton>
                <button>Count is {count} </button>
            </div>
        )
    }
}

export default ClassBasedComponent;