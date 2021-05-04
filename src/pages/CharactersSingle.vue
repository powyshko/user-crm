<template>
  <div class="item">
    <div class="item__body">
      <div class="item__img">
        <img :src="character.image" :alt="character.name" />
      </div>
      <div class="item__content">
        <div class="item__title">
          {{ character.name }}
        </div>
        <div class="item__status">
          <span>Status:</span> {{ character.status }}
        </div>
        <div class="item__gender">
          <span>Gender:</span> {{ character.gender }}
        </div>
        <div class="item__location">
          <span>Location:</span> {{ character.location.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CharactersSingle",
  data() {
    return {
      character: {},
    };
  },
  created() {
    let id = this.$route.params.id;
    this.character = this.$store.getters.getCharactersID(id);
    if (this.character == null) {
      this.fetchCharacter();
    }
  },
  methods: {
    fetchCharacter() {
      let id = this.$route.params.id;
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => {
          this.character = res.data;
          console.log(this.character);
        });
    },
  },
};
</script>

<style lang="scss">
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background: #513434;
  margin: 50px auto 0px;
  padding: 20px;
  border-radius: 10px;
  color: #cacaca;

  &__body {
    text-align: center;
    font-size: 22px;
  }

  &__img {
    margin: 0px 0px 20px 0px;

    img {
      width: 200px;
      border-radius: 50%;
    }
  }

  &__content {
  }

  &__title {
    font-size: 32px;
    color: #b4c64f;
    margin: 0px 0px 20px 0px;
  }

  &__status {
    margin: 0px 0px 5px 0px;
    span {
      margin: 0px 5px 0px 0px;
      font-weight: bold;
      color: #958585;
    }
  }

  &__gender {
    margin: 0px 0px 5px 0px;
    span {
      margin: 0px 5px 0px 0px;
      font-weight: bold;
      color: #958585;
      display: inline-block;
    }
  }

  &__location {
    margin: 0px 0px 5px 0px;
    span {
      margin: 0px 5px 0px 0px;
      font-weight: bold;
      color: #958585;
    }
  }
}
</style>
