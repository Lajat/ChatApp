import React from 'react';
import classes from './sendMessage.module.css';

class sendMessage extends React.Component {
    state ={
        message:'',
        value:''
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.setState({value: ''})
        console.log(this.state.message);
    }
    onInputChanged = (e) => {
        console.log(e.target.value);
        this.setState({message: e.target.value,value: e.target.value});
        
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit} className={classes.main}>
                <input onChange={this.onInputChanged} type="text" value={this.state.value} placeholder="Type a message" />
            </form>
        )
    }
}

export default sendMessage;