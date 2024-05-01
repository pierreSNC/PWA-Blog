import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Newsletter from "../../components/Newsletter/Newsletter";
import Popular from "../../components/Popular/Popular";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {

    return (

        <div>
            <Header />
            <Title />
            <Newsletter />
            <Popular />
            <Footer />
        </div>
    );
};

export default Home;