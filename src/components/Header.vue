<template>
  
  <div>
      <section class="header d-flex">
          <div class="left-side">
             <div class="logo">
               Portfolio
             </div>
             <div class="image-section">
               <div class="image-outer-layer">
                 <div class="image">
                   <img :src="Myimage" alt="" srcset="">
                 </div>
               </div>
             </div>
             <div class="social-icons">
               
                <div class="all-social-me">
                   <div class="icons facebook">
                     <img src="../assets/images/facebook.png" alt="" srcset="">
                   </div>
                   <div class="icons twitter">
                     <img src="../assets/images/twitter.png" alt="" srcset="">
                   </div>
                   <div class="icons instagram">
                     <img src="../assets/images/instagram.png" alt="" srcset="">
                   </div>
                </div>
             </div>
          </div>
         
          <div class="right-side">

          </div>

      </section>
  </div>

</template>

<script>
import Myimage from '../assets/images/me.jpg';
export default {
    name: 'HeaderComponent',
    data:function(){
      return{
        Myimage: Myimage,
      }
    }

}
</script>

