import React from "react";
import howManyParks from "./parks/howManyParks";

//call the imported function of howManyParks in the function below
function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}
