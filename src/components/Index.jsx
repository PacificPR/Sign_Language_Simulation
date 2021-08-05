import React from 'react';
import {Link} from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css"
import i0 from '../img/i0.png';
import i1 from '../img/i1.png';
import i2 from '../img/i2.png';
function Index(){
    return (
      <div>
        <h1 style={{ 
          display: 'flex', justifyContent:'center', alignItems:'center', height: '10vh',
          color:'yellow', backgroundColor:'rgba(0,0,0,0.3)', fontFamily:'Playlist'
          }}> SIGN LANGUAGE PROCESSING AND SIMULATION </h1>
        <AliceCarousel autoPlay='true' infinite='true' autoPlayInterval="1500">
          <img src={i0} alt='Image0' className="sliderimg"/>
          <img src={i1} alt='Image1' className="sliderimg"/>
          <img src={i2} alt='Image2' className="sliderimg"/>
        </AliceCarousel>

        <h1 style={{ 
          display: 'flex', height: '4vh',
          color:'Black', fontFamily:'Sans-serif'
          }}>  About this Project : </h1>
        <p style={{
          fontFamily:'Playlist', fontSize:'2vh', color:'lightblack', backgroundColor:'yellow'
        }}>
          <ul>
            <li>Sign language plays an important part in the hearing/speech impaired persons life as it is the prime medium of communication for them.</li> <li>However, 
        not everyone understands the sign language hence, it becomes difficult for the disabled to communicate in day-to-day life.</li> <li> The sign language constitutes 
        of various hand gestures which can represent various words and expressions.</li> <li> Our aim is to support a reliable communication interpretation program 
        for interpreting sign language and converting it to a readable output.</li> <li>This web app will take you through this process.</li>
          </ul>
        </p>

        <h1>Start Processing Sign Language :</h1>
        <br />
        <p style={{
          fontFamily:'Playlist', fontSize:'2vh', color:'lightblack', backgroundColor:'yellow'
        }}>
          <ul>
            <li>This button will lead to a page where you would be asked to give permission for your webcam</li> <li>On getting access to your webcam,
            the web app will take a live feed from it and send the frames to backend .</li> <li> The ML model will process these images and output the 
            respective signs translation and it's accuracy in real time.</li>
          </ul>
        </p>
        <br />
        <button className='bt1' style={{
          marginLeft:'50rem',
          width:'10rem'
        }}><Link style={{
          textDecoration:'none'
        }} to={"/sign"}>Start</Link></button>
        <br />
        <br />
        <br />
    </div>
    )
}

export default Index;
