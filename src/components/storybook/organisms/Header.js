import Logo from '../../../assets/images/logo.png'

function Header() {
    return(
        <header>
            <div className="Logo">
                <img src={Logo} />
            </div>
        </header>
    );
}

export default Header;