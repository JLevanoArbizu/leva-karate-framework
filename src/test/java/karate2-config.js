function fn() {
    var config = {
        authClientId: '',
        authClientSecret: '',
        authUsername: '',
        authPassword: ''
    };

    try {
        // 1. Invocamos las clases nativas de Java necesarias
        var Properties = Java.type('java.util.Properties');
        var FileInputStream = Java.type('java.io.FileInputStream');

        // 2. Instanciamos los objetos
        var props = new Properties();
        var fileStream = new FileInputStream('config/secrets.properties');

        // 3. Cargamos el archivo físico en la memoria de Java
        props.load(fileStream);

        karate.log('☕ EXITO: Leyendo credenciales usando Java Properties');

        // 4. Extraemos los valores usando el método getProperty()
        config.authClientId = props.getProperty('CLIENT_ID');
        config.authClientSecret = props.getProperty('CLIENT_SECRET');
        config.authUsername = props.getProperty('USERNAME');
        config.authPassword = props.getProperty('PASSWORD');

        // 5. IMPORTANTE: Cerramos el archivo para liberar memoria
        fileStream.close();

    } catch (e) {
        karate.log('⚠️ ADVERTENCIA: No se encontró el archivo secrets.properties');
    }

    return config;
}