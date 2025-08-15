
export function cookingStatus(remainingTime) {
  if (remainingTime === 0) return 'Lasagna is done.';
  if (remainingTime === undefined) return 'You forgot to set the timer.';
  return 'Not done, please wait.';
}
export function preparationTime(layers, averagePreparation = 2){
  return layers.length * averagePreparation
}
export function quantities(array) {
  let noodles = 0
  let sauce = 0
  for(let i=0;i<array.length;i++)
    {
      if(array[i]==="noodles")
        noodles +=50
      if(array[i]==="sauce")
        sauce +=0.2
    }
  return {noodles, sauce}
}
export function addSecretIngredient(friendsList, myList){
  myList.push(friendsList[friendsList.length-1])
}
export function scaleRecipe(recipe, portions = 1){
  const newRecipe = {}
  for(const ingredient in recipe)
    newRecipe[ingredient] = recipe[ingredient]*(portions/2)
  return newRecipe
}