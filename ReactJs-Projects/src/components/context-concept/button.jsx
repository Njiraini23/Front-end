

const ContextButtonComponent = () => {
    const {setTheme, theme} = useContext(GlobalContext);

    return <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>;
}

export default ContextButtonComponent;