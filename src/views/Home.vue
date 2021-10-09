<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>{{ module.page_title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ module.page_title }}</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <div class="row">
          <img :src="logo" alt="">
        </div>
        <strong>{{ module.title }}</strong>
        <p>{{ module.text_1 }} <a target="_blank" rel="noopener noreferrer" :href="module.link">{{ module.text_2 }}</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import logo from '@/assets/img/logo.png'
import {mapState} from "vuex";

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  data(){
    return {
      logo: logo
    }
  },
  computed: {
    ...mapState(['module'])
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>