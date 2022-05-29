import React from 'react'
import '../components/Cards.css';

const Cards = () => {
     return (
          <section className="cards-section">
               <h1>Sneak Peek of Wonder!</h1>
               <div className="wrapper">
                    <div className='images image-1'>
                         <img src={require('./ImagesScenery/Albay.jpg').default} alt="Travel Image" />
                         <h2 className='image1-text'>MAYON VOLCANO, ALBAY</h2>
                    </div>
                    <div className='images image-2'>
                         <img src={require('./ImagesScenery/Bohol.jpg').default} alt="Travel Image" />
                         <h2 className='image2-text'>CHOCOLATE HILLS, BOHOL</h2>
                    </div>
                    <div className='images image-3'>
                         <img src={require('./ImagesScenery/Palawan.jpg').default} alt="Travel Image" />
                         <h2 className='image3-text'>EL NIDO, PALAWAN</h2>
                    </div>
                    <div className='images image-4'>
                         <img src={require('./ImagesScenery/Sagada.jpg').default} alt="Travel Image" />
                         <h2 className='image4-text'>HANGING COFFINS, SAGADA</h2>
                    </div>
                    <div className='images image-5'>
                         <img src={require('./ImagesScenery/Boracay.jpg').default} alt="Travel Image" />
                         <h2 className='image5-text'>BORACAY, AKLAN</h2>
                    </div>
                    <div className='images image-6'>
                         <img src={require('./ImagesScenery/Cebu.jpg').default} alt="Travel Image" />
                         <h2 className='image6-text'>MALAPASCUA ISLAND, CEBU</h2>
                    </div>
                    <div className='images image-7'>
                         <img src={require('./ImagesScenery/Ifugao.jpg').default} alt="Travel Image" />
                         <h2 className='image7-text'>BANAUE RICE TERRACES, IFUGAO</h2>
                    </div>
                    <div className='images image-8'>
                         <img src={require('./ImagesScenery/Mindoro.jpg').default} alt="Travel Image" />
                         <h2 className='image8-text'>PUERTO GALERA, MINDORO</h2>
                    </div>
               </div>
          </section>
          )
}

export default Cards
