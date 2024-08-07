import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props)

        // console.log('Constructor called');
    }

    componentDidMount(){
        // console.log('Component Did Mount called');
    }

    render(){
        // console.log('Render called');
        return (
            <div>
                <h1>This is about us page</h1>
                <UserClass name={'Kabir/ Class Component'} location={'Jodhpur class'}/>
            </div>
        )
    }
}

// const About = ()=> {
//     return(
//         <div>
//             <h1>This is about us page</h1>
//             {/* <User name={'Kabir Pal/ Functional Component'}/> */}
//             <UserClass name={'Kabir/ Class Component'} location={'Jodhpur class'}/>
//         </div>
//     )
// }

export default About;