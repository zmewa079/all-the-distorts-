import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import FunctionalThings from '../FunctionalThings/FunctionalThings'
import StyledThings from '../StyledThings/StyledThings'
import DifferentThings from '../DifferentThings/DifferentThings'
import UniversalThings from '../UniversalThings/UniversalThings'
import RandomThings from '../RandomThings/RandomThings'
import Home from '../Home/Home';


const App = () => {

  const [ramonsThings] = useState ([
    {
    name: "Oil",
    image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bold-and-brash-dazzle-fillinheart.jpg",
    attributes: ["elegant", "Posh", "Pretentious"]
    }
  ])

  const [davidsThings] = useState([
    {
      name: "waffle",
      image: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",  
      attributes: ["tasty", "fluffy", "breakfast", "yummy"],
    },
    {
      name: "giraffe",
      image: "https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",  
      attributes: ["tall", "cool", "fun", "animal", "(David doesn't acually own a giraffe)"], 
    },
    {
      name: "Liam",
      image: "https://i.imgur.com/l2qX34X.jpg",  
      attributes: ["fluffy", "happy", "sleepy", "dumb"], 
    },
    {
      name: "Poptart®",
      image: "https://i.imgur.com/q9zgcaP.jpg",  
      attributes: ["pastry?", "food?", "edible?", "Horrible when toasted!"], 
    },
  ])
  const [shahzadsThings] = useState([
    {
      name: "functional programming",
      image: "https://imgs.xkcd.com/comics/functional.png",  
      attributes: ["efficient", "reusability", "not a taco", "beautiful"],
    },
    {
      name: "React hooks",
      image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      attributes: ["useEffect", "useState", "not a taco", "state's best friend"], 
    },
    {
      name: "BluBlockers",
      image: "https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584",
      attributes: ["very attractive", "useful probably!", "good for viewing tacos", "such hip", "worn by all the cool kids"],
    },
    { 
      name: "Healthy food", 
      image: "https://i.imgur.com/gRxOxsA.jpg", 
      attributes: ["makes you live a long time", "consistent poops", "probably tacos sometimes!", "farm to market"], 
    },
  ])

  const [joshThings] = useState([
    {
      name: "Galaxy",
      image: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw2109a.jpg",
      attributes: ["blue", "swirly", "centering", "vortexial"]
    },
    {
      name: "Nebula",
      image: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/hubble_lightsaber_image2.jpg",
      attributes: ["gassy", "cloudy", "energy stream", "ionized particles"]
    },
    {
      name: "Cluster",
      image: "https://astronomy.com/-/media/Images/News%20and%20Observing/News/2019/01/galaxyclusters.jpg?mw=600",
      attributes: ["chunky", "claustrophobic", "isolated", "family"]
    }
  ])
  const [jansThings] = useState([
    {
      name: "books",
      image: "https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_960_720.jpg",
      attributes: ["fun to read", "hobby", "collectable"]
    },
    {
      name: "coffee",
      image: "https://cdn.pixabay.com/photo/2017/03/17/10/29/coffee-2151200_960_720.jpg",
      attributes: ["strong", "cappuccino", "latte", "americano"]
    },
    {
      name: "music",
      image: "https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg",
      attributes: ["kpop", "pop", "indie", "anything that sounds nice BUT country"]
    },
  ])
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* All the <Route> components should live here */}
        <Route path='/the-functional-things' element={<FunctionalThings things={shahzadsThings} />} />
        <Route path='/the-well-styled-things' element={<StyledThings things={davidsThings} />} />
        <Route path='/the-different-things' element={<DifferentThings things={ramonsThings} />} />
        <Route path='/the-universal-things' element={<UniversalThings things={joshThings} />} />
        <Route path='/the-random-things' element={<RandomThings things={jansThings} />} />
      </Routes>
    </>
  );
}

export default App;
