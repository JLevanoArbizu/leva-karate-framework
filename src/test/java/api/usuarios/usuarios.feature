Feature: Nivel 3 - Prueba de API Protegida

  Background:
    # 1. Llamamos al archivo auth.feature y guardamos el resultado
    * def motorAuth = call read('classpath:api/auth/auth.feature')

    # 2. Extraemos la variable 'accessToken' que creamos en el Paso 1
    * def tokenExtraido = motorAuth.accessToken

    # 3. Configuramos la cabecera global de Autorización
    * header Authorization = 'Bearer ' + tokenExtraido


  Scenario: Consultar endpoint protegido enviando el Token
    # Usamos el endpoint GET de postman-echo para ver qué cabeceras recibe
    Given url 'https://postman-echo.com/get'
    When method get
    Then status 200

    # Imprimimos la respuesta para confirmar visualmente
    * print '*** CABECERAS RECIBIDAS POR EL SERVIDOR ***'
    * print response.headers

    # Validamos que el servidor haya recibido nuestro Bearer token
    And match response.headers.authorization == 'Bearer mi_token_simulado_9999'