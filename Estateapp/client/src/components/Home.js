import React from 'react';
import HomeBanner from './HomeBanner';
import HomeIntro from './HomeIntro'
import HomeForSale from './HomeForSale';
import HomeForRent from './HomeForRent'

function Home (){
    return(
    <div className="home">
      <HomeBanner />
      <HomeIntro />
      <HomeForSale />
      <HomeForRent />
    </div>
    )
}
export default Home