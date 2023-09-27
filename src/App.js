import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Aboutus from './components/aboutus/aboutus';
import Contact from './components/contact/contact';
import HomeScreen from './components/Homescreen/homescreen';
import Pagenotfound from './components/pagenotfound';
import Blogs from './components/Services/allservices/blog';
import Books from './components/Services/allservices/books';
import Shop from './components/Services/allservices/shop';
import Videos  from './components/Services/allservices/videos';
import Astronaut from './components/Services/allservices/astronaut';
import SpaceCentres from './components/Services/allservices/spacecentres';
import Quiz from './components/Services/allservices/quiz';
import Games from './components/Services/allservices/games';
import Services from './components/Services/services';
import ScrollToTop from './components/scrolltotop/scrolltotop';
import Kids, { Hats, JacketsSweatshirts, PoloShirts, SpaceSocks, TShirts, Women , Masks , Bedsheets } from './components/Services/allservices/shopsection/shopsection';

const App = () => {
  return (
    <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<HomeScreen />}/>
          <Route exact path="/aboutus" element={<Aboutus />}/>
          <Route exact path="/services" element={<Services />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/blogs" element={<Blogs />}/>
          <Route exact path="/books" element={<Books />}/>
          <Route exact path="/shop" element={<Shop />}/>
          <Route exact path="/videos" element={<Videos />}/>
          <Route exact path="/astronaut" element={<Astronaut />}/>
          <Route exact path="/spacecentres" element={<SpaceCentres />}/>
          <Route exact path="/quiz" element={<Quiz />}/>
          <Route exact path="/games" element={<Games />}/>
          <Route exact path="/shop/kids" element={<Kids />}/>
          <Route exact path="/shop/tshirts" element={<TShirts />}/>
          <Route exact path="/shop/women" element={<Women />}/>
          <Route exact path="/shop/poloshirts" element={<PoloShirts />}/>
          <Route exact path="/shop/jacketsandsweatshirts" element={<JacketsSweatshirts />}/>
          <Route exact path="/shop/spacesocks" element={<SpaceSocks />}/>
          <Route exact path="/shop/hats" element={<Hats /> }/>
          <Route exact path="/shop/masks" element={<Masks /> }/>
          {/* <Route exact path="/shop/" element={}/> */}
          {/* <Route exact path="/shop/" element={}/> */}
          {/* <Route exact path="/shop/" element={}/> */}
          <Route exact path="/shop/bedsheets" element={<Bedsheets />}/>
          <Route path="*" element={<Pagenotfound />}/>
        </Routes>
    </Router>
  );
}

export default App;