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
@keyframes fadeIn {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}

.greetings {
  animation: fadeIn 3s linear infinite; /* Use the fadeIn animation with a duration of 2 seconds, linear timing function, and make it infinite */
}
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
    font-size: 1.5rem; /* Decrease font size for h1 on smaller screens */
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
