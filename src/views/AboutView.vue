<!-- AddMedicine.vue -->

<template>
  <div class="text green">
    <h1>Add Medicine</h1>
    <form @submit.prevent="addMedicine">
      <div>
        <label for="name">Name:</label>
        <input v-model="medicineName" type="text" id="name" required />
      </div>

      <div>
        <label for="box">Box:</label>
        <input v-model="medicineBox" type="number" id="box" required />
      </div>

      <div>
        <label for="price">Price:</label>
        <input v-model="medicinePrice" type="number" id="price" required />
      </div>

      <button type="submit">Add Medicine</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { push, ref as dbRef } from 'firebase/database';
import database from '@/firebase'; // Adjust the path based on your project structure

export default {
  data() {
    return {
      medicineName: '',
      medicineBox: null,
      medicinePrice: null,
    };
  },
  methods: {
    async addMedicine() {
      // Ensure required fields are filled
      if (!this.medicineName || !this.medicineBox || !this.medicinePrice) {
        alert('Please fill in all fields.');
        return;
      }

      // Push data to Firebase
      const medicinesRef = dbRef(database, 'Medicine');
      await push(medicinesRef, {
        Name: this.medicineName,
        box: this.medicineBox,
        price: this.medicinePrice,
      });

      // Clear form after adding
      this.medicineName = '';
      this.medicineBox = null;
      this.medicinePrice = null;

      alert('Medicine added successfully!');
    },
  },
};
</script>

<style scoped>
/* Add styling if needed */
div {
  margin-bottom: 10px; /* Add margin between input fields */
}

label {
  display: block; /* Make labels block elements to appear on a new line */
  margin-bottom: 5px; /* Add margin below labels */
}
.text{
  text-align: center;
}
</style>
