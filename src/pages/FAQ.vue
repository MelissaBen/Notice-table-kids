<template>
  <q-page>
    <div class="q-pa-lg row " style="">
      <div class="col-lg-5 col-md-6 col-12 ">
        <q-img src="../assets/faq.png"></q-img>
      </div>

      <div class="q-py-lg col-lg-7 col-md-6 col-12">
        <banner>Questions fréquentes</banner>
        <faqMenu :getMenuFaq="this.getMenuFaq"></faqMenu>
      </div>
    </div>
    <buttonContact />
  </q-page>
</template>
<script>
import { mapGetters } from "vuex";
import banner from "components/ModalBanner.vue";
import faqMenu from "components/FaqMenu.vue";
import buttonContact from "components/ButtonContact.vue";

export default {
  components: {
    banner,
    faqMenu,
    buttonContact
  },
  computed: {
    ...mapGetters("example", ["getMenuFaq"])
  }
};
</script>

