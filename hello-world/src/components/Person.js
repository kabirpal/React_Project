import React from 'react'

export default function Person() {
    const personList = ['Deepak','Shivam', 'Harsh','Kaushik']
    const persons = personList.map( person => <h5 key={person}>{person}</h5>)
    return (<div>{persons}</div>)
}
