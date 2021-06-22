import "./Examples.css";
import Nutri from '../../assets/nutri-family.png';
import Near from '../../assets/near-vibe.png';
import Vital from '../../assets/vital-minds.png';
import Emeran from '../../assets/enerman-app.png';
import Take from '../../assets/take-your-trip.png';
import Tiles from './Tiles';

const Examples = () => {

    const centerLeft = [
        {
            title: 'Nutri.family',
            body: 'An innovative health-tech platform where families get healthier, together!',
            image: Nutri,
            onGoing: true
        },
        {
            title: 'NearVibe',
            body: 'A platform to share, react & discover how people are feeling in your area',
            image: Near,
            onGoing: true
        }
    ]

    const centerRight = [
        {
            title: 'VitalMinds',
            body: 'Personal mental health assistant',
            image: Vital,
            onGoing: true
        },
        {
            title: 'Enerman App',
            body: 'Solar Panel information dashboard',
            image: Emeran,
            onGoing: false
        },
        {
            title: 'TakeYourTrip',
            body: 'A travel booking app',
            image: Take,
            onGoing: false
        }
    ]



    return (
        <div className="examples">
            <div className="examples__main">
                <div className="examples__heading">
                    <div className="heading__leftbox">
                        <div className="small-black-box"></div>
                        <div className="small-black-box"></div>
                    </div>
                    <div className="heading__title">
                        {'SHOW ME WHAT YOU GOT'}
                    </div>
                    <div className="heading__rightbox">
                        <div className="wide-black-box"></div>
                    </div>
                </div>
                <div className="examples__body">
                    <div className="body__left">
                        <div className="wide-black-box"></div>
                        <div className="long-black-box"></div>
                        <div className="small-black-box"></div>
                        <div className="small-black-box"></div>
                    </div>
                    <div className="body__centerleft">
                        <div className="body__centerboxes">
                            <div className="small-black-box"></div>
                            <div className="wide-black-box"></div>
                        </div>
                        <div className="body__leftmain">
                            {centerLeft.map((tile, index)=>(
                                <Tiles key={index} title={tile.title} body={tile.body} image={tile.image} isOngiong={tile.onGoing} tileSize='tile-big'/>
                            ))}
                        </div>
                    </div>
                    <div className="body__centerright">
                        <div className="body__rightmain">
                            {centerRight.map((tile, index)=>(
                                <Tiles key={index} title={tile.title} body={tile.body} image={tile.image} isOngiong={tile.onGoing} tileSize='tile-small'/>
                            ))}
                        </div>
                    </div>
                    <div className="body__right">
                        <div className="small-black-box"></div>
                        <div className="long-black-box"></div>
                        <div className="wide-black-box"></div>
                        <div className="wide-black-box"></div>
                    </div>
                </div>
                <div className="examples__footer">
                    <div className="wide-black-box"></div>
                </div>
            </div>
        </div>
    );
}

export default Examples;