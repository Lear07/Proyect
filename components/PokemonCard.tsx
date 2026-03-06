import React from 'react';
import { View, Text, Image } from 'react-native';

// 1. Definimos la interfaz (Typescript).
interface PokemonCardProps {
  name: string;
  url: string;
}

// 2. Creamos el componente funcional recibiendo las props desestructuradas ({ name, url })
export default function PokemonCard({ name, url }: PokemonCardProps) {

  // sacar el ID 
  // A. Dividir el texto en un arreglo (array) usando las diagonales como separador.
  const partesDeUrl = url.split('/');
  //["https:", "", "pokeapi.co", "api", "v2", "pokemon", "25", ""]


  // B. Limpiar y obtener el último elemento.
  
  // pop() extrae y devuelve el último elemento del arreglo (en este caso, el número).
  const pokemonId = partesDeUrl.filter(Boolean).pop();
  // filter(Boolean) quita los espacios vacíos (como el que queda al final si la URL termina en '/').

  
  // C. Construimos la URL de la imagen concatenando el ID obtenido[cite: 43].
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

    return (
        <View style={{ alignItems: 'center', margin: 10 }}>
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 100, height: 100 }}
          />
          <Text style={{ textTransform: 'capitalize' }}>{name}</Text>
        </View>
      );
}