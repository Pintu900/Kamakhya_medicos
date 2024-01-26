<!-- MedicineList.vue -->

<template>
  <div>
    <h1 class="green text">Medicine List</h1>
    <div class="scrollable-list">
      <div v-for="(medicine, key) in medicines" :key="key">
      <!-- Add the 'key' property to the 'medicine' object -->
      <WelcomeItem :medicine="{ ...medicine, key }" />
      </div>
  </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { onValue, ref as dbRef } from 'firebase/database';
import database from '@/firebase'; // Adjust the path based on your project structure
import WelcomeItem from '@/components/WelcomeItem.vue';

export default {
  components: {
    WelcomeItem,
  },
  setup() {
    const medicines = ref({});

    const medicinesRef = dbRef(database, 'Medicine');

    onMounted(() => {
      onValue(medicinesRef, (snapshot) => {
        if (snapshot.exists()) {
          medicines.value = snapshot.val();
          
        }
      });
    });

    return {
      medicines,
    };
  },
};
</script>

<style scoped>
.scrollable-list {
  max-height: 500px; /* Set a fixed height for the scrollable section */
  overflow-y: auto; /* Enable vertical scrolling */ /* Example border for visualization */
  padding: 10px; /* Example padding */
}
.text{
  text-align: center;
}
</style>
