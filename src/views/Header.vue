<template>
  <header class="header">
    <div class="wrapper">
      <div class="header__row">
        <div class="header__logo">user-crm</div>
        <nav class="header__menu menu">
          <router-link :to="{ name: 'Home' }" class="menu__link"
            >Home</router-link
          >
          <router-link :to="{ name: 'Characters' }" class="menu__link"
            >Characters</router-link
          >
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.header {
  padding: 10px 0px 10px 0px;
  background: #513434;
  color: #cacaca;

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  }

  &__logo {
    font-size: 22px;
    text-transform: uppercase;
  }

  &__menu {
    display: flex;
    justify-content: flex-end;
  }
}
.menu {
  &__link {
    font-size: 18px;
    text-decoration: none;
    margin: 0px 10px 0px 0px;
    color: #cacaca;

    &.router-link-exact-active {
      font-weight: bold;
      text-decoration: underline;
    }

    &:last-child {
      margin: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
