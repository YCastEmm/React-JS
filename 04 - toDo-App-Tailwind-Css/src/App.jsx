import Footer from "./components/footer";
import Header from "./components/header";
import TareaComputed from "./components/tareaComputed";
import TareaCreate from "./components/tareaCreate";
import TareaFilter from "./components/tareaFooter";
import TareaList from "./components/tareaList";

let App = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat font-custom">
                <Header />

                <main className="container mx-auto mt-4 px-4 josefinFont">
                    <TareaCreate />

                    {/* {TareaList TareaUpdate y TareaDelete} */}
                    <TareaList />

                    {/* {TareaComputed} */}
                    <TareaComputed />

                    {/* {TareaFilter} */}

                    <TareaFilter />
                </main>

                <Footer />
            </div>
        </>
    );
};

export default App;
