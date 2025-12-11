# Paydrive — App de Simulación (Expo / React Native)

**Descripción rápida**
Aplicación móvil para crear simulaciones de inventario/ventas por producto y obtener métricas (ganancia, unidades vendidas, costo de inventario). Pensada para demo rápida: crear simulación → agregar productos → ejecutar (loader) → ver resultados.

**Demo (guion de 2–3 min)**
- Abrir la app.
- Pulsar `+` para crear una simulación y entrar a su listado.
- Pulsar `+` para agregar productos (rellenar formulario y guardar).
- Repetir 2–3 productos.
- Pulsar `Ejecutar simulación` → ver pantalla con texto **"Generando simulacion"** durante 5s.
- Revisar resultados (ganancia, unidades vendidas, costo de inventario).
- Mostrar eliminación con la `✕` en tarjetas.

**Características**
- **Crear simulaciones**: botón rápido.
- **Agregar/Eliminar productos**: formulario y botón `✕` en cada tarjeta.
- **Eliminar simulaciones**: `✕` en cada `SimulationCard`.
- **Loader**: pantalla de 5s con animación y texto "Generando simulacion".
- **Persistencia local**: datos guardados en `AsyncStorage`.
- **UI moderna**: tarjetas con SVG/gradientes, glow y botones animados (`FancyButton`).

**Arquitectura / archivos clave**
- **Entrypoint**: `App.js`
- **Contexto**: `context/SimulationsContext.jsx` (persistencia y CRUD)
- **Simulador**: `utils/runSimulation.js`
- **Componentes UI**: `components/CardBase.jsx`, `components/SimulationCard.jsx`, `components/ProductCard.jsx`, `components/FancyButton.jsx`
- **Pantallas**: `components/Principal.jsx`, `screens/Lista-prod.jsx`, `screens/Form.jsx`, `screens/SimulationLoading.jsx`, `screens/SimulationResultsScreen.jsx`

**Stack / dependencias**
- Expo + React Native
- `@react-navigation/native` (navegación)
- `@react-native-async-storage/async-storage` (persistencia)
- `react-native-svg` (decoración SVG)
- Animations con `Animated` (API nativa)

**Cómo ejecutar (PowerShell)**
```powershell
npm install
expo start