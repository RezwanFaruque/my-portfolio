<template>
  <div id="app">
    
     <HeaderComponent></HeaderComponent>
     <WhatGiveYou></WhatGiveYou>
     <Portfolio></Portfolio>
     <Testimonial></Testimonial>
     <Footer></Footer>
     
  </div>
</template>

<script>

import HeaderComponent from './components/Header';
import WhatGiveYou from './components/WhatGiveYou';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    WhatGiveYou,
    Portfolio,
    Testimonial,
    Footer,
    
  }
}
</script>

