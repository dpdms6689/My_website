import {Link} from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import PostList from "components/PostList";
import Carousel from "components/carousel";

export default function Home(){
    return (
        <div>
            <Header />
            <Carousel />
            <PostList/>
            <Footer/>
        
</div>
            
    )
}
