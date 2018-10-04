<template>
<!-- Make a frame wrapped slider -->
 <div style="width:400px;height:700px">
      <!-- Configuring slider components -->
      <slider ref="slider" :pages="pages" :sliderinit="sliderinit" @slide='slide' @tap='onTap' @init='onInit'>
          <!-- Set loading -->
          <div slot="loading">loading...</div>
      </slider>
 </div>
</template>
<script>
import slider from 'vue-concise-slider'// import slider components
export default {
    'name': 'lee',
   data () {
      return {
        //Image list
        pages:[
          {
          html: '<img src="./dist/assets/screen1.png" />',
          style: {
            'height': '700px'
            }
          },
          {
            html: '<img src="./dist/assets/screen2.png" />',
            style: {
              'height': '700px'
            }
          },
          {
            html: '<img src="./dist/assets/screen3.png" />',
            style: {
              'height': '700px'
            }
          }
        ],
        //Sliding configuration [obj]
        sliderinit: {
          effect: 'fade',
          currentPage: 0,
          thresholdDistance: 100,
          thresholdTime: 300,
          duration: 300,
          timingFunction: 'ease',
          loop: true,
          autoplay: 4000
        }
      }
    },
    components: {
        slider
    },
    methods: {
      // Listener event
      slide (data) {
        // console.log(data)
      },
      onTap (data) {
        // console.log(data)
      },
      onInit (data) {
        // console.log(data)
      }
    }
}
</script>