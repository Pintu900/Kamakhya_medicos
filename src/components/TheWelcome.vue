<template>
  <div>
    <h1 class="green text">Medicine List</h1>
    <div class="search-container">
      <input
        v-model="searchTerm"
        placeholder="Search by name"
        class="search-input"
      />
    </div>
    <div class="scrollable-list">
      <div v-if="searchTerm === ''">
        <!-- If search input is empty, show full list -->
        <div v-for="(medicine, key) in medicines" :key="key">
          <WelcomeItem :medicine="{ ...medicine, key }" />
        </div>
      </div>
      <div v-else>
        <!-- If search input is not empty, show filtered list -->
        <div v-for="(medicine, key) in filteredMedicines" :key="key">
          <WelcomeItem :medicine="{ ...medicine, key }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { onValue, ref as dbRef } from 'firebase/database';
import database from '@/firebase'; // Adjust the path based on your project structure
import WelcomeItem from '@/components/WelcomeItem.vue';

export default {
  components: {
    WelcomeItem,
  },
  setup() {
    const medicines = ref({});
    const searchTerm = ref('');

    const medicinesRef = dbRef(database, 'Medicine');

    onMounted(() => {
      onValue(medicinesRef, (snapshot) => {
        if (snapshot.exists()) {
          medicines.value = snapshot.val();
        }
      });
    });

    const filteredMedicines = computed(() => {
  const lowerSearchTerm = searchTerm.value.toLowerCase().trim();
  
  // Filter medicines based on the lowercase search term
  return Object.entries(medicines.value).reduce((filtered, [key, medicine]) => {
    const medicineName = medicine && medicine.Name ? medicine.Name.toLowerCase() : '';
    
    // If the medicineName includes the lowercase search term, add it to the filtered object
    if (medicineName.includes(lowerSearchTerm)) {
      filtered[key] = medicine;
    }
    
    return filtered;
  }, {});
});

    return {
      medicines,
      searchTerm,
      filteredMedicines,
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
.search-container {
  margin-bottom: 20px; /* Adjust margin as needed */
}

.search-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
}

.search-input:focus {
  border-color: #4caf50; /* Adjust focus color as needed */
}
</style>
