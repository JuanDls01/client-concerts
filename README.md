# CLIENT-CONCERTS

## Comienzo rapido
 
 ```bash
 npm install
 npm start
 ```

 ## Protecion de Rutas
 Para proteger las rutas, se debe implementar el custom hook 'useRoleProtected' en el componente usado como elemento de la ruta.

  ```js
    const App = () {
        return (
            <div className="App">
            <Routes>
                {/* RUTA PUBLICA */}
                <Route index element={<Home />} />
                {/* RUTA SOLO ADMIN */}
                <Route path="/adminDashboard"  element={<MyProtectedComponent/>} />
            </Routes>
            </div>
        );
        }
```
 *El argumento puede ser un STRING o un ARRAY de STRINGS
 ```js
    import { useRoleProtected } from '../../hooks/useRoleProtected';

    const MyProtectedComponent = () => {
        useRoleProtected('admin');  //useRoleProtected(['admin', 'vendedor]); 
        return <div>MyComponent</div>;
    }
```


Para el correcto funcionamiento de esta página, se deberá utilizar la api del siguiente repositorio: https://github.com/Vegajor1112/api-concerts
