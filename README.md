# Proyecto Data Lover - PókemonBel

## Índice

- [Título del proyecto:](##Título-del-proyecto:)
- [Resumen:](##Resumen:)
- [Objetivos:](##Objetivos:)
- [Investigación UX:](##Investigación-UX:)
  - [1) Descubrimiento e investigación (Research):](###1-Descubrimiento-e-investigación-(Research):)
  - [2) Síntesis y definición:](###2-Síntesis-y-definición:)
  - [3) Ideación:](###3-Ideación:)
  - [4) Prototipado:](###4-Prototipado:)
     - [PROTOTIPO DE BAJA FIDELIDAD - VERSIÓN MOBILE:](####PROTOTIPO-DE-BAJA-FIDELIDAD---VERSIÓN-MOBILE:)
     - [PROTOTIPO DE BAJA FIDELIDAD - VERSIÓN DESKTOP:](####PROTOTIPO-DE-BAJA-FIDELIDAD---VERSIÓN-DESKTOP:)
     - [PROTOTIPO DE ALTA FIDELIDAD - VERSIÓN MOBILE:](####PROTOTIPO-DE-ALTA-FIDELIDAD---VERSIÓN-MOBILE:)
    - [PROTOTIPO DE ALTA FIDELIDAD - VERSIÓN DESKTOP:](####PROTOTIPO-DE-ALTA-FIDELIDAD---VERSIÓN-DESKTOP:)
  - [5) User Testing:](###5-User-Testing:)


## Título del proyecto:
 POKEMONBEL
 
## Resumen:
PókemonBel es una herramienta web dirigida a usuarios que desean manipular y visualizar la data de sus pokemon. 
Cada usuario tendrá una cuenta personal con usuario y clave asignado. Para efectos de diseño del presente trabajo, estos serán:
- USUARIO: LABORATORIA 
- CONTRASEÑA: LABORATORIA

## - Objetivos:
El objetivo de la herramienta web es permitir a los usuarios almacenar la data de sus pokemon, de tal forma que les permita acceso directo y ordenado a la misma, información útil y la posibilidad de visualizar de forma rápida los filtros necesarios según su necesidad. Además de darles la posibilidad de interactuar con mayor comodidad entre la cantidad de pokemones disponibles en el juego.

## Investigación UX:
Para el desarrollo de la investigación UX, me apoyé de las 5 fases del proceso de diseño de experiencia de usuario:

### 1) Descubrimiento e investigación (Research):
#### Investigación Contextual:
Se observa que los usuarios son personas de género indistinto, con edades de entre 13 y 40 años y con conocimiento intermedio del uso de tecnologías y aplicaciones móviles.  Quienes juegan Pókemon Go con mucha frecuencia.
En la observación del contexto de estos usuarios se resaltan las siguientes actividades: Logueo constante en la aplicación y uso de la misma por un promedio de 2 horas al día (en suma). Estos usuarios usan el app de forma constante al encontrarse en zonas reconocidas como pokeparadas o gimnasios pokemon, las cuales suelen ser centros comerciales o estalecimientos, donde pueden cazar diversas especies de pokemon, realizar combates con otros maestros pokemon o adquirir pokebolas y accesorios que les son útiles en el desarrollo del juego.

✓ En éste punto se realizaron entrevistas a 3 usuarios de diferentes edades. (Archivo digital de entrevista realizada: https://drive.google.com/drive/folders/11ztplsycDBON0fzXqdGahNXjN_wcUOI_?usp=sharing ). De éstas entrevistas se obtuvo una idea más clara y concisa del perfil y necesidades de nuestros usuarios.
  
### 2) Síntesis y definición:
En la etapa de Investigación Contextual se reconció de forma clara el perfil común de un usuario, además de sus necesidades. En este punto se usará los datos coleccionados para idear el desarrollo de la herramienta web.
#### Entendimiento de necesidades y requerimientos (Historias de Usuario):
##### - Historia de usuario 1 
Como usuario quiero poder loguearme para acceder al sitio web.
##### -  Historia de usuario 2
Como usuario quiero poder ver a todos los pokemones al ingresar a la página para saber cuántos tengo y cuántos me faltan atrapar.
##### - Historia de usuario 3
Como usuario quiero poder obtener el porcentaje de los pokemones que aparecen en los diferentes tipos de huevo para saber qué huevos eclosionar.
##### - Historia de usuario 4
Como usuario quiero poder filtrar a los pokemones por tipo y debilidades para saber quiénes y cuántos son de cada tipo y tienen esa debilidad.
##### - Historia de usuario 5
Como usuaria quiero poder elegir un pokemon para ver sus características más relevantes.
##### - Historia de usuario 6
Como usuaria quiero poder ordenar a los pokemon por orden alfabético (A-Z y Z-A) y según frecuencia de aparición (spawn) de manera ascendente o descendente para poder ubicarlos fácilmente y saber cuáles son los más difíciles de atrapar.

### 3) Ideación:
En este punto se sabe que el foco es la cantidad en vez de la calidad, por lo que se idearon y maquetaron varias posibles propuestas para cada funcionalidad a implementar. A continuación se mostrarán principalmente los bocetos de aquellas pantallas de las cuales recibimos feedback que nos indicaba mejorar / cambiar la interfaz.

##### - Bocetos de ideación para las funcionalidad:
- <b>PANTALLA DE INICIO:</b>
La primera pantalla maquetada fue la de inicio, puesto que la de login ya estaba preestablecida para el proyecto. 
En ésta pantalla se consideró un espacio en la parte izquierda para mostrar la imagen y datos del usuario. Además de un menú de fijo que mostrara las opciones entre las que podría elegir el usuario.

   ![WhatsApp Image 2019-07-31 at 11 33 43 AM](https://user-images.githubusercontent.com/51203238/62237062-eb424a80-b395-11e9-928b-47c3bfacce13.jpeg)

   ✓ <b>Luego de feedback:</b> Reconocimos que la interfaz ideada no era muy amigable y entendible para el usuario, que no quedaba muy claro lo que mostraría cada una de las opciones en el menú. Que el menú estático ocupaba mucho espacio.


- <b>PANTALLA DE INICIO - LUEGO DEL 1ER FEEDBACK:</b>
Para ésta edición se planteo incluir un menpu de tipo hamburguesa que permitiese la selección de cada una de las opción de navegación, sin ocupar demasiado espacio dentro de la pantalla.

  ![WhatsApp Image 2019-07-31 at 11 33 43 AM (1)](https://user-images.githubusercontent.com/51203238/62237167-1f1d7000-b396-11e9-8acc-f88217bb59c3.jpeg)


  ✓ <b>Luego de feedback:</b> Se notó que el menú de tipo hamburguesa tampoco era el adecuado debido a que no permitía mostrar visiblemente el acceso entre una y otra opción, inclusibe en algunas oportunidades algunos usuarios no notaban el logo del menú y no les era posible ir hacia otra opción además hacía falta implementar un header y un footer para darle estatus y seriedad a la interfaz. Además se nos sugirió que implementásemos un header y footer fijo, con la finalidad de darle estatus e información a nuestra interfaz.


- <b>PANTALLA DE INICIO - LUEGO DEL 2DO FEEDBACK:</b>
En ésta pantalla se cambió el menú de tipo hamburguesa por uno de navegación que se mantendría fijo a modo de header en toda la experiencia de uso, excepto la pantalla de login y de bloqueo. Además se cumplió con implementar un footer.

  ![WhatsApp Image 2019-07-22 at 11 41 47](https://user-images.githubusercontent.com/51205175/61648823-cf43f800-ac75-11e9-9b8c-b47ead118b17.jpeg)
  
  ✓ <b>Luego de feedback:</b>
  En éste feedback rescatamos la idea de que darle un espacio con información de usuario era innecesaria, puesto que lo más importante para nuestros usuarios era tener acceso directo, ordenado y fluido a la indormación de sus pókemon mas que a la suya.

- <b>PANTALLA DE BLOQUEO:</b>
  Para la pantalla de bloqueo inicialmente decidimos colocar una imágen de signo de admiración en el centro, añadido al mensaje de indicación para el usuario, luego de haber excesidido el número de posibilidades de intento de login.

  ![WhatsApp Image 2019-07-22 at 11 53 03](https://user-images.githubusercontent.com/51205175/61649823-d1a75180-ac77-11e9-946b-83dd8d2f0fba.jpeg)

  ✓ <b>Luego de feedback:</b>
  El feedback para ésta pantalla nos indicaba que la imagen en el centro era demasiado invasiva y algo desagradable porque alertaba de forma 'poco amigable' que no podía seguir.


### 4) Prototipado:
En éste punto procedimos a unir insights adquiridas en el proceso de Ideación y los feedbacks para lograr obtener una interfaz adecuada y y amigable para el tipo de usuario.

#### - PROTOTIPO DE BAJA FIDELIDAD - VERSIÓN MOBILE:
  ##### . Pantalla de Login:

   ![image](https://user-images.githubusercontent.com/51205175/61664773-1d1e2780-ac99-11e9-917c-e4b969a58b0b.png)

  ##### . Pantalla de Bloqueo:

  ![image](https://user-images.githubusercontent.com/51205175/61664823-3c1cb980-ac99-11e9-8eba-c8bc46bd2222.png)


  ##### . Pantalla de Inicio:

  ![image](https://user-images.githubusercontent.com/51205175/61664719-fcee6880-ac98-11e9-8e06-8f30bd335fbc.png)

  ##### . Pantalla de Pokedex:
  ![image](https://user-images.githubusercontent.com/51205175/61664508-82254d80-ac98-11e9-84f7-d52d439feed6.png)

  ##### . Pantalla de opción Ordenar:

  ![image](https://user-images.githubusercontent.com/51205175/61664584-a7b25700-ac98-11e9-9e9d-9ca47109d570.png)

  ##### . Pantalla de opción Filtrar:

  ![image](https://user-images.githubusercontent.com/51205175/61664397-4be7ce00-ac98-11e9-82e0-27f48b880682.png)

  ##### . Pantalla de opción Incubadora:

  ![image](https://user-images.githubusercontent.com/51205175/61664272-0b885000-ac98-11e9-8742-98fff20b8e96.png)


#### - PROTOTIPO DE BAJA FIDELIDAD - VERSIÓN DESKTOP:
 ##### . Pantalla de login:

 ![WhatsApp Image 2019-07-22 at 11 39 26](https://user-images.githubusercontent.com/51205175/61649196-9b1d0700-ac76-11e9-8e84-343a453c9f39.jpeg)

 ##### . Pantalla de Bloqueo:

 ##### . Pantalla de Inicio:
 ![WhatsApp Image 2019-07-22 at 11 45 52](https://user-images.githubusercontent.com/51205175/61649234-b4be4e80-ac76-11e9-863f-8a0c3417a284.jpeg)

 ##### . Pantalla de Pokedex:
 ![WhatsApp Image 2019-07-22 at 11 49 15](https://user-images.githubusercontent.com/51205175/61649419-12529b00-ac77-11e9-9280-6fcb9a2a2dde.jpeg)

 ##### . Pantalla de función Ordenar:
 ![WhatsApp Image 2019-07-22 at 11 48 54](https://user-images.githubusercontent.com/51205175/61649338-e7684700-ac76-11e9-8518-e09ba1beca85.jpeg)

 ##### . Pantalla de función Filtrar:
 ![WhatsApp Image 2019-07-22 at 11 53 49](https://user-images.githubusercontent.com/51205175/61649600-69587000-ac77-11e9-8a3d-c4460b453847.jpeg)

 ##### . Pantalla de función Incubadora:
 ![WhatsApp Image 2019-07-22 at 11 51 35](https://user-images.githubusercontent.com/51205175/61649529-462dc080-ac77-11e9-8fde-132f49d5242a.jpeg)


### - PROTOTIPO DE ALTA FIDELIDAD - VERSIÓN MOBILE:
* Herramienta utilizada: Figma 
   
   Link del prototipo en figma: https://www.figma.com/file/9yFifZHZGroZAHjDzAdMRu/Data-lovers-Copy?node-id=1%3A2

##### . Pantalla de Login:

![mobile 1](https://user-images.githubusercontent.com/51203238/61663513-6751d980-ac96-11e9-9346-0d507af0a560.PNG)

##### . Pantalla de Bloqueo:

![mobile 8](https://user-images.githubusercontent.com/51203238/61664070-a2a0d800-ac97-11e9-9d1b-53d7703282a8.PNG)

##### . Pantalla de Inicio:

![mobile 2](https://user-images.githubusercontent.com/51203238/61663567-818bb780-ac96-11e9-9ec7-dd5d95598632.PNG)


##### . Pantalla de Inicio - Menú:

![mobile 2 1](https://user-images.githubusercontent.com/51203238/61663588-8d777980-ac96-11e9-941d-50c15c5013f8.PNG)

##### . Pantalla Pokedex:

![mobile 4](https://user-images.githubusercontent.com/51203238/61663626-a6802a80-ac96-11e9-8117-ec6a4a4a85c6.PNG)

##### . Pantalla Pokedex + modal :

![mobile 3](https://user-images.githubusercontent.com/51203238/61663598-97997800-ac96-11e9-8b85-5c8708696f4a.PNG)

##### . Pantalla de función Ordenar:

![mobile 5](https://user-images.githubusercontent.com/51203238/61664003-7c7b3800-ac97-11e9-8b91-7752f2a96095.PNG)

##### . Pantalla de función Filtrar:

![mobile 6](https://user-images.githubusercontent.com/51203238/61664020-8ac95400-ac97-11e9-8337-75c0a0d442c8.PNG)

##### . Pantalla de función Incubadora:

![mobile 7](https://user-images.githubusercontent.com/51203238/61664049-96b51600-ac97-11e9-908b-122f79f98990.PNG)


#### - PROTOTIPO DE ALTA FIDELIDAD - VERSIÓN DESKTOP:

##### . Pantalla de Login:

![image](https://user-images.githubusercontent.com/51205175/61650543-9017a600-ac79-11e9-8b93-350a09bbac2c.png)

##### . Pantalla de Bloqueo:

![image](https://user-images.githubusercontent.com/51205175/61660732-26ef5d00-ac90-11e9-918b-08dc39188148.png)

##### . Pantalla de Inicio:

![image](https://user-images.githubusercontent.com/51205175/61650657-d0772400-ac79-11e9-8b4a-da37f988d3d5.png)

##### . Pantalla Pokedex:

![image](https://user-images.githubusercontent.com/51205175/61651109-cefa2b80-ac7a-11e9-88eb-5a342268f48f.png)

##### . Pantalla Pokedex + modal :

![image](https://user-images.githubusercontent.com/51205175/61650775-0a482a80-ac7a-11e9-81cb-997c78151119.png)

##### . Pantalla de función Ordenar:

![image](https://user-images.githubusercontent.com/51205175/61650885-56936a80-ac7a-11e9-80e8-a6ad383b6fef.png)

##### . Pantalla de función Filtrar:

![image](https://user-images.githubusercontent.com/51205175/61650914-6d39c180-ac7a-11e9-9d37-34e06f2b27b6.png)

##### . Pantalla de función Incubadora:

![image](https://user-images.githubusercontent.com/51205175/61651017-9d816000-ac7a-11e9-93a2-18510048c0b3.png)


### - Resumen de feedback para el diseño de Alta Fidelidad:
Luego de los feedbacks recibidos decidimos y como se observa en el prototipado final, se implementó una pantalla , llamada "Pantalla de Inicio" en la que además de darle la bienvenida a nuestros usuarios, les daríamos algunas indicaciones de la utilidad de la wed y las funciones que en ella encontrará.

<b>El feedback para algunas de nuestras pantallas fue el siguiente:

Pantalla pokedex:</b>
- Agregar una imagen al lado de la palabra incubadora en el navegador.
- Eliminar el usuario del menú superior, puesto que ocupaba espacio innecesario y mostraba información irrelevante.
- Cambiar texto de información por pokemones atrapados y pokemones no atrapados.
- Cambiar el orden para mostrar pokemones por imagen,nombre y número.

<b>Footer:</b>
- Ponerle un background que permitiera sistinguir el footer de los demás elementos de la interfaz.

<b>Pantalla de bloqueo:</b>
- Decidimos reemplazar la imagen del triàngulo de admiración por un fondo de pantalla  acorde al tema pokemon y conservamos el texto.

En un siguiente feedback del prototipo en figma nos sugirieron cambiar el color de fondo del contenedor de cada pokemon  para que se visualice mejor. Por lo que decidimos cambiarlo de color blanco con opacidad a negro con opacidad.

##### Pantalla Pokedex antes de feedback:

![image](https://user-images.githubusercontent.com/51205175/61666593-86a03500-ac9d-11e9-854c-0f3b351831be.png)



### 5) User Testing:
Para ésta fase del proceso de Desarrollo del diseño, se realizaron pruebas de usabilidad a usuarios finales. A los cuales se les asignó una "Lista de tareas" que debían llevar a cabo en la interfaz de la web, sin que se le diera mayores indicaciones de uso. Además se les realizó una lista de preguntas con la finalidad de obtener feedback y asegurarnos que nuestra interfaz cumplía con las reglas de usabilidad necesarias según nuestro tipo de usuario.

  ✓ De las pruebas de usabilidad realizadas a los usuarios se obtuvieron, a modo de archivo digitales, grabaciones de audio, los cuales se pueden ontener en el siguiente link: https://drive.google.com/drive/folders/1WS7TPIvu-c8ZdSIeFVWUToKAtMpyKHQK?usp=sharing )

De acuerdo al Testing con los usuarios en mensión, nuestra aplicación web cumple con los estandares de usabilidad y es de architectura amigable, porque navegar en la interfaz es sencillo y preciso, además de que muestra la data que el usuario desea obtener, mas no información irrelevante.

Otra de las finalidad del testing con usuario, fue comprobar que si se habían priorizado las funcionalidades requeridas, lo cual, según feedback, fue favorable.







