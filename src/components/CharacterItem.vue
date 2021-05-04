<template>
  <div class="users__card card">
    <div class="card__row">
      <div class="card__img">
        <img :src="data.image" :alt="data.name" />
      </div>
      <div class="card__body">
        <router-link
          :to="{ name: 'CharactersSingle', params: { id: data.id } }"
          class="card__title"
          >{{ data.name }}</router-link
        >
        <p class="card__gender"><span>Gender: </span>{{ data.gender }}</p>
        <p class="card__live"><span>Status: </span>{{ data.status }}</p>
        <p class="card__location">
          <span>Locations: </span>{{ data.location.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterItem",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.card {
  width: 48%;
  background: #513434;
  margin: 0px 0px 20px 0px;
  color: #cacaca;
  border-radius: 10px;

  &__row {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  &__img {
    margin: 0px 30px 0px 0px;
    width: 200px;

    img {
      width: 200px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }

  &__body {
    font-size: 18px;

    p {
      line-height: 20px;
      margin: 0px 0px 10px 0px;

      span {
        font-weight: bold;
        color: #958585;
      }
    }
  }

  &__title {
    font-size: 22px;
    margin: 10px 0px 20px 0px;
    display: block;
    color: #cacaca;

    &:hover {
      color: #b4c64f;
    }
  }

  &__gender {
  }
}
</style>
