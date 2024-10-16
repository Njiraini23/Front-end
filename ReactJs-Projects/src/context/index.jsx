import { createContext } from "react";

// create the context
export const GlobalContext = createContext(null);

// create the global state that receive components as children

function GlobalState({ children }) {

    const [theme, setTheme] = useState('light');

    return (
    <GlobalContext.Provider value={{ theme, setTheme}}>
        {children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;