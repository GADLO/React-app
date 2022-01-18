import React,{Component} from 'react'
import './events.css'

class Events extends Component {
    static defaultProps ={
        messages:[
            'React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：',
            'React 事件的命名采用小驼峰式（camelCase），而不是纯小写。',
            '使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。'
        ]
    }
    constructor(props) {
        super()
        this.state =({events:'event'})
        this.controlMes = this.controlMes.bind(this)
    }
    controlMes(){
        console.log(this.props)
        let messages =this.props.messages
        console.log(messages)
        let rIndex = Math.floor(Math.random() * messages.length)
        console.log(rIndex)
        this.setState({events:messages[rIndex]})
    }


    render() {
        return (
            <div className="center">
                <h1>Events</h1>
                <h2 className='events' onMouseEnter={this.controlMes}>onMouseEnter</h2>
                <h3>{this.state.events}</h3>
            </div>
        )
    }
}

export default Events