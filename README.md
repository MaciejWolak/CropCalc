# CropCalc - Kalkulatory Rolnicze

CropCalc to nowoczesna aplikacja webowa zawierajaca zestaw przydatnych kalkulatorow dla rolnikow i pracownikow sektora rolniczego. Aplikacja pozwala na szybkie i dokladne obliczenia bez koniecznosci szukania wzorow matematycznych.

## Cechy aplikacji

- **Szybkie obliczenia** - wyniki sa dostepne natychmiast po wpisaniu danych
- **Lokalnie przechowywane dane** - wszystkie obliczenia sa dokonywane w przegladarce, dane nie sa wysylane nigdzie
- **Responsywny design** - aplikacja dziala na komputerach, tabletach i telefonach
- **Intuicyjny interfejs** - latwe w obsludze dla kazdego uzytkownika
- **Bezplatna** - darmowa aplikacja bez rejestracji

## Dostepne kalkulatory

### 1. Kalkulator opryskow

Oblicza ilosci srodka chemicznego i wody potrzebne do opryskania pola.

**Parametry wejsciowe:**

- Dawka srodka (l/ha)
- Areal pola (ha)
- Dawka wody (l/ha)
- Pojemnosc zbiornika (l)

**Wyniki:**

- Calkowita ilosc srodka (l)
- Tabela napelniania zbiornika z podziałem na poszczególne napełnienia
- Oblicza prawidłowy rozdzial srodka i wody dla kazdego napelnienia

### 2. Kalkulator normy wysiewu

Oblicza prawidłowa norme wysiewu nasion na podstawie parametrow nasion i pola.

**Parametry wejsciowe:**

- MTZ - Masa tysiaca nasion (g)
- Obsada (szt/m²)
- Siła kiełkowania (%)
- Czystość nasion (%)

**Wyniki:**

- Norma wysiewu (kg/ha)

**Wzór:** Norma = (Obsada × MTZ × 100) / (Kiełkowanie × Czystość)

### 3. Kalkulator suszenia kukurydzy

Oblicza wage kukurydzy po wysuszeniu do docelowej wilgotnosci.

**Parametry wejsciowe:**

- Masa poczatkowa (kg)
- Wilgotność poczatkowa (%)
- Wilgotność koncowa (%)

**Wyniki:**

- Masa koncowa (kg)

Narzedzie pomocne w oszacowaniu oplacalnosci procesu suszenia kukurydzy.

### 4. Kalkulator obsady roslin

Oblicza liczbe roslin na jednostce pola na podstawie pomiarow z pola.

**Parametry wejsciowe:**

- Ilosc roslin na zmierzonym odcinku (szt)
- Zmierzony odcinek (cm)
- Odcinek miedzy rzedami (cm)

**Wyniki:**

- Obsada (szt/m²)

Umozliwia szybkie sprawdzenie gęstości wysiewu bez konieczności przeliczania ręcznego.

## Jak korzystać z aplikacji

1. Otwórz aplikację w przeglądarce (index.html)
2. Na stronie głównej wybierz interesujący Cię kalkulator
3. Wpisz wymagane parametry
4. Wynik pojawi się automatycznie

## Struktura projektu

```
CropCalc/
├── index.html              # Główny plik HTML
├── app.js                  # Punkt wejścia aplikacji
├── styles.css              # Style CSS
├── README.md               # Ten plik
├── components/
│   └── header/
│       ├── NavBar.js       # Pasek nawigacji
│       └── footer/
│           └── Footer.js   # Stopka
├── pages/
│   ├── Home.js             # Strona główna
│   ├── SprayCalculator.js  # Kalkulator oprysku
│   ├── SeedNormCalculator.js # Kalkulator normy wysiewu
│   ├── DryingCalculator.js # Kalkulator suszenia kukurydzy
│   └── PlantDensityCalculator.js # Kalkulator obsady roślin
├── layouts/
│   └── MainLayout.js       # Główny layout z routingiem
└── config/
    └── routes.js           # Konfiguracja tras
```

## Technologia

- **Vue.js 3.5.25** - Framework JavaScript
- **Vue Router 4.6.4** - Router do nawigacji (opcjonalny)
- **Tailwind CSS** - Framework CSS do stylizacji
- **Vanilla JavaScript** - Bez dodatkowych bibliotek

## Uruchomienie

1. Pobierz lub sklonuj projekt
2. Otwórz plik `index.html` w przeglądarce internetowej
3. Aplikacja działa bezpośrednio bez konieczności instalacji serwera

## Przeglądarka

Aplikacja wymaga nowoczesnej przeglądarki internetowej z obsługą:

- ES6+ (ECMAScript 2015 i nowsze)
- CSS Grid
- CSS Flexbox
- Import statements w módułach JavaScript

Rekomendowane:

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Kolory aplikacji

Aplikacja używa spójnej palety kolorów:

- **Główny (Primary):** #5550F2 (fioletowy)
- **Wtórny (Secondary):** #027368 (ciemny zielony)
- **Akcent (Accent):** #04BF9D (turkusowy)
- **Ostrzeżenie (Warning):** #F2B33D (złoty)
- **Światło (Light):** #F2F2F2 (jasny szary)

## Autor

Aplikacja stworzona dla potrzeb rolnictwa precyzyjnego.

## Licencja

Projekt dostępny do wykorzystania osobistego i komercyjnego.
