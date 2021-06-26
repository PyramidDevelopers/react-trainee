import Dhruv from "../../assets/dhruv-shetty.png";
import Samarth from "../../assets/samarth-kashyap.png";
import Ayush from "../../assets/ayush-kiran.png";
import Ankit from "../../assets/ankit-mallya.png";
import Images from "./Images";
import "./Team.css";

const Team = () => {
    const teams = [
        {title: "Dhruv Shetty", url:Dhruv, desig: "Business Analyst & Core Developer"},
        {title: "Samarth Kashyap", url:Samarth, desig: "Business & Strategy"},
        {title: "Ayush Kiran", url:Ayush, desig: "Lead Designer"},
        {title: "Ankit Mallya", url:Ankit, desig: "Legal"},
    ];

    return (
        <div className="team" id="fifth">
            <div className="team__title">OUR TEAM</div>
            <div className="team__body">
                <div className="body__mainteam">
                <div className="team__left">
                    <div className="team__left__boxes">
                        <div className="small-black-invisible-box mobile"></div>
                        <div className="small-black-box mobile"></div>
                    </div>
                    <div className="long-black-box mobile"></div>
                </div>
                <div className="team__middle">
                    {teams.map((team, index)=>(
                        <Images title={team.title} url={team.url} desig={team.desig} key={index}/>
                    ))}
                </div>
                <div className="team__right">
                    <div className="wide-black-box mobile"></div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Team;