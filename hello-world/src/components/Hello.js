import React from "react";

// const Hello = () => <h1>Hello World</h1>
// If we don't want to use JSX then we have to use this

const Hello = () => {
    return React.createElement('div',
        {id:'container', className:'my-conatiner'},
        React.createElement('h2',{className:'heading'}, 'Hello I am learning the importance of JSX' ))
}
export default Hello;