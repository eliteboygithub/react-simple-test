import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const Cockpit = ( props ) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            // alert('Saved data to cloud!');
        },1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    })

    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.red;
    }

    const assiginedClasses = [];
    if(props.persons.length <= 2) {
        assiginedClasses.push(classes.red);
    }

    if(props.persons.length <= 1) {
        assiginedClasses.push(classes.bold);
    }


    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assiginedClasses.join(' ')}>This is really working!</p>
            <button
                className= {btnClass}
                onClick={props.clicked}
            >Toggle Persons</button>
        </div>
    );
}

export default Cockpit;