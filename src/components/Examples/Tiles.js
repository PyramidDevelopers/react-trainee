import './Tiles.css'

const SIZES = [
    'tile-small',
    'tile-big'
]

const Tiles = ({title, body, image, isOngiong, tileSize}) => {

    const finalTileSize = SIZES.includes(tileSize) ? tileSize : SIZES[0];

    return (
        <div className={`tilescontainer ${finalTileSize}`}>
            <div className="tile__body">
            <div className="tiles__mainbody">
                {isOngiong && <span className="ongoing">ONGOING</span>}
                <div className="tiles__title">{title}</div>
                <div className="tiles__body">{body}</div>
            </div>
            </div>
            <div className="tiles__img">
                <img src={image} alt=""></img>
            </div>
        </div>
    );
}

export default Tiles;