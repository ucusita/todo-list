import React from 'react'

export class ToDoList extends React.Component {
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            inputValue: "",
            tasks : ["Aprender React","Aprender WebPack","Aprender Bbel"]
        }
    }

    addTask(task){
        this.setState({
          tasks: [...this.state.tasks, task]
        })
    }
    
    handleInput(event){
        this.setState({
            inputValue: event.target.value
        })
    }

    render(){
        return (
            <>
                <ul>
                    { this.state.tasks.map((task, index) => { return <li key={index}>{task}</li>}) }
                </ul>
                <input value={this.state.inputValue} onChange={(e) => this.handleInput(e)} type="text" /><button onClick={() => this.addTask(this.state.inputValue)}>Agregar</button>
            </>
        )
    }
}