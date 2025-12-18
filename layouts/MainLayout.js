import { defineComponent } from "vue";
import NavBar from "../components/header/NavBar.js";
import Footer from "../components/footer/Footer.js";

export default defineComponent({
  name: "MainLayout",
  components: {
    NavBar,
    Footer,
  },
  template: `
    <div class="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main class="flex-grow container mx-auto px-4 py-8">
        <component :is="currentComponent" />
      </main>
      <Footer />
    </div>
  `,
  data() {
    return {
      currentComponent: null,
      currentRoute: "",
    };
  },
  mounted() {
    this.updateRoute();
    window.addEventListener("hashchange", () => this.updateRoute());
  },
  methods: {
    async updateRoute() {
      const hash = window.location.hash.slice(1) || "/";
      const route = hash.split("/")[1] || "";

      try {
        if (route === "spray") {
          const SprayCalculator = (await import("../pages/SprayCalculator.js"))
            .default;
          this.currentComponent = SprayCalculator;
        } else if (route === "seed") {
          const SeedNormCalculator = (
            await import("../pages/SeedNormCalculator.js")
          ).default;
          this.currentComponent = SeedNormCalculator;
        } else if (route === "drying") {
          const DryingCalculator = (
            await import("../pages/DryingCalculator.js")
          ).default;
          this.currentComponent = DryingCalculator;
        } else if (route === "density") {
          const PlantDensityCalculator = (
            await import("../pages/PlantDensityCalculator.js")
          ).default;
          this.currentComponent = PlantDensityCalculator;
        } else {
          const Home = (await import("../pages/Home.js")).default;
          this.currentComponent = Home;
        }
      } catch (error) {
        console.error("Failed to load component:", error);
      }
    },
  },
});
