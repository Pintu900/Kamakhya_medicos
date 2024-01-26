<!-- MedicineListItem.vue -->

<template>
 <div class="medicine-item">
  <div class="medicine-details">
    <span>Name: {{ medicine.Name }} </span>
    <p>
      <span>Box: {{ medicine.box }} </span>
      <span>Price: {{ medicine.price }} </span>
    </p>
  </div>
  <div class="delete-container">
    <button @click="deleteMedicine" class="delete-icon">
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
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
span {
  margin-right: 10px; /* Adjust the margin value as needed */
}

.medicine-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.medicine-details {
  display: inline-block;
}

.delete-container {
  display: inline-block;
}
</style>
