<template>
    <div id="notification" class="container-fluid mx-auto justify-content-center">
        <div class="alert alert-primary my-0 mx-auto w-75" role="alert">
            <span class="message"></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#notification{
  position: fixed;
  left: 0;
  top: -100%;
  z-index: 4;
  width: 100%;
  transition: all 600ms ease;
  &.active{
    top: 25px;
  }
}
</style>