<template>
  <div>
    <div style="display: flex">
      <img v-for="(image,i) in home.images" :src="image" :key="image" :alt="`${home.title} - image ${i}`" width="200" height="150"/>
    </div>
    {{ home.title }}<br>
    ${{ home.pricePerNight }} / night <br>
    <img src="/images/marker.svg" alt="" width="20" height="20">{{ home.location.address }} {{ home.location.city }} {{ home.location.state }} {{ home.location.country }}<br>
    <img src="/images/star.svg" alt="" width="20" height="20">{{ home.reviewValue}}<br>
    {{ home.guests}} guests, {{ home.bedrooms}} rooms, {{ home.beds}} beds, {{ home.bathrooms}} bath<br>
  </div>
</template>

<script>
import homes from '~/data/homes';

export default {
  data() {
    return {
      home: {},
    }
  },
  head() {
    return {
      'title': this.home.title,
      meta: [
        {
          name: 'description',
          content: `${this.home.title} description`,
          hid: 'description',
        }
      ],
    }
  },
  created() {
    const home = homes.find((home) => home.objectID === this.$route.params.id);
    this.home = home;
  }
}
</script>
