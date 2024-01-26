<!-- AddMedicine.vue -->

<template>
  <div class="text green">
    <h1>Add Medicine</h1>
    <form @submit.prevent="addMedicine" class="medicine-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="medicineName" type="text" id="name"  placeholder="Enter name..." required />
      </div>

      <div class="form-group">
        <label for="box">Box:</label>
        <input v-model="medicineBox" type="text" id="box" placeholder="Enter Box Number..." required />
      </div>

      <div class="form-group">
        <label for="price">Price:</label>
        <input v-model="medicinePrice" type="text" id="price" placeholder="Enter Price..." required />
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
      medicineBox: '',
      medicinePrice: '',
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
      this.medicineBox = '';
      this.medicinePrice = '';

      alert('Medicine added successfully!');
    },
  },
};
</script>

<style scoped>
.text {
  text-align: center;
}

.medicine-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out;
}

input:focus {
  outline: none;
  border-color: green;
}

button {
  background-color: green;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: darkgreen;
}

</style>
