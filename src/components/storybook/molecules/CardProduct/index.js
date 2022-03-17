import './index.scss';

const CardProduct = ( props ) => {
    const { name, count, text, image, alt } = props
    return (
        <div>
            <div>
                <img src={image} alt={alt}/>
                <p>{name}</p>
                <span>{count}$</span>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default CardProduct;
