import { useEffect , useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [results, setResults] = useState<any[]>([]);
  useEffect(() => {
    console.log("Entre entre pantalla");
    getPokemons(); // llamamos
  }, []);
  const getPokemons = async () => { // Funcion flecha
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(URL, { // fetch (Traer cambios)
      method: "Get", //POST - PUT - DELETE
    });
    console.log(response);
    const data = await response.json(); // Lo convertimos a json
    console.log(data.results);
    setResults(data.results);
  };
  
  return (
    <View>
      {results.map((item) => {
        return <Text key={item.name}> {item.name} </Text>;
      })
      }
    </View>
  );
}
