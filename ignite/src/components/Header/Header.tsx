import style from "../../styles/Header.module.css"
import igniteLogo from "../../assets/ignite-logo.svg"

const Header = () =>{
    return(
        <header className={style.header}>
            <img src={igniteLogo} alt="logo do Ingnite" />
            <h2>Ignite</h2>
        </header>
    )
}

export default Header