import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  template: `
    <nav class="text-white shadow-lg" style="background-color: var(--secondary)">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <a href="#/" class="text-2xl font-bold hover:opacity-80 no-underline text-white">
            CropCalc
          </a>
          <div class="flex gap-6">
            <a 
              href="#/" 
              class="hover:opacity-80 transition text-white no-underline"
            >
              Strona glowna
            </a>
            <a 
              href="#/spray" 
              class="hover:opacity-80 transition text-white no-underline"
            >
              Kalkulator opryskow
            </a>
            <a 
              href="#/seed" 
              class="hover:opacity-80 transition text-white no-underline"
            >
              Norma wysiewu
            </a>
            <a 
              href="#/drying" 
              class="hover:opacity-80 transition text-white no-underline"
            >
              Suszenie kukurydzy
            </a>
            <a 
              href="#/density" 
              class="hover:opacity-80 transition text-white no-underline"
            >
              Obsada roslin
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
});
