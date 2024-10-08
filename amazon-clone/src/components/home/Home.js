import React from 'react'
import './home.css';
import Product from '../product/Product';
import banner_image from '../../images/banner.jpg'

const Home = () => {
  return (
    <div className='home'>
        <div className='home_container'>
            <img
            className='home_image'
            src={banner_image}
            alt='banner image'
            />
            <div className='home_row'>
                <Product 
                title="The Easy 5-Ingredient Slow Cooker Cookbook: 100 Delicious No-Fuss Meals for Busy People"
                price={11}
                rating={3}
                img="https://m.media-amazon.com/images/I/91H032PHDzL._SY522_.jpg"/>

                <Product
                title="Counting Miracles: A Novel"
                price={20.29}
                rating={4}
                img="https://m.media-amazon.com/images/I/91-GiHt82EL._SL1500_.jpg"/>
            </div>

            <div className='home_row'>
                <Product 
                title="BAIMEI IcyMe Jade Roller & Gua Sha, Face Roller Redness Reducing Skin Care Tools, Self Care Pink Gift"
                price={12.99}
                rating={5}
                img="https://m.media-amazon.com/images/I/61bAqal3ENL._SL1500_.jpg"/>

                <Product
                title="H&B Lifting & Firming Silk Serum Anti-Aging Face Serum Collagen Gotu Kola"
                price={11}
                rating={3}
                img="https://m.media-amazon.com/images/I/71s57WcgPbL._SX679_.jpg"/>

                <Product
                title="YRY Smart Breath Odor Detector, Health Status Alarm, Portable Halimeter for Bad Breath, Precise MEMS Sensor VSC Detection"
                price={14}
                rating={5}
                img="https://m.media-amazon.com/images/I/51StZ+AUhQL._AC_SX679_.jpg"/>
            </div> 

            <div className='home_row'>
                <Product 
                title="Crock-Pot 7 Quart Oval Manual Slow Cooker, Stainless Steel (SCV700-S-BR), Versatile Cookware for Large Families or Entertaining"
                price={29.99}
                rating={4}
                img="https://m.media-amazon.com/images/I/81s15a8-lGL._AC_SX679_.jpg"/>

                <Product
                title="Ninja GR101 Sizzle Smokeless Indoor Grill & Griddle, 14'' Interchangeable Nonstick Plates, Dishwasher-Safe Removable Mesh Lid, 500F Max Heat"
                price={83.06}
                rating={3}
                img="https://m.media-amazon.com/images/I/81ngtMEQgoL._AC_SX679_.jpg"/>

                <Product
                title="Magic Bullet Blender, Small, Silver, 11 Piece Set"
                price={37.57}
                rating={3}
                img="https://m.media-amazon.com/images/I/61w2Tj7r0BL._AC_UF894,1000_QL80_FMwebp_.jpg"/>
            </div>  

            <div className='home_row'>
                <Product 
                title="NUBWO G06 Dual Wireless Gaming Headset with Microphone for PS5, PS4, PC, Mobile, Switch: 2.4GHz Wireless + Bluetooth - 100 Hr Battery "
                price={12.99}
                rating={4}
                img="https://m.media-amazon.com/images/I/61hRlwVl79L._AC_SX679_.jpg"/>

                
            </div>
        </div>
        
    </div>
  )
}

export default Home