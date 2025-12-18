import { defineComponent } from "vue";

export default defineComponent({
  name: "SprayCalculator",
  data() {
    return {
      inputs: {
        dosage: 1,
        area: 1,
        waterDosage: 200,
        tankCapacity: 300,
      },
    };
  },
  computed: {
    totalChemical() {
      return (this.inputs.dosage * this.inputs.area).toFixed(2);
    },
    totalWater() {
      return (this.inputs.waterDosage * this.inputs.area).toFixed(2);
    },
    numberOfFills() {
      return Math.ceil(this.totalWater / this.inputs.tankCapacity);
    },
    fillsTable() {
      const fills = [];
      const totalChemical = parseFloat(this.totalChemical);
      const totalWater = parseFloat(this.totalWater);
      const tankCapacity = this.inputs.tankCapacity;
      const numberOfFills = Math.ceil(totalWater / tankCapacity);
      let remainingWater = totalWater;
      for (let i = 1; i <= numberOfFills; i++) {
        const waterInFill = Math.min(remainingWater, tankCapacity);
        const chemicalInFill = (waterInFill / totalWater) * totalChemical;
        const hectaresCoveredByFill =
          (waterInFill / totalWater) * this.inputs.area;
        fills.push({
          fill: i,
          water: waterInFill.toFixed(2),
          chemical: chemicalInFill.toFixed(2),
          hectares: hectaresCoveredByFill.toFixed(2),
        });
        remainingWater -= waterInFill;
      }
      return fills;
    },
    summaryTotals() {
      let totalWaterSum = 0;
      let totalChemicalSum = 0;
      let totalHectares = 0;
      this.fillsTable.forEach((fill) => {
        totalWaterSum += parseFloat(fill.water);
        totalChemicalSum += parseFloat(fill.chemical);
        totalHectares += parseFloat(fill.hectares);
      });
      return {
        water: totalWaterSum.toFixed(2),
        chemical: totalChemicalSum.toFixed(2),
        hectares: totalHectares.toFixed(2),
      };
    },
  },
  template: `
    <div class="space-y-8">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-2">Kalkulator opryskow</h1>
        <p class="text-gray-600">Oblicz ilosci srodka i wody potrzebne do opryskania pola</p>
      </div>
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold mb-6" style="color: var(--secondary)">Parametry oprysku</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="grid grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Dawka srodka (l/ha)</label>
              <input v-model.number="inputs.dosage" type="number" step="0.1" min="0" class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none" style="focus:border-color: var(--secondary)" />
              <p class="text-xs text-gray-500 mt-1">Ilosc srodka na hektar</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Areal pola (ha)</label>
              <input v-model.number="inputs.area" type="number" step="0.1" min="0" class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none" style="focus:border-color: var(--secondary)" />
              <p class="text-xs text-gray-500 mt-1">Wielkosc pola do opryskania</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Dawka wody (l/ha)</label>
              <input v-model.number="inputs.waterDosage" type="number" step="1" min="0" class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none" style="focus:border-color: var(--secondary)" />
              <p class="text-xs text-gray-500 mt-1">Ilosc wody na hektar</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Pojemnosc zbiornika (l)</label>
              <input v-model.number="inputs.tankCapacity" type="number" step="1" min="1" class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none" style="focus:border-color: var(--secondary)" />
              <p class="text-xs text-gray-500 mt-1">Pojemnosc zbiornika opryskiwacza</p>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="rounded-lg p-8 border-2 w-full shadow-md" style="background: linear-gradient(to bottom right, var(--light), rgba(85, 80, 242, 0.1)); border-color: var(--primary)">
              <p class="text-gray-700 text-sm font-bold uppercase tracking-wide mb-3 text-center">Calkowita ilosc SOR</p>
              <p class="text-5xl font-black text-center" style="color: var(--primary)">{{ totalChemical }}</p>
              <p class="text-xs text-gray-600 mt-3 font-semibold text-center">litry</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold mb-6" style="color: var(--secondary)">Tabela napelniania zbiornika</h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b-2" style="background-color: var(--light); border-color: var(--secondary)">
                <th class="px-6 py-3 text-left font-bold text-gray-800">Napelnienie</th>
                <th class="px-6 py-3 text-right font-bold text-gray-800">Woda (l)</th>
                <th class="px-6 py-3 text-right font-bold text-gray-800">SOR (l)</th>
                <th class="px-6 py-3 text-right font-bold text-gray-800">ha</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(fill, index) in fillsTable" :key="index" class="border-b border-gray-200 hover:bg-gray-50">
                <td class="px-6 py-3 font-semibold text-gray-700">{{ fill.fill }}</td>
                <td class="px-6 py-3 text-right font-semibold" style="color: var(--accent)">{{ fill.water }}</td>
                <td class="px-6 py-3 text-right font-semibold" style="color: var(--primary)">{{ fill.chemical }}</td>
                <td class="px-6 py-3 text-right font-semibold" style="color: var(--secondary)">{{ fill.hectares }}</td>
              </tr>
              <tr class="border-t-2 font-bold" style="background-color: var(--light); border-color: var(--secondary)">
                <td class="px-6 py-4 text-gray-800">Suma</td>
                <td class="px-6 py-4 text-right" style="color: var(--accent)">{{ summaryTotals.water }}</td>
                <td class="px-6 py-4 text-right" style="color: var(--primary)">{{ summaryTotals.chemical }}</td>
                <td class="px-6 py-4 text-right" style="color: var(--secondary)">{{ summaryTotals.hectares }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
});
