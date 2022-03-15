import './styles/LogoBtn.scss';

const LogoBtn = ( props ) => {
    const {image, text} = props
    
    return (
        
        <a className='logo__fix' href="/#">
            <img src={image} width="65px" alt="logo"/>
            <span>{text}</span>
        </a>
    )
}
export default LogoBtn;