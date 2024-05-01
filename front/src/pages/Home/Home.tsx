import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Newsletter from "../../components/Newsletter/Newsletter";
import Popular from "../../components/Popular/Popular";

const Home: React.FC = () => {

    return (

        <div>
            <Header />
            <Title />
            <Newsletter />
            <Popular />
        </div>
    );
};

export default Home;