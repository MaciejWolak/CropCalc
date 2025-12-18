import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  template: `
    <footer class="bg-gray-800 text-white py-6 mt-12">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2025 CropCalc - Kalkulatory Rolnicze. Wszystkie prawa zastrzezone.</p>
      </div>
    </footer>
  `,
});
