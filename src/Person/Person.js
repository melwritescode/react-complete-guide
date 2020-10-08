import React from 'react';
import classes from './Person.css';
import './Person.css';

// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 2px #ccc;
//   padding: 16px;
//   text-align: center;

//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;

const Person = (props) => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px',
  //   },
  // };

  return (
    <div>
      <div className={classes.Person}>
        <p onClick={props.click}>
          I'm {props.name} and I'm {props.age} years old!
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.inputChange} value={props.name} />
      </div>
    </div>
  );
};

export default Person;
