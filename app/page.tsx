import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Main from "./_components/Main";

const page = () => {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Main />
      </main>

      <Footer />
    </>
  );
};

export default page;
