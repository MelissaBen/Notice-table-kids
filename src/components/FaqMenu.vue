<template>
  <div>
    <q-list v-for="item in getMenuFaq" :key="item.label" bordered class="">
      <q-expansion-item
        expand-separator
        :icon="item.icon"
        :label="item.Question"
      >
        <q-card>
          <q-card-section>
            {{ item.Reponse }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>
<script>
export default {
  props: ["getMenuFaq"]
};
</script>