<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="orange">{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (max-width: 1023px) {
  h1 {
    font-size: 2rem; /* Decrease font size for h1 on smaller screens */
  }

  h3 {
    font-size: 1rem; /* Decrease font size for h3 on smaller screens */
  }

  .greetings h1,
  .greetings h3 {
    text-align: center; /* Center text on smaller screens */
  }
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
