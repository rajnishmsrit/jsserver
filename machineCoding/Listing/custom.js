console.log("hello from custom js hel")

getData();


async function getData(){
  const response= await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita%')
  console.log(response);
  const data = await response.json();
  return data;
}