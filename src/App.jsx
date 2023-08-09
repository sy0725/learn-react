import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Products from "./pages/Products";

        
{/* 홈 페이지 : index.html */}
{/* 소개 페이지 : about.html */}
{/* 제품 목록 페이지 : products.html */}
{/* 의뢰 페이지 : contact.html */}

function App() {
    return (
      <div className="App">
        <RootLayout>
        <Home />
        <About / >
        <Products /> 
        <Contact/>
        </RootLayout>
      </div>
    );
  }



export default App;
