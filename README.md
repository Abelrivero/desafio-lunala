# Desafío Lunala

## Descripción
Este proyecto es un clon de la interfaz de una plataforma de streaming, desarrollado para el desafío propuesto. La aplicación obtiene y muestra películas desde la API de [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api) e incluye funcionalidades como:
- Sección de películas en tendencia, mejor valoradas y próximos estrenos.
- Búsqueda dinámica de películas.
- Filtrado por categorías.
- Carrusel para navegar entre películas.
- Modo oscuro/claro.

## Instalación

1. **Clona el repositorio:**  
git clone https://github.com/Abelrivero/desafio-lunala.git
Navega al directorio del proyecto:

2. **Ingresa a el repositorio:**  
cd desafio-lunala

3. **Instala las dependencias**  
npm install

4. **Configura la variable de entorno**
Crea un archivo .env en la raíz del proyecto y agrega la siguiente línea (reemplaza tu_api_key_de_tmdb con tu API Key):
NEXT_PUBLIC_API_KEY=tu_api_key_de_tmdb

5. **Inicia el servidor de desarrollo**
npm run dev

6. **USO**
Una vez iniciado el servidor, abre http://localhost:3000 en tu navegador para ver la aplicación. La estructura de la app incluye:

**COMPOSICION DE LA APP**
** **
-Página Principal: Muestra secciones de películas en tendencia, mejor valoradas y próximos estrenos.

-Seccion de Peliculas: Muesta un listado de algunas peliculas

-Seccion de Series: Muesta un listado de algunas series

-Búsqueda: Permite buscar películas por titulo o filtrarlas por categorías.

-Carrusel: Implementado en la visualización de películas para una navegación interactiva.

-Modo Oscuro/Claro: Permite cambiar la apariencia de la aplicación.

**Decisiones de Diseño**
*Framework y Arquitectura:*
Se eligió Next.js para aprovechar su capacidad de Server-Side Rendering (SSR) y la simplicidad en la generación de páginas, lo que mejora el rendimiento y el SEO. Cabe destacar que esta es la primera vez que utilizo Next.js, pero me pareció un framework muy útil para este proyecto y además lo quería aprender, esta es una de las razones por las cuales el diseño como tal de la aplicacion no es un diseño muy moderno ni llamativo.

*Separación de Componentes:*
Se ha dividido la aplicación en componentes de cliente y servidor según las necesidades. Por ejemplo, la obtención de datos se hace en componentes del lado del servidor, mientras que la interactividad (como el carrusel o el modo oscuro/claro) se implementa en componentes del lado del cliente.

*Optimización del Rendimiento:*
Gracias a SSR y a la optimización de las peticiones a la API, la aplicación carga de forma rápida y mejora el SEO, ya que el contenido ya viene pre-renderizado.

*Interfaz y Experiencia de Usuario:*
Se optó por un diseño muy simple y responsivo utilizando CSS puro para los estilos. Se implementó un modo oscuro/claro y un carrusel interactivo para mejorar la experiencia del usuario.
Este es un punto en cual no destaco ya que como especifique arriba no tenia mucho conocimiento del framework y tambien se me da bastante mal hacer diseños por mi cuenta

*Conclusión*
Realizar y desplegar esta aplicación fue una experiencia sumamente entretenida y enriquecedora. Este desafío me permitió adentrarme en el mundo de Next.js y me dejó claro que, aunque ya he aprendido mucho, aún tengo mucho por descubrir en el desarrollo web. Quiero expresar mi agradecimiento a todas las personas que me brindaron esta oportunidad ya que su calidad humana me dio paso a encontrarme con este nuevo punto de vista a la hora del desarrollo.
