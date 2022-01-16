import React, {Component} from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score:0,
            gameOver:false
        }
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>你的分数是{this.state.score}</h1>
            </div>
        )
    }
}

export default Game