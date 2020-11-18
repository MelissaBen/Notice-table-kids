<template>
  <q-page>
    <h4 class="text-center">Contactez-nous</h4>
    <div class=" row text-center q-pa-lg">
      <div class="col-lg-5 col-md-6 col-12 ">
        <q-img src="../assets/Contact.png"></q-img>
      </div>
      <div
        class="contact margin q-py-lg col-lg-7 col-md-6 col-12"
        style="max-width: 450px"
      >
        <div class="q-pa-sm q-ma-sm text-center ">
          <h4>Nous ecrire:</h4>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            style="max-width: 400px"
            class=" margin"
          >
            <q-input
              filled
              v-model="name"
              label="Votre nom *"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input
              filled
              v-model="name"
              label="Votre e-mail *"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
            <q-input
              filled
              v-model="name"
              label="Sujet *"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="error_outline" />
              </template>
            </q-input>
            <q-input
              filled
              v-model="text"
              label="Votre message: *"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
              type="textarea"
            >
              <template v-slot:prepend>
                <q-icon name="notes" />
              </template>
            </q-input>

            <div class="q-pt-lg">
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      name: null,
      text: null,
      age: null,

      accept: false
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  }
};
</script>
<style >
.margin {
  margin: auto;
}

.contact {
  box-shadow: 10px 10px 10px 7px #f3e6c6;
}
</style>