# README - Guía para un Desarrollo Organizado

## 1. **Introducción**

Este proyecto sigue ciertas convenciones y un flujo de trabajo para asegurar que el desarrollo sea organizado y eficiente. Este documento es la guía para entender cómo trabajar en este proyecto y seguir las buenas prácticas que hemos establecido.

---

## 2. **Flujo de trabajo con Ramas**

### 2.1 **Estructura de Ramas**

El flujo de trabajo de ramas sigue el modelo **Git Flow** con algunas adaptaciones. Las principales ramas de este proyecto son:

- **`main`**: Esta es la rama principal. Siempre debe estar lista para producción y contener solo código que haya pasado las pruebas y revisiones necesarias.
- **`develop`**: La rama de desarrollo. Todo el código nuevo se fusiona aquí. Esta rama es la base para nuevas funcionalidades.
- **`feature/{nombre-de-la-feature}`**: Las ramas de características se crean a partir de `develop`. Estas ramas deben ser pequeñas y enfocadas en una tarea específica o funcionalidad.
- **`bugfix/{nombre-del-bug}`**: Las ramas de corrección de errores se crean a partir de `develop` o `main` según sea necesario.
- **`hotfix/{nombre-del-hotfix}`**: Ramas de corrección urgente que se crean a partir de `main` para arreglar errores críticos que deben ser resueltos rápidamente.

### 2.2 **Flujo de trabajo básico**

1. **Creación de ramas**: Siempre crea una nueva rama a partir de `develop` para trabajar en nuevas características o correcciones. Usa nombres descriptivos.
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/nueva-funcionalidad
   ```

2. **Trabajo en la rama**: Trabaja en tus cambios de manera incremental. Realiza commits frecuentes con mensajes claros.

3. **Commits**: Los commits deben ser pequeños, enfocados y con mensajes claros. Usa el siguiente formato para los mensajes de commit:
   - **Formato**: `[tipo] nombre-de-la-tarea - descripción breve`
     - Ejemplo: `[feat] navbar - agregar barra de navegación`
     - Ejemplo: `[fix] formulario - corregir validación de email`
   - **Tipos comunes de commit**:
     - `[feat]`: nueva funcionalidad
     - `[fix]`: corrección de errores
     - `[docs]`: cambios en la documentación
     - `[style]`: cambios en el estilo de código (espacios, formato)
     - `[refactor]`: cambios en el código que no afectan el comportamiento
     - `[test]`: agregar o modificar pruebas
     - `[chore]`: tareas generales (actualización de dependencias, configuración)

   Para agregar cambios:
   ```bash
   git add .
   git commit -m "[feat] navbar - agregar barra de navegación"
   ```

4. **Push y Pull Request**: Cuando hayas terminado de trabajar en tu rama, haz un push y crea un Pull Request (PR) hacia `develop` (o `main` si es una corrección urgente).

   ```bash
   git push origin feature/nueva-funcionalidad
   ```

   Asegúrate de asignar un revisor para que valide tus cambios.

5. **Revisión de código**: Antes de fusionar, se debe realizar una revisión de código (code review). Asegúrate de que el código esté bien documentado, probado y siga las guías de estilo establecidas.

6. **Merge**: Después de la revisión, el PR será aprobado y fusionado a `develop` (o `main` en el caso de una corrección urgente).

### 2.3 **Sincronización de Ramas**

Antes de comenzar a trabajar o antes de hacer un pull request, asegúrate de que tu rama esté actualizada con los últimos cambios de `develop` o `main`:

```bash
git checkout develop
git pull origin develop
git checkout feature/nueva-funcionalidad
git merge develop
```

Si tienes conflictos, resuélvelos antes de hacer un push.

---

## 3. **Convenciones de Sintaxis y Estilo de Código**

### 3.1 **Convenciones de Código**

- **Indentación**: Usa 2 espacios para la indentación.
- **Líneas**: Las líneas de código no deben superar los 80 caracteres. Si una línea es demasiado larga, divídela de manera clara.
- **Nombres de Variables y Funciones**: Usa **camelCase** para las variables y funciones. Los componentes de React deben usar **PascalCase**.
  - Ejemplo correcto:
    ```tsx
    const nombreDeUsuario = "Juan";
    const getUsuario = () => {...};
    ```
  - Ejemplo de componente en React:
    ```tsx
    const MiComponente = () => {...};
    ```
- **Componentes**: Los componentes de React deben estar en archivos separados y deben exportarse de forma predeterminada.

### 3.2 **Uso de TailwindCSS**

Este proyecto utiliza **TailwindCSS** para la gestión de estilos. Para mantener la coherencia, los estilos **no deben escribirse directamente en los componentes**. En su lugar, deberás aplicar clases de Tailwind en tus archivos de CSS (usando Tailwind desde el archivo CSS).

#### 3.2.1 **Clases CSS y Convenciones**

Usamos **kebab-case** para las clases CSS. Esto es consistente con la convención de nombres de Tailwind y también mejora la legibilidad.

Ejemplo:

```html
<div class="bg-blue-500 text-white p-4 rounded-md">
  Esto es un ejemplo.
</div>
```

### 3.3 **Comentarios y Documentación**

- **Comentarios**: Usa comentarios de línea para explicar porciones complejas del código. Evita comentarios innecesarios.
- **JSDoc**: Documenta las funciones y componentes con JSDoc cuando sea necesario. Ejemplo:
  
  ```tsx
  /**
   * Componente que muestra la información de un usuario.
   * @param {string} nombre Nombre del usuario.
   * @returns {JSX.Element} El componente JSX.
   */
  const Usuario = ({ nombre }: { nombre: string }) => {
    return <div>{nombre}</div>;
  };
  ```

### 3.4 **Funciones y Métodos**

- **Funciones pequeñas**: Cada función debe hacer solo una cosa y debe tener un nombre claro que describa su comportamiento.
- **Desestructuración**: Usa desestructuración cuando sea posible para mejorar la legibilidad del código.
  
  Ejemplo:
  ```tsx
  const Usuario = ({ nombre, edad }: { nombre: string, edad: number }) => {
    return <div>{nombre} - {edad}</div>;
  };
  ```

---

## 4. **Pruebas**

Las pruebas son fundamentales para asegurar la calidad del código. Asegúrate de seguir estas pautas:

- **Usa Jest y React Testing Library** para las pruebas de React.
- **Cubre casos de borde**: No solo las funciones felices, sino también los errores y condiciones inusuales.
- **Escribe pruebas de componentes**: Asegúrate de que los componentes se comporten como se espera.

Ejemplo de una prueba básica:

```tsx
import { render, screen } from '@testing-library/react';
import Usuario from './Usuario';

test('muestra el nombre y la edad del usuario', () => {
  render(<Usuario nombre="Juan" edad={30} />);
  expect(screen.getByText(/Juan/)).toBeInTheDocument();
  expect(screen.getByText(/30/)).toBeInTheDocument();
});
```

---

## 5. **Estructura de Archivos**

Sigue una estructura de carpetas coherente para mantener el proyecto organizado. Aquí hay un ejemplo básico:

```
/src
  /components
    /Button
      Button.tsx
      Button.test.tsx
  /services
    api.ts
  /utils
    helpers.ts
  App.tsx
  index.tsx
```

---

## 6. **Dependencias y Herramientas**

- **Dependencias**: Añade nuevas dependencias solo cuando sea necesario. Usa `npm install` para instalar nuevas dependencias y `npm audit` para asegurarte de que no haya vulnerabilidades.
- **Linter y Prettier**: Usa herramientas como **ESLint** y **Prettier** para mantener el código limpio y consistente.

---

## 7. **Despliegue y Producción**

Sigue este procedimiento para el despliegue:

1. Asegúrate de que la rama `main` esté completamente actualizada y que todos los cambios estén probados.
2. Realiza un **build de producción** con:
   ```bash
   npm run build
   ```
3. Despliega los archivos generados en el servidor de producción.
