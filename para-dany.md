Resumen

Qué es: Aplicación móvil (Expo/React Native) para crear simulaciones de inventario/ventas por producto y obtener resultados (ganancia, unidades vendidas, costo de inventario).
Objetivo de la demo: Mostrar flujo completo: crear simulación → agregar productos → ejecutar simulación (loader) → ver resultados.
Características Clave

Crear simulaciones: Botón para añadir nuevas simulaciones.
Agregar productos: Formulario para nombre, cantidad, costo, precio y demanda esperada.
Eliminar items: Botón "✕" en cada tarjeta para eliminar simulaciones o productos.
Ejecución con loader: Al ejecutar, aparece pantalla de carga de 5s con animación y texto “Generando simulacion”, luego se muestran resultados.
Resultados: Muestra ganancia, unidades vendidas y costo de inventario; resultados persistidos localmente (AsyncStorage).
Arquitectura y Tecnologías

Framework: Expo + React Native.
Navegación: @react-navigation/native (stack).
Persistencia: @react-native-async-storage/async-storage.
UI: Componentes personalizados: CardBase, SimulationCard, ProductCard, FancyButton.
Animaciones / SVG: Animated y react-native-svg.
Código principal: App.js, contexto en SimulationsContext.jsx, simulador en runSimulation.js.
Cómo ejecutar (local, rápido)

Instalar dependencias y arrancar Expo (PowerShell):

npm installexpo start
Abrir en emulador o dispositivo con la app de Expo.
Guión de demo (≈2–3 minutos)

Abrir la app — mostrar pantalla principal con lista de simulaciones.
Pulsar botón “+” (FancyButton) → crear simulación nueva → entrar a su listado.
Pulsar “+” para agregar producto → rellenar formulario y guardar (mostrar validación mínima).
Repetir para 2–3 productos y mostrar tarjetas con botón “✕”.
Pulsar “Ejecutar simulación” → se muestra pantalla con animación y texto “Generando simulacion” durante 5s.
Tras carga, mostrar pantalla de resultados con métricas (ganancia, unidades, costo).
Volver atrás y demostrar eliminación de simulación con la “✕”.
Notas de diseño / UX (breves)

Estética: Tarjetas con glow radial/gradientes sutiles y sombras; botones animados y con ambient glow para sensación dinámica.
UX: Loader simula procesamiento real y evita un cambio brusco; confirmación de borrado pendiente (se puede añadir si lo deseas).
Accesibilidad: Texto legible y botones grandes; recomendaciones: añadir confirmaciones y feedback háptico.