import { useContext } from "react";
import { GlobalContext } from "../../context";


const ContextTextComponent = () => {

    const {theme} = useContext(GlobalContext)

    console.log(getStateFromGlobalContext)  

    return <h1 style={{
         fontSize : theme === 'light' ? '50px' : '100px',
         backgroundColor : theme === 'light' ? '#fff' : '#000',
         color :  theme === 'light' ? 'blue' : 'yellow' }}>Kennedy Njiraini</h1>
}

export default ContextTextComponent;