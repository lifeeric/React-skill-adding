import React, { Component } from 'react';
import classes from './search.module.scss';

class Search extends Component {

    state = {
        skill: [],
        enough: false
    }


    triggerMe = (event) => {
        // adding skill

        const code = event.keyCode || event.which;

        if( code === 13 && event.target.value )
        {
            const newSkill = event.target.value;

            // get the old skill
            const skill = [...this.state.skill];

            // now push it
            skill.push(newSkill);

            // clear the input valu
            event.target.value = '';

            // enough
            let enough;

            if( skill.length >= 4 )
            {
                enough = true;
            }
            
            // re-render the DOM
            this.setState({
                skill: skill,
                enough: enough
            });

        }

    }

    
    deleteSkill = (event) => {
        // skill need to be deleted

        // copy the old skill
        const skill = [...this.state.skill];

        // now filter it
        const newSkill = skill.filter( item => item !== event);

        // enough is now less then 5
        let enough;
        if( newSkill < 4 )
            enough = false;

        // re render the dom
        this.setState({ skill: newSkill, enough: enough });
    }


    render() {

        // Destruct the obje
        const { skill, enough } = this.state;
        console.log(`%c${skill}`, 'color: green; font-family: sans-serif');

        let inputClass = [classes.main__inputField];

        if( enough ) inputClass.push(classes.main__disabled);

        return(
            <div className={classes.main}>
                
                <h2 className={classes.main__header}> Add Your Skill </h2>

                <input
                    type="search"
                    placeholder="Your Skill"
                    className={inputClass.join(' ')}
                    onKeyPress={this.triggerMe}
                    disabled={enough}
                />

                <div className={classes.main__skill}>
                    { skill.map( (item, index) => {
                        return <span 
                                    key={index}
                                    onClick={() => this.deleteSkill(item)}
                                    >{item}
                                </span>
                    }) }
                </div>
            </div>
        );
    }
}

export default Search;