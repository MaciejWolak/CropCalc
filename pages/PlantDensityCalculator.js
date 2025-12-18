import { defineComponent } from "vue";

export default defineComponent({
  name: "PlantDensityCalculator",
  data() {
    return {
      inputs: {
        plantsCount: 20,
        measuredSegment: 100,
        rowSpacing: 25,
      },
    };
  },
  computed: {
    plantsPerMeter() {
      if (this.inputs.measuredSegment === 0) return 0;
      return (
        (100 / this.inputs.measuredSegment) *
        this.inputs.plantsCount
      ).toFixed(1);
    },
    plantsPerSquareMeter() {
      if (this.inputs.measuredSegment === 0 || this.inputs.rowSpacing === 0)
        return 0;
      return (
        (10000 / this.inputs.measuredSegment / this.inputs.rowSpacing) *
        this.inputs.plantsCount
      ).toFixed(1);
    },
    plantsPerHectare() {
      if (this.inputs.measuredSegment === 0 || this.inputs.rowSpacing === 0)
        return 0;
      return (
        (100000000 / this.inputs.measuredSegment / this.inputs.rowSpacing) *
        this.inputs.plantsCount
      ).toFixed(0);
    },
  },
  template: `
    <div class="space-y-8">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-2">Kalkulator obsady roslin</h1>
        <p class="text-gray-600">Oblicz liczbe roslin na jednostke pola</p>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold mb-6" style="color: var(--secondary)">Parametry obsady</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="grid grid-cols-2 gap-6">
            <div class="lg:col-span-2">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Ilosc roslin na odcinku (szt)</label>
              <input v-model.number="inputs.plantsCount" type="number" step="1" min="0" class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none" />
              <p class="text-xs text-gray-500 mt-1">Liczba roslin zliczona na zmierzonym odcinku</p>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Zmierzony odcinek (cm)</label>
              <input v-model.number="inputs.measuredSegment" type="number" step="1" min="1" class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none" />
              <p class="text-xs text-gray-500 mt-1">Dlugosc zmierzonego odcinka w cm</p>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Odcinek miedzy rzedami (cm)</label>
              <input v-model.number="inputs.rowSpacing" type="number" step="0.1" min="0.1" class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none" />
              <p class="text-xs text-gray-500 mt-1">Odleglosc miedzy rzedami w cm</p>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="rounded-lg p-8 border-2 w-full shadow-md" style="background: linear-gradient(to bottom right, var(--light), rgba(85, 80, 242, 0.1)); border-color: var(--primary)">
              <p class="text-gray-700 text-sm font-bold uppercase tracking-wide mb-3 text-center">Obsada (szt/m2)</p>
              <p class="text-5xl font-black text-center" style="color: var(--primary)">{{ plantsPerSquareMeter }}</p>
              <p class="text-xs text-gray-600 mt-3 font-semibold text-center">roslin na m2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});
