<template>
  <q-list class="list" bordered>
    <q-item
      v-for="item in getMenuNavigation"
      :key="item.label"
      :to="item.to"
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-avatar :color="item.color" text-color="white" :icon="item.icon" />
      </q-item-section>

      <q-item-section>{{ item.label }} </q-item-section>
    </q-item>
  </q-list>
</template>
<script>
export default {
  props: ["getMenuNavigation"]
};
</script>