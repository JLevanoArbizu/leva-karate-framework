Feature: Nivel 2, 3 y 4 - Generador de Token ROPC

  Scenario: Simulacion de Autenticacion Estatica
    Given url 'https://postman-echo.com/post'

    # -------------------------------------------------------------------------
    # NIVEL 4: USO DE VARIABLES GLOBALES
    # Ya no hay datos quemados. Estas variables vienen de karate-config.js
    # -------------------------------------------------------------------------
    And form field grant_type = 'password'
    And form field client_id = authClientId
    And form field client_secret = authClientSecret
    And form field username = authUsername
    And form field password = authPassword

    When method post
    Then status 200

    * def accessToken = 'mi_token_simulado_9999'