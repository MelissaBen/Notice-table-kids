<template>
  <q-page class="q-pa-lg ">
    <div class="flex flex-center">
      <h4>Bienvenue dans le guide de la table kids</h4>
      <p>
        Cette application est utile pour le bon fonctionnement de la table Kids
        . Elle répondra à toutes les questions fréquaements posées, ainsi que
        les astuces qui'il faut connaitre . En cas de problémes , contactez-nous
        !
      </p>
    </div>
    <section class="row">
      <div class=" margin q-pa-lg col-lg-5 col-md-6 col-12 ">
        <q-toolbar class="bg-primary text-white shadow-2">
          <q-toolbar-title class="text-center">Menu </q-toolbar-title>
        </q-toolbar>
        <menuNavigation :getMenuNavigation="this.getMenuNavigation" />
      </div>

      <div class="text-center q-py-lg col-lg-7 col-md-6 col-12">
        <q-img src="../assets/kids1.png" style="max-width: 600px"></q-img>
      </div>
    </section>
    <buttonContact />
  </q-page>
</template>

<script>
import buttonContact from "components/ButtonContact.vue";
import menuNavigation from "components/MenuNavigation.vue";
import { mapGetters } from "vuex";

export default {
  name: "PageIndex",
  components: {
    buttonContact,
    menuNavigation
  },
  computed: {
    ...mapGetters("example", ["getMenuNavigation"])
  }
};
</script>

<style>
.margin {
  margin: auto;
}

p {
  font-size: 25px;
  text-align: center;
  margin: 20px;
  padding: 20px;
}

.list {
  font-size: 20px;
  padding: 10px;
}
</style>