import Foother from "./component/foother/footer";
import Header from "./component/header/header";
import Home from "./component/home/home";
import BookContextProvider from "./context/bookContext";


export default function App() {
  return (
    <div className="container">
      <BookContextProvider>
        <Header />
        <Home />
      </BookContextProvider>
      <Foother />
    </div>
  )
}