import Vue from 'vue';
import './concerts.styles.css';
import axios from 'axios';

export default {
    template:`
    <div class="container text-center">
    <h2>Konzerte</h2><br/><br/><br/>
    <div class="row">
      <div class="col-sm-4" v-for="concert in concerts">
        <a class="concertItem" href="#">
          <p><strong>
            {{concert.name}}
          </strong><br/>
          </p>
          <img class="concertImg" src="static/bandmember.jpg" alt="Random Name" width="150" height="150">
        </a>
        <p>
          {{concert.events[0]}}<br/>
          {{concert.events[1]}}
        </p>
      </div>
    </div>
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
