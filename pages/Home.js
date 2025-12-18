import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  template: `
    <div class="space-y-12">
      <section class="text-white rounded-lg p-12 text-center" style="background: linear-gradient(to right, var(--secondary), var(--accent))">
        <h1 class="text-5xl font-bold mb-4">CropCalc</h1>
        <p class="text-xl mb-6">Nowoczesne kalkulatory dla rolnikow</p>
        <p class="text-lg" style="color: rgba(255, 255, 255, 0.9)">Szybkie obliczenia, dokladne wyniki</p>
      </section>

      <section>
        <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">Dostepne kalkulatory</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <div class="text-4xl mb-3" style="color: var(--secondary)">O</div>
            <h3 class="text-xl font-bold mb-2" style="color: var(--secondary)">Kalkulator opryskow</h3>
            <p class="text-sm text-gray-600 mb-4">
              Oblicz ilosci srodka i wody do opryskania
            </p>
            <a 
              href="#/spray"
              class="text-white px-4 py-2 rounded transition inline-block no-underline hover:opacity-80 text-sm"
              style="background-color: var(--secondary)"
            >
              Otwórz
            </a>
          </div>

          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <div class="text-4xl mb-3" style="color: var(--secondary)">S</div>
            <h3 class="text-xl font-bold mb-2" style="color: var(--secondary)">Norma wysiewu</h3>
            <p class="text-sm text-gray-600 mb-4">
              Oblicz norme wysiewu nasion
            </p>
            <a 
              href="#/seed"
              class="text-white px-4 py-2 rounded transition inline-block no-underline hover:opacity-80 text-sm"
              style="background-color: var(--secondary)"
            >
              Otwórz
            </a>
          </div>

          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <div class="text-4xl mb-3" style="color: var(--secondary)">D</div>
            <h3 class="text-xl font-bold mb-2" style="color: var(--secondary)">Suszenie kukurydzy</h3>
            <p class="text-sm text-gray-600 mb-4">
              Oblicz mase po wysuszeniu kukurydzy
            </p>
            <a 
              href="#/drying"
              class="text-white px-4 py-2 rounded transition inline-block no-underline hover:opacity-80 text-sm"
              style="background-color: var(--secondary)"
            >
              Otwórz
            </a>
          </div>

          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <div class="text-4xl mb-3" style="color: var(--secondary)">O</div>
            <h3 class="text-xl font-bold mb-2" style="color: var(--secondary)">Obsada roslin</h3>
            <p class="text-sm text-gray-600 mb-4">
              Oblicz liczbe roslin na jednostke pola
            </p>
            <a 
              href="#/density"
              class="text-white px-4 py-2 rounded transition inline-block no-underline hover:opacity-80 text-sm"
              style="background-color: var(--secondary)"
            >
              Otwórz
            </a>
          </div>
        </div>
      </section>

      <section class="rounded-lg p-8" style="background-color: var(--light)">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">O aplikacji</h2>
        <p class="text-gray-700 mb-4">
          CropCalc to zbior kalkulatorow stworzone dla rolnikow wspomagajacy codzienne decyzje agrotechniczne. 
          Aplikacja zawiera narzedzia do obliczania oprysku, normy wysiewu, suszenia kukurydzy i obsady roslin.
        </p>
        <p class="text-gray-700 mb-4">
          Kazdy kalkulator pozwala na szybkie i dokladne obliczenia bez koniecznosci szukania wzorow czy kalkulatora. 
          Wystarczy wpisac parametry swoje danych, a aplikacja natychmiast wyswietla wynik.
        </p>
        <p class="text-gray-700">
          Wszystkie obliczenia sa dokonywane lokalnie w przegladarce - Twoje dane nie sa nigdzie wysylane ani przechowywane.
        </p>
      </section>
    </div>
  `,
});
