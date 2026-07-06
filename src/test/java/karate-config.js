function fn() {
    // 1. Inicializamos un objeto vacío que contendrá nuestras variables globales
    var config = {
        authClientId: '',
        authClientSecret: '',
        authUsername: '',
        authPassword: ''
    };

    try {
        // 2. Leemos el archivo JSON usando la función nativa de Karate
        var secretosLocales = karate.read('file:config/secrets.json');
        karate.log('✅ EXITO: Leyendo credenciales desde secrets.json');

        // 3. Mapeamos los datos del JSON a nuestras variables globales
        config.authClientId = secretosLocales.CLIENT_ID;
        config.authClientSecret = secretosLocales.CLIENT_SECRET;
        config.authUsername = secretosLocales.USERNAME;
        config.authPassword = secretosLocales.PASSWORD;

    } catch (e) {
        karate.log('⚠️ ADVERTENCIA: No se encontró el archivo secrets.json');
    }

    // 4. Retornamos el objeto. Karate inyectará estas variables en todos los .feature
    return config;
}