import React, { Component } from "react";

export class UserGreeting extends Component {
    constructor (props){
        super(props)

        this.state = {
            isLoggedIn : true 
        }
    }
    render() {
        ////////////////////////////////////////    approach 5
         return this.state.isLoggedIn && <div>Welcome Deepsa</div>;

        ////////////////////////////////////////    approach 4

        // return this.state.isLoggedIn ? (<div>Welcome Deepsa</div>) : (<div>Welcome Guest</div>);


        ////////////////////////////////////////    approach 3

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Kabir Pal</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return message;

        ////////////////////////////////////////    approach 2
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Kabir</div>
        // }else{
        //     return <div>Welcome Guest</div>
        // }


        //////////////////////////////////////// approach 1
        // return(
        //     <div>
        //         <div>Welcome Kabir</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // ) 
    }
}

export default UserGreeting;
