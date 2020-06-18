import React from 'react';
import classes from './messageList.module.css';

const dummyData = [
    {
        senderID: 'Donquixote Doflamingo',
        text: 'Mugiwara no Luffy'
    },
    {
        senderID: 'Donquixote Doflamingo',
        text: 'I am a Celestial Dragon'
    },
    {
        receiverID: 'Luffy',
        text: 'kaijoku naru otokata'
    },
    {
        receiverID: 'Luffy',
        text: 'butobash'
    },
    {
        senderID: 'Donquixote Doflamingo',
        text: 'Bird Cage'
    },
    {
        senderID: 'Donquixote Doflamingo',
        text: 'Mugiwara no Luffy'
    },
    {
        senderID: 'Donquixote Doflamingo',
        text: 'I am a Celestial Dragon'
    },
    {
        receiverID: 'Luffy',
        text: 'kaijoku naru otokata'
    },
    {
        receiverID: 'Luffy',
        text: 'butobash'
    },
    {
        senderID: 'Donquixote Doflamingo',
        text: 'Bird Cage'
    },
    {
        senderID: 'Donquixote Doflamingo',
        text: 'Mugiwara no Luffy1'
    },
    {
        senderID: 'Donquixote Doflamingo',
        text: 'Mugiwara no Luffy2'
    },
    {
        senderID: 'Donquixote Doflamingo',
        text: 'Mugiwara no Luffy3'
    },
    {
        senderID: 'Donquixote Doflamingo',
        text: 'Mugiwara no Luffy4'
    },
    {
        senderID: 'Donquixote Doflamingo',
        text: 'Mugiwara no Luffy5'
    },
    {
        senderID: 'Donquixote Doflamingo',
        text: 'Mugiwara no Luffy6'
    },
    {
        senderID: 'Donquixote Doflamingo',
        text: 'Mugiwara no Luffy7'
    },
    {
        senderID: 'Donquixote Doflamingo',
        text: 'Mugiwara no Luffy8'
    },
    
]

function messageList () {
    return (
        <div className={classes.main}>
            {
                dummyData.map((message, index) => {
                    return (
                        <div key={index} className={classes.message}>
                            <div className={classes.senderID}> {message.senderID} </div>
                            <div className={classes.receiverID}> {message.receiverID} </div>
                            <div className={classes.textWrapper}><bre className={classes.text}> {message.text} </bre></div>
                        </div>
                    )   
                })
            }
        </div>
    )
}

export default messageList;