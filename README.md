Análisis de Examen 
Por: Akane Santamaria Allen
Tema: Sistema de gestión de reciclaje 
Ecoembes
Sistema de ecobloques
La acumulación de residuos no reciclables, como envolturas de galletas, tubos de pasta de dientes y plásticos rígidos, es un problema significativo, ya que estos materiales no son aceptados en centros de acopio y terminan en vertederos o, peor aún, en la naturaleza. Esto contribuye a la contaminación de suelos y cuerpos de agua, afectando la flora y fauna local, además de representar un reto logístico para su gestión.
Solución: Los ecobloques proporcionan una forma innovadora de reutilizar estos residuos no reciclables. Al compactar estos desechos en botellas plásticas de entre 1,5 y 2,5 litros, se crean bloques que pueden ser utilizados en la construcción de infraestructuras, como bancos, muros y caminos. Este proceso no solo ayuda a reducir la cantidad de basura en el medio ambiente, sino que también convierte materiales de desecho en recursos útiles para proyectos comunitarios.
Razón del proyecto: La elección de los ecobloques como tema se debe a su capacidad de ofrecer una solución accesible y sostenible para la gestión de residuos no reciclables. Esta iniciativa no solo promueve la conciencia ambiental entre la comunidad, sino que también permite que los habitantes participen activamente en la creación de espacios más limpios y sostenibles.
 
Estructura
Especificación: Se desea hacer un sistema web que nos ayude motivar a la comunidad de Limon a reciclar. En conjunto de la municipalidad de Puerto Limón trabajamos para que esto sea posible, se desea que los habitantes de esta zona fabriquen ecobloques, en sus botellas de plástico. Estos ecobloques serán utilizados para la construcción de caminos en playas de Limón. La municipalidad de Limón se encargará de la recolección.
En el sistema se implementará un contador de por cada Usuario donde por cada 50 ecobloques se le darán descuentos en tiendas locales y entradas gratis a eventos comunitarios con el fin de incentivar a los habitantes de la comunidad a participar en la elaboración de los ecobloques. 
Modelado de Entidades
Módulo de Usuario
Atributos:
•	Nombre
•	Dirección domicilaria
•	Puntos acumulados (Con los puntos acumulados se le otorgaran los premios)
•	Historial de ecobloques entregados
Funciones:
•	Visualizar su ranking y progreso (Visualizara los puntos que lleva)
•	Acceder a recompensas disponibles
Módulo de Registro de Ecobloques
Atributos:
•	ID de registro
•	ID de usuario
•	Fecha de registro
•	Cantidad ecobloques
•	Puntos otorgados
Funciones:
•	Registrar un nuevo ecobloque 
•	Verificar el registro de ecobloques y asignar puntos automáticamente al usuario
Módulo de Incentivos y Recompensas:
Atributos:
•	Tipo de recompensa (descuentos o entradas)
•	Puntos requeridos
•	Descripción de la recompensa
Funciones:
•	Mostrar lista de incentivos disponibles
•	Redimir puntos por recompensas
•	Mostrar medallas digitales al alcanzar ciertos hitos
Módulo de Ranking y Medallas:
Atributos:
•	ID de usuario
•	Puntos acumulados
•	Posición en el ranking
Funciones:
•	Mostrar tabla de usuarios con más puntos
•	Destacar a los 3 primeros lugares
•	Otorgar medallas digitales al alcanzar ciertos hitos 
Módulo de la municipalidad
Atributos:
•	ID de administrador
•	Listado de recolecciones pendientes
•	Detalles de cada usuario y su contribución
Funciones:
•	Ver registros de ecobloques y confirmar la recolección de residuos
•	Gestionar la lista de incentivos disponibles
•	Actualizar el estado de los usuarios destacados


