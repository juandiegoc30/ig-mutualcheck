# Guía de uso

> 🌐 Also available in [English](USAGE.md)

## Requisitos

- Google Chrome o Microsoft Edge.
- La extensión cargada en modo desarrollador (ver [README](../README.es.md) para los pasos de instalación).
- Una sesión activa de Instagram abierta en `https://www.instagram.com/`.

---

## Abrir la extensión

1. Navega a `https://www.instagram.com/` y asegúrate de tener sesión iniciada.
2. Haz clic en el ícono de la extensión en la barra de herramientas del navegador.  
   El panel aparece desde el lado derecho de la página.  
   Volver a hacer clic en el ícono, o presionar **Cerrar**, oculta el panel.

---

## Idioma

La interfaz está disponible en **español** e **inglés**.  
Al abrirse por primera vez, el idioma se detecta automáticamente desde la configuración regional del navegador — los navegadores en español inician en español; el resto lo hace en inglés.

Para cambiar manualmente, haz clic en el botón de bandera (🇪🇸 / 🇺🇸) en la esquina superior derecha del panel. La preferencia se guarda y se restaura en visitas futuras.

---

## Analizar tu cuenta

1. Presiona **Analizar cuenta**.  
   La extensión lee tus listas de seguidores y seguidos directamente a través de la sesión activa de Instagram. No se requiere contraseña ni credenciales adicionales.
2. Mientras se cargan los datos aparecen mensajes de estado:
   - *Detectando cuenta autenticada…*
   - *Leyendo seguidores de @usuario… N encontrados.*
   - *Leyendo cuentas seguidas por @usuario… N encontradas.*
3. Al terminar, la barra de resumen muestra:
   | Etiqueta | Significado |
   |---|---|
   | **Seguidores** | Total de cuentas que te siguen |
   | **Seguidos** | Total de cuentas que sigues |
   | **No te siguen** | Cuentas que sigues pero que no te siguen de vuelta |

4. La lista debajo del resumen muestra cada cuenta que no te sigue de vuelta, con su foto de perfil, nombre, usuario y distintivos de cuenta **verificada** ✓ y **privada** 🔒.

> **Cancelar en cualquier momento** presionando **Cancelar** mientras la carga está en curso.

---

## Filtrar resultados

Usa los controles sobre la lista para acotar los resultados antes de actuar.

### Búsqueda de texto

Escribe en el cuadro de búsqueda para filtrar por **usuario** o **nombre**.  
Elige el modo de coincidencia con los botones de opción:

| Modo | Comportamiento |
|---|---|
| **Contiene** | Muestra entradas que incluyan el texto escrito en cualquier posición |
| **Empieza por** | Muestra entradas cuyo usuario o nombre comience con el texto escrito |
| **Coincide exacto** | Muestra solo las entradas que coincidan exactamente con el texto completo |

Presiona **Limpiar filtro** para restablecer la búsqueda.

### Tipo de cuenta

Filtra la lista para mostrar solo un tipo específico de cuenta:

| Opción | Muestra |
|---|---|
| **Todas** | Todas las cuentas que no siguen de vuelta |
| **Verificadas** | Cuentas con distintivo de verificación |
| **No verificadas** | Cuentas sin distintivo de verificación |
| **Privadas** | Cuentas con perfil privado |
| **Públicas** | Cuentas con perfil público |

La barra de estado debajo de los filtros indica cuántos resultados son visibles en este momento (p. ej. *Mostrando 12 de 47 resultados*).

---

## Seleccionar cuentas

- La casilla **Seleccionar todo** en la parte superior de la lista selecciona o deselecciona todas las entradas visibles a la vez.
- Las casillas individuales permiten incluir o excluir cuentas específicas.
- El contador debajo de la lista registra la selección actual (p. ej. *10 de 47 seleccionadas*).

Desmarca cualquier cuenta que quieras conservar como seguida antes de continuar.

---

## Exportar y copiar

Haz clic en **Exportar** para ver las opciones de exportación:

| Acción | Resultado |
|---|---|
| **Exportar CSV** | Descarga un archivo `.csv` con usuario, nombre, estado de verificación y privacidad de cada cuenta en la lista actual (filtrada) |
| **Exportar JSON** | Descarga un archivo `.json` con los mismos datos |
| **Copiar lista** | Copia todos los nombres de usuario de la lista actual al portapapeles |

Las exportaciones reflejan el filtro activo — solo se incluyen las cuentas visibles en ese momento.

---

## Dejar de seguir

1. Asegúrate de que las cuentas que deseas dejar de seguir estén **marcadas**.
2. Elige una velocidad para dejar de seguir:
   | Velocidad | Pausa entre cuentas |
   |---|---|
   | **Equilibrada** *(recomendada)* | 5 - 8 segundos por cuenta |
   | **Rápida** | 2,5 - 4,5 segundos por cuenta |
3. Presiona **Dejar de seguir seleccionadas**.
4. Un cuadro de confirmación resume cuántas cuentas se dejarán de seguir y la velocidad elegida. Confirma para continuar.
5. Aparecen mensajes de progreso para cada cuenta: *Dejando de seguir @usuario (N/total)…*
6. Presiona **Cancelar** en cualquier momento para detener el proceso.
7. Un mensaje final indica cuántas cuentas se dejaron de seguir correctamente y cuántas fallaron.

> **Nota:** Instagram puede limitar temporalmente tu cuenta si realizas demasiadas acciones de dejar de seguir en poco tiempo. La velocidad **Equilibrada** reduce este riesgo. Si ves errores, espera un momento antes de volver a intentarlo.

---

## Privacidad y seguridad

- La extensión opera íntegramente en tu navegador usando tu **sesión activa de Instagram**.
- **No** solicita tu contraseña, no almacena credenciales ni envía datos a servidores externos.
- Todo el procesamiento ocurre localmente en la pestaña del navegador.

---

## Solución de problemas

| Síntoma | Causa probable | Solución |
|---|---|---|
| El panel no se abre | Extensión no cargada o página distinta a instagram.com | Recarga la página e inténtalo de nuevo; verifica que la extensión esté habilitada |
| "Cuenta: no detectada" | Sin sesión iniciada en Instagram | Inicia sesión en instagram.com y recarga la página |
| El análisis falla o queda incompleto | Sesión expirada o límite de Instagram alcanzado | Cierra sesión y vuelve a iniciarla, o espera unos minutos y reintenta |
| Errores al dejar de seguir algunas cuentas | Restricción temporal de Instagram | Espera 10-15 minutos antes de reintentar con esas cuentas |
| El idioma no cambia | Caché del navegador | Haz clic en el botón de bandera manualmente para forzar el cambio |
