import React,{useState} from 'react'


function HOME(){


    return <div>
        <div>{calcula}</div>
    </div>

}export default HOME


function calcula(){
const [dados,setDados] = useState(1);

      function calc(){
      setDados(dados + 1)
      }

      return (

      <div>
          Teste
      </div>

      )

}







