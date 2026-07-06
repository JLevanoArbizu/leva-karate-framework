import com.intuit.karate.junit5.Karate;

class KarateRunner {

    @Karate.Test
    Karate testAll() {
        // Le indicamos a Karate que busque los features dentro de la carpeta 'api'
        return Karate.run("classpath:api").relativeTo(getClass());
    }
}