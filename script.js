const button = document.querySelector("#jokeBtn");
const joke = document.querySelector("#joke");

const url = "https://icanhazdadjoke.com/";
const config = {
  headers: {
    Accept: "application/json",
  },
};

const handleRequest = async () => {
  const { data } = await axios.get(url, config);
  joke.innerHTML = data.joke;
};

button.addEventListener("click", () => {
  handleRequest();
});
