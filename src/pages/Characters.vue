<template>
  <div class="users">
    <CharactersList
      @characterSort="characterSort"
      :characters="getCharacters"
    />
    <div class="pagination">
      <button class="pagination__btn" @click="prevPage">&larr;</button>
      <button class="pagination__btn" @click="nextPage">&rarr;</button>
    </div>

    Page: {{ getPageCurrent }}, Length: {{ getPageLength }}
  </div>
</template>

<script>
import CharactersList from "@/components/CharactersList";
export default {
  name: "Characters",
  components: { CharactersList },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("fetchCharacters");
  },
  computed: {
    getCharacters() {
      return this.$store.getters.getCharacters;
    },
    filterCharacters() {
      this.getCharacters;
    },
    getPageCurrent() {
      return this.$store.getters.getPageCurrent;
    },
    getPageLength() {
      return this.$store.getters.getPageLength;
    },
  },
  methods: {
    characterSort(itemSort) {
      this.$store.dispatch("sortCharacters", itemSort);
      this.$store.dispatch("sortOrderCharacters", itemSort);
    },
    prevPage() {
      this.$store.dispatch("prevPage");
    },
    nextPage() {
      this.$store.dispatch("nextPage");
    },
  },
};
</script>

<style lang="scss">
.users {
  padding: 50px 0px 100px 0px;
  font-size: 18px;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0px 0px 0px;

  &__btn {
    margin: 0px 0px 0px 20px;
    width: 100px;
    height: 50px;
    border-radius: 50px;
    background: #958585;
    color: #cacaca;
    font-size: 14px;
    font-weight: bold;

    &:first-child {
      margin: 0;
    }
  }
}
</style>
