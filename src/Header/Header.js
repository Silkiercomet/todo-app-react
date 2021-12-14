import './header.css'

function Header({isDark}) {
    console.log(isDark)
    return (
        <section className="header_bg" id={isDark?'Bg_D':'Bg_L'}/*style={{backgroundImage: isDark? `url(${Bg_D})` : `url(${Bg_L})`}}*/>
            
        </section>
    )
}

export default Header
