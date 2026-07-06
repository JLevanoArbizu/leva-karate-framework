function fn() {
    var config = {
        authClientId: '',
        authClientSecret: '',
        authUsername: '',
        authPassword: ''
    };

    // 1. Intentamos leer de la memoria del servidor (Nube / GitHub Actions)
    var envClientId = java.lang.System.getenv('AZURE_CLIENT_ID');
    var envClientSecret = java.lang.System.getenv('AZURE_CLIENT_SECRET');
    var envUsername = java.lang.System.getenv('AZURE_USERNAME');
    var envPassword = java.lang.System.getenv('AZURE_PASSWORD');

    // 2. Lógica Híbrida: Si existen en memoria, las usamos. Si no, vamos al archivo local.
    if (envClientId && envClientSecret && envUsername && envPassword) {
        karate.log('☁️ EXITO: Leyendo credenciales desde Variables de Entorno (Nube)');

        config.authClientId = envClientId;
        config.authClientSecret = envClientSecret;
        config.authUsername = envUsername;
        config.authPassword = envPassword;

    } else {
        karate.log('💻 INFO: No se detectaron variables de entorno. Buscando secrets.json local...');

        try {
            var secretosLocales = karate.read('file:config/secrets.json');

            config.authClientId = secretosLocales.CLIENT_ID;
            config.authClientSecret = secretosLocales.CLIENT_SECRET;
            config.authUsername = secretosLocales.USERNAME;
            config.authPassword = secretosLocales.PASSWORD;

            karate.log('✅ EXITO: Leyendo credenciales locales desde secrets.json');
        } catch (e) {
            karate.log('⚠️ ERROR: Tampoco se encontró el archivo secrets.json local.');
        }
    }

    return config;
}