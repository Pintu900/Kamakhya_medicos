<!-- EditMedicine.vue -->

<template>
    <div>
      <h2>Edit Medicine</h2>
      <div>
        <!-- Your edit form goes here -->
        <label>Name: </label>
        <input v-model="editedMedicine.Name" />
        <br>
        <label>Box: </label>
        <input v-model="editedMedicine.box" />
        <br>
        <label>Price: </label>
        <input v-model="editedMedicine.price" />
      </div>
      <br>
      <button @click="saveChanges">Save Changes</button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { ref as dbRef, get,set  } from 'firebase/database';
  import database from '@/firebase'; // Adjust the path based on your project structure
  
  export default {
    props: {
      id: String,
    },
    data() {
      return {
        editedMedicine: {},
      };
    },mounted() {
    // Call the async function within mounted using Promise
    this.fetchMedicineData();
  },
    methods: {
        async fetchMedicineData() {
      const medicinesRef = dbRef(database, 'Medicine/'+this.id);
      const snapshot = await get(medicinesRef);
      this.editedMedicine = snapshot.val();
    },
      saveChanges() {
        // Save changes to the database
        const medicinesRef = dbRef(database, 'Medicine/'+this.id);
        // Update the medicine data in the database
        set(medicinesRef, this.editedMedicine);
      
        console.log(this.editedMedicine)
        this.$router.push('/'); // Replace '/' with the actual path of your home page
        alert('Medicine updated successfully!');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styling if needed */
  </style>
  