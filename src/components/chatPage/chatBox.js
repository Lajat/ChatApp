import React from "react";
import classes from './chatBox.module.css';
import MessageList from './messageList';
import SendMessage from './sendMessage';
import AddParticipants from './addParticipants'
import FreindList from './freindList';
import ScrollableFeed from 'react-scrollable-feed';
 
function chatBox () {
    return (
        <div className={classes.pageLayout}>
            <div className={classes.topbar}></div>
            <div className={classes.leftside}> <FreindList /> </div>
            {/* <div className={classes.rightside}> <MessageList /> </div> */}
            <ScrollableFeed className={classes.rightside}><MessageList/></ScrollableFeed>
            <div className={classes.addParticipants}> <AddParticipants /> </div>
            <div className={classes.sendMessageForm}> <SendMessage /> </div>
        </div>
    )
}

export default chatBox;