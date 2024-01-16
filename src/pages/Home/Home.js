import './Home.scss';
import Mint from '../Mint/Mint';
import Team from '../Team/Team';
import Perks from '../Perks/Perks';
import Roadmap from '../Roadmap/Roadmap';

const Home = () => {
    return (
        <>
            <Mint />
            <Team />
            <Perks />
            <Roadmap />
        </>
    );
}

export default Home;