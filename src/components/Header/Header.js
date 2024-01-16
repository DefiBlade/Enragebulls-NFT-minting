import './Header.scss';

import { Link } from 'react-scroll';
import discordIcon from "../../assets/images/discord-1.png";
import twitterIcon from "../../assets/images/twitter-1.png";

const Header = () => {
    return (
        <div className="header">
            <div className="external">
                <a href="https://discord.gg/wyTneEe6" target="_blank" className="link">
                    <img src={ discordIcon} />
                    <div className="link-title">Discord</div>
                </a>
                <a href="https://twitter.com/EnragedBullsNFT" target="_blank" className="link">
                    <img src={ twitterIcon} />
                    <div className="link-title">Twitter</div>
                </a>
            </div>
            <div className="title">ENRAGED TEAM</div>
            <div className="navigation">
                <Link
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    to="team"
                    offset={-70}
                >
                    Team
                </Link>
                <Link
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    to="perks"
                    offset={-70}
                >
                    Perks
                </Link>
                <Link
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    to="roadmap"
                    offset={-70}
                >
                    Roadmap
                </Link>
            </div>
            <div className="collapse">
                <i className="fas fa-bars"></i>
                <div className="collapse-navbar">
                    <Link
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        to="team"
                        offset={-70}
                    >
                        Team
                    </Link>
                    <Link
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        to="perks"
                        offset={-70}
                    >
                        Perks
                    </Link>
                    <Link
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        to="roadmap"
                        offset={-70}
                    >
                        Roadmap
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;