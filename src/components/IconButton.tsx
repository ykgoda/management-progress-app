type Props = {
    src: string;
    alt?: string;
}

const IconButton : React.FC<Props> = ({src,alt}) => {
    return(
        <div>
            <img src={src} alt={alt} />
        </div>
    )
}

export default IconButton;