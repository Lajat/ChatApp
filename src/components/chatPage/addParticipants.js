import React from 'react'
import classes from './addParticipants.module.css';

class addParticipants extends React.Component {

    onBtnClicked = () => {
        console.log("Button Clicked");
    }

    render () {
        return (
            <button onClick={this.onBtnClicked} className={classes.btn}>Add Freinds</button>
        )
    }
}

export default addParticipants;