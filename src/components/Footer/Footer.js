import './Footer.scss';
import discordIcon from "../../assets/images/discord-1.png";
import twitterIcon from "../../assets/images/twitter-1.png"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-title">ENRAGED BULLS</div>
            <div className="footer-link">
                <a className="link" href="https://discord.gg/wyTneEe6" target="_blank">
                    <img src={ discordIcon } />
                    <div className="link-label">Discord</div>
                </a>
                <a className="link" href="https://twitter.com/EnragedBullsNFT" target="_blank">
                    <img src={ twitterIcon } />
                    <div className="link-label">Twitter</div>
                </a>
            </div>
            <div className="footer-privacy">
                Privacy Policy
            </div>
        </div>
    );
}

export default Footer;