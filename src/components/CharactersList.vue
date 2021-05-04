<template>
  <div class="users__body">
    <div class="users__header">
      <div class="users__filter">
        Filter:
        <span class="users__sort" @click="sort('name')">Name &darr;</span
        ><span class="users__sort" @click="sort('gender')">Gender &darr;</span>
      </div>
    </div>
    <div class="users__content">
      <div class="users__container">
        <CharacterItem
          v-for="character in characters"
          :key="character.id"
          :data="character"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CharacterItem from "./CharacterItem";

export default {
  name: "CharactersList",
  components: { CharacterItem },
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
  methods: {
    sort(itemSort) {
      this.$emit("characterSort", itemSort);
    },
  },
};
</script>

<style lang="scss">
.users {
  &__body {
  }

  &__header {
  }

  &__filter {
  }

  &__sort {
    margin: 0px 0px 0px 20px;
    cursor: pointer;

    &:first-child {
      margin: 0px 0px 0px 5px;
    }
  }

  &__content {
    padding: 50px 0px 0px 0px;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__card {
  }
}
</style>
