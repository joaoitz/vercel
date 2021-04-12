import {useState} from 'react'



function HOME () {
    const [cont,setCont] = useState(0);
    function contador(){
    setCont(cont+1);
    
        } 
return <div>USUÁRIOS CONECTADOS = {cont}
<button onClick={contador}>Clique Aqui!</button>
</div>


} export default HOME

