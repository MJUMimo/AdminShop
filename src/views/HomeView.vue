<template>
  <div>
    <CarouselView> </CarouselView>
    <br />
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
        <div class="card">
          <img src="../assets/1.jpg" class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/2.jpg" class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/3.jpg" class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/4.jpg" class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../assets/11.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../assets/22.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../assets/33.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../assets/44.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselView from "../components/Carousel.vue";

export default {
  name: "HomeView",
  components: {
    CarouselView,
  },
};
</script>
