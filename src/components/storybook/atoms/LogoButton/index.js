import './index.scss';

const LogoBtn = ( props ) => {
    const {image, text, link, alt} = props
    
    return (
        
        <a className='logo__fix' href={link}>
            <img src={image} width="65px" alt={alt}/>
            <span>{text}</span>
        </a>
    )
}
export default LogoBtn;