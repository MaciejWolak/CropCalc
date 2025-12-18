import { defineComponent } from "vue";

export default defineComponent({
  name: "SeedNormCalculator",
  data() {
    return {
      inputs: {
        mtz: 40,
        obsada: 300,
        kilkowanie: 95,
        czystosc: 98,
      },
    };
  },
  computed: {
    seedNorm() {
      const obsada = this.inputs.obsada;
      const mtz = this.inputs.mtz;
      const kilkowanie = this.inputs.kilkowanie;
      const czystosc = this.inputs.czystosc;

      if (obsada <= 0 || mtz <= 0 || kilkowanie <= 0 || czystosc <= 0) {
        return 0;
      }

      const norm = (obsada * mtz * 100) / (kilkowanie * czystosc);
      return norm.toFixed(2);
    },
    effectiveSeeds() {
      const obsada = this.inputs.obsada;
      const kilkowanie = this.inputs.kilkowanie;
      const czystosc = this.inputs.czystosc;

      if (obsada <= 0 || kilkowanie <= 0 || czystosc <= 0) {
        return 0;
      }

      const effective = (obsada * 100) / ((kilkowanie * czystosc) / 100);
      return effective.toFixed(2);
    },
    seedsPerKilogram() {
      const mtz = this.inputs.mtz;

      if (mtz <= 0) {
        return 0;
      }

      return (1000000 / mtz).toFixed(0);
    },
  },
  template: `
    <div class="space-y-8">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-2">Kalkulator normy wysiewu</h1>
        <p class="text-gray-600">Oblicz prawidlowa norme wysiewu nasion</p>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold mb-6" style="color: var(--secondary)">Parametry nasion i pola</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="grid grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">MTZ - Masa tysiaca nasion (g)</label>
              <input v-model.number="inputs.mtz" type="number" step="1" min="1" class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none" style="focus:border-color: var(--secondary)" />
              <p class="text-xs text-gray-500 mt-1">Masa 1000 nasion w gramach</p>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Obsada (szt/m2)</label>
              <input v-model.number="inputs.obsada" type="number" step="0.1" min="0.1" class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none" style="focus:border-color: var(--secondary)" />
              <p class="text-xs text-gray-500 mt-1">Docelowa liczba roslin na metr kwadratowy</p>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Sila kielkowania (%)</label>
              <input v-model.number="inputs.kilkowanie" type="number" step="1" min="1" max="100" class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none" style="focus:border-color: var(--secondary)" />
              <p class="text-xs text-gray-500 mt-1">Procent nasion ktorych wykielkuja sie</p>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Czystosc nasion (%)</label>
              <input v-model.number="inputs.czystosc" type="number" step="1" min="1" max="100" class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none" style="focus:border-color: var(--secondary)" />
              <p class="text-xs text-gray-500 mt-1">Procent czystych (wartosciowych) nasion</p>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="rounded-lg p-8 border-2 w-full shadow-md" style="background: linear-gradient(to bottom right, var(--light), rgba(85, 80, 242, 0.1)); border-color: var(--primary)">
              <p class="text-gray-700 text-sm font-bold uppercase tracking-wide mb-3 text-center">Norma wysiewu</p>
              <p class="text-5xl font-black text-center" style="color: var(--primary)">{{ seedNorm }}</p>
              <p class="text-xs text-gray-600 mt-3 font-semibold text-center">kg/ha</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});
