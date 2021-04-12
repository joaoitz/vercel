import React, { useState } from 'react';

function Example() {


        const [count, setCount] = useState(0);
      
          function calcula(){
              setCount(count + 1)
            }

            function setarNOME(){


            }


        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={calcula}>
              Click me
            </button>
          </div>
        );

 
} export default Example






