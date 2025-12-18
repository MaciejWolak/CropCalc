import { defineComponent } from "vue";

export default defineComponent({
  name: "DryingCalculator",
  data() {
    return {
      inputs: {
        initialMass: 1000,
        initialMoisture: 20,
        finalMoisture: 14,
      },
    };
  },
  computed: {
    dryMassInitial() {
      return (
        (this.inputs.initialMass * (100 - this.inputs.initialMoisture)) /
        100
      ).toFixed(2);
    },
    finalMass() {
      const dryMass =
        (this.inputs.initialMass * (100 - this.inputs.initialMoisture)) / 100;
      const finalMassValue =
        (dryMass * 100) / (100 - this.inputs.finalMoisture);
      return finalMassValue.toFixed(2);
    },
    waterLost() {
      return (this.inputs.initialMass - this.finalMass).toFixed(2);
    },
    massLossPercent() {
      return ((this.waterLost / this.inputs.initialMass) * 100).toFixed(1);
    },
  },
  template: `
    <div class="space-y-8">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-2">Kalkulator suszenia kukurydzy</h1>
        <p class="text-gray-600">Oblicz mase kukurydzy po wysuszeniu</p>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold mb-6" style="color: var(--secondary)">Parametry suszenia</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="grid grid-cols-2 gap-6">
            <div class="lg:col-span-2">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Masa poczatkowa (kg)</label>
              <input v-model.number="inputs.initialMass" type="number" step="1" min="1" class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none" />
              <p class="text-xs text-gray-500 mt-1">Masa kukurydzy przed suszeniem</p>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Wilgotnosc poczatkowa (%)</label>
              <input v-model.number="inputs.initialMoisture" type="number" step="0.1" min="0" max="100" class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none" />
              <p class="text-xs text-gray-500 mt-1">Wilgotnosc przed suszeniem</p>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Wilgotnosc koncowa (%)</label>
              <input v-model.number="inputs.finalMoisture" type="number" step="0.1" min="0" max="100" class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none" />
              <p class="text-xs text-gray-500 mt-1">Docelowa wilgotnosc po suszeniu</p>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="rounded-lg p-8 border-2 w-full shadow-md" style="background: linear-gradient(to bottom right, var(--light), rgba(85, 80, 242, 0.1)); border-color: var(--primary)">
              <p class="text-gray-700 text-sm font-bold uppercase tracking-wide mb-3 text-center">Masa koncowa</p>
              <p class="text-5xl font-black text-center" style="color: var(--primary)">{{ finalMass }}</p>
              <p class="text-xs text-gray-600 mt-3 font-semibold text-center">kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});
