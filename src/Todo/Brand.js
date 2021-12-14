import './todo.css'
import toggler from '../images/icon-sun.svg'
import toggler2 from '../images/icon-moon.svg'
function Brand({isDark ,toggleTheme}) {
    return (
        <header className="brand">
            <h1 id="brandName">TODO</h1>
            <figure>
            <button onClick={toggleTheme} className="btn">
            <img src={ isDark ? toggler2 : toggler} alt="toggle dark light theme"></img>
            </button>
                
            </figure>
        </header>
    )
}

export default Brand
