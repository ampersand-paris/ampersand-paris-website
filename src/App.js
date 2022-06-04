import Footer from './Footer'

function App() {
  return (
    <>
      <div className="flex">
        <div className="half full-height flex bg-bright-red">
          <div className="z-index half h-one-hundred flex column just-center side-padding left-menu bg-bright-red">
            <h2 className="white">fermentation CSA</h2>
            <h2 className="white">fermentorship</h2>
            <h2 className="white">recipes</h2>
            <h2 className="white">writings</h2>
            <h2 className="white">FAILSPACE</h2>
          </div>
        </div>
        <div className="full-height full-width flex just-center absolute">
          <img className="ampersand" src="/Images/left-half-ampersand.svg" />
          <img className="ampersand" src="/Images/right-half-ampersand.svg" />
        </div>
        <div className="half full-height flex al-center flex-end txt-al-right bg-white">
          <div className="z-index half h-one-hundred flex column just-center side-padding left-menu bg-white">
            <h2 className="bright-red">portfolio</h2>
            <h2 className="bright-red">resume</h2>
            <h2 className="bright-red"></h2>
            <h2 className="bright-red">writings</h2>
            <h2 className="bright-red">FAILSPACE Design Services</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
