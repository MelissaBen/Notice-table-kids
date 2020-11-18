<template>
  <q-page>
    <section class="row  q-pa-lg q-ma-lg">
      <div class=" margin  col-lg-5 col-md-6 col-12 ">
        <q-toolbar class="bg-primary text-white shadow-2">
          <q-toolbar-title class="text-center">Menu </q-toolbar-title>
        </q-toolbar>
        <menuNavigation :getMenuNavigation="this.getMenuNavigation" />
      </div>
      <div class=" margin col-lg-5 col-md-6 col-12 ">
        <q-toolbar class="bg-primary text-white shadow-2">
          <q-toolbar-title class="text-center">Menu </q-toolbar-title>
        </q-toolbar>

        <q-list dense bordered padding class="rounded-borders">
          <q-item clickable v-ripple>
            <q-item-section>
              Item
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
              Item
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
              Item
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </section>
    <section class="q-pa-sm q-ma-lg ok">
      <q-carousel
        v-model="slide"
        swipeable
        animated
        control-color="purple"
        navigation
        padding
        arrows
        height="400px"
        class="text-purple rounded-borders "
      >
        <p>Une table pour tous les enfants</p>
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <p>Une table pour tous les enfants</p>
          <q-icon name="style" size="56px" />

          <div class="q-mt-md text-center text-black">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center text-black">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center text-black">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center text-black">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </section>
  </q-page>
</template>

<script>
import menuNavigation from "components/MenuNavigation.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      slide: "style",
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."
    };
  },
  components: {
    menuNavigation
  },
  computed: {
    ...mapGetters("example", ["getMenuNavigation"])
  }
};
</script>

<style  scoped>
.ok {
  background-color: rgb(181, 209, 181);
  margin: auto;
  width: 80%;
}

p {
  font-size: 25px;
  text-align: center;
}
</style>