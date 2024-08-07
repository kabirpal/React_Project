import React from "react";

class UserClass extends React.Component{
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: 'Dummy name',
                location: 'Everywhere'
            }
        }

    }

    async componentDidMount(){
        const fetchData = await fetch('https://api.github.com/users/kabirpal');
        const data = await fetchData.json(); 
        console.log(data);
        this.setState({
            userInfo : data
        })
    }



    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        const {count} = this.state;
        return(
            <div className="user-container">
                <img src={avatar_url}/>
                <h1>Count : {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increase Count</button>
                <h1>Count2 : {this.state.count2}</h1>
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h3>Contact: Kabir@gmail.com</h3>
            </div>
        )
    }
}

export default UserClass; 