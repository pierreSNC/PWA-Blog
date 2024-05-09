import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Newsletter from "../../components/Newsletter/Newsletter";
import Popular from "../../components/Popular/Popular";
import Footer from "../../components/Footer/Footer";
import LastPostsSection from "../../components/LastPostsSection/LastPostsSection";

const Home: React.FC = () => {

    return (

        <main>
            <Header />
            <Title />
            <LastPostsSection />
            <Newsletter />
            <Popular />
            <Footer />
        </main>
    );
};

export default Home;