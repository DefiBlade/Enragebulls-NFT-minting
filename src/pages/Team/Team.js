import './Team.scss';
import avatar1 from "../../assets/images/Group-1.png";
import avatar2 from "../../assets/images/Group-2.png";
import avatar3 from "../../assets/images/Group-3.png";
import avatar4 from "../../assets/images/Group-4.png";

const members = [
    {
        avatar: avatar1,
        position: 'Founder',
        name: 'Carriegame',
        profile: 'A highly experienced digital marketer overseeing Enraged Bulls and all NFT and metaverse projects within the incubator programme.'
    },
    {
        avatar: avatar2,
        position: 'Co-Founder',
        name: 'Bob Sebastian',
        profile: 'Finance guy on team. Sports and events experience. Investor relations for incubator programme.'
    },
    {
        avatar: avatar3,
        position: 'Co-Founder',
        name: 'Fritz "Bobby" K',
        profile: 'Experienced businessman with hands on experience in incubator and accelerator programmes.'
    },
    {
        avatar: avatar4,
        position: 'Co-Founder',
        name: 'Jacques Romaine',
        profile: 'Dropout scholar. Entrepreneur with 2 digital platforms sold. Global network of artistes and artists to be commissioned for future NFT / metaverse projects.'
    },
]

const devs = [
    {
        title: 'Developers',
        name: 'Ron & Kirat',
        profile: 'Amazing two developers with experience on other NFT development projects. Masters of codes and gatekeeper to our smart contracts and web integrations.'
    },
    {
        title: 'Designers',
        name: 'Snayopi, Lia & Amelia',
        profile: 'The trinity that will be working on future metaverse projects. With backgrounds in designing several games on mobile, browser and software, they’re ready for the Metaverse.'
    },
    {
        title: 'Community Manager',
        name: 'Jean',
        profile: 'Manages Twitter for Enraged Bulls. Will be taking over the Founder’s Twitter account once launch. Crazy over PUBG, K-Pop. Tweet-worthy.'
    },
]
const Team = () => {
    let index = 0
    return (
        <div className="team" id="team">
            <div className="title">Enraged team</div>
            <div className="team-members">
            { members.map( e => 
                <div className="team-card" key={index ++}>
                    <div className="team-avatar">
                        <img src={e.avatar} />
                    </div>
                    <div className="team-position">
                        <div className="position">{e.position}</div>
                        <div className="name">{e.name}</div>
                    </div>
                    <div className="team-profile">{e.profile}</div>
                </div>
            )}
            </div>
            <div className="devs">
            {devs.map( e => 
                <div className="dev-card" key={index ++}>
                    <div className="dev-card-title">{e.title}</div>
                    <div className="dev-card-name">{e.name}</div>
                    <div className="dev-card-profile">{e.profile}</div>
                </div>
            )}
            </div>
            <div className="entering">
            ENTERING THE METAVERSE WITH <span className="text-span"><strong className="bold-text">YOU!</strong></span>
            </div>
        </div>
    )
}

export default Team;