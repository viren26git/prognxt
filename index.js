import React from 'react';
import ReactDOM from 'react-dom';
import Register from './controlledform';

function NewComp(props)
{
  const listItems = myList.map((item1) => 
  <li key={item1.id}> 
    {item1.value}
    </li>
 );
 return ( <ul>{listItems} </ul> )
}

const myList = [ 
     {id: 'a', value : 'India'},
     {id: 'b', value : 'Canada'},
     {id: 'c', value : 'France'},
     {id: 'd', value : 'Germnay'},
     {id: 'e', value : 'Sri Lanka'}
     ];
ReactDOM.render(<NewComp myList = {myList}/> ,document.getElementById('root'));