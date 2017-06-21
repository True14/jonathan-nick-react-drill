import React from 'react';



export default function Output(props) {
  console.log(props.strings);
  const strings = props.strings.map((string,index) => (
    <li key={index}>
        {string}
    </li>
  ));

  return (
        <ul className="aaaah">
          {strings}
         </ul>
  );
}
