import { About } from "../Components/About";
import { Banner } from "../Components/Banner";


const Home = () =>{
    return(
        <div className="pt-8">
          <Banner />
          <About />
        </div>
    )
}

export default Home;