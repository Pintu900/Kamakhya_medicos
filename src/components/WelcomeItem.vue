<!-- MedicineListItem.vue -->

<template>
  <div class="medicine-item">
    <span>Name: {{ medicine.Name }} </span>
    <p>
    <span>Box: {{ medicine.box }} </span>
    <span>Price: {{ medicine.price }} </span>
    </p>
    <button @click="deleteMedicine" class="delete-icon">
        <i class="fas fa-trash-alt"></i>
      </button>
  </div>
</template>

<script>
import { remove, ref as dbRef } from 'firebase/database';
import database from '@/firebase'; 
export default {
  props: {
    medicine: Object, // Assuming 'medicine' is passed as a prop
  },
 
  methods: {
    async deleteMedicine() {
      const confirmation = window.confirm('Are you sure you want to delete this medicine?');

      if (confirmation) {
      const medicinesRef = dbRef(database, 'Medicine/'+this.medicine.key);
      await remove(medicinesRef);
      alert('Medicine deleted successfully!');
      }
    },
  },
};
</script>

<style scoped>
.medicine-item {
  border: 1px solid #ccc; /* Add a border to the div */
  padding: 10px; /* Example padding */
  margin-bottom: 10px; /* Example margin bottom */
}
span {
  margin-right: 10px; /* Adjust the margin value as needed */
}
</style>
