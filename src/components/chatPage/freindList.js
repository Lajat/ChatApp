import React from 'react'
import classes from './freindList.module.css';

class freindList extends React.Component {

    dummyList = [{
        Id: 'Donquixote Doflamingo',
        dp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTparMQq1Xxs2lJMs7LCoOHiJyp38bmj7_G9XlyEUSSoj4EMF2f&usqp=CAU',
    },
    {
        Id: 'Bakugo',
        dp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTparMQq1Xxs2lJMs7LCoOHiJyp38bmj7_G9XlyEUSSoj4EMF2f&usqp=CAU',
    },
    {
        Id: 'Kujo Jotaro',
        dp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTparMQq1Xxs2lJMs7LCoOHiJyp38bmj7_G9XlyEUSSoj4EMF2f&usqp=CAU',
    },
    {
        Id: 'Laxus',
        dp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTparMQq1Xxs2lJMs7LCoOHiJyp38bmj7_G9XlyEUSSoj4EMF2f&usqp=CAU',
    },
    {
        Id: 'Aizen Souske',
        dp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTparMQq1Xxs2lJMs7LCoOHiJyp38bmj7_G9XlyEUSSoj4EMF2f&usqp=CAU',
    }
]

onClicked = (pos) => {
    console.log("chat list item clicked");
    console.log(pos);
}

    render () {
        return (
            <div className={classes.main}>
                {
                    this.dummyList.map((message, pos) => {
                        return (
                            <div key={pos} onClick={(pos)=>this.onClicked(pos)} className={classes.display}>
                                <div className={classes.dp}> <img src={message.dp} alt="Display Picture" /> </div>
                                <div className={classes.name}> {message.Id} </div>
                            </div>
                        )   
                    })
                }
            </div>
        )
    }
}

export default freindList;