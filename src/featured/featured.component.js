import Vue from 'vue';
import './featured.styles.css';
import axios from 'axios';

export default {
    template: `
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="static/ny.jpg" alt="New York">
        <div class="carousel-caption">
          <h3>Featured</h3>
        </div>
      </div>
      <div class="item" v-for="concert in concerts" :key="concert.id" v-if="concert.featured">
        <img v-bind:src="'static/' + concert.featuredImage" alt="Something">
        <div class="carousel-caption">
          <h3>{{concert.name}}</h3>
        </div>
      </div>
    </div>

    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`,

    data() {
        return {
            concerts: []
        }
    },

    mounted() {
        axios({ method: "GET", "url": "static/concerts.json" }).then(result => {
            this.concerts = result.data["concerts"];
            console.log(this.concerts)
        }, error => {
            console.error(error);
        });
    }
}