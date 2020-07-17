function handleSubmit(event) {
  event.preventDefault();

  let url = JSON.stringify(document.getElementById("name").value);

  if (Client.checkForURL(url)) {
    console.log("::: Form Submitted :::, " + url);
    fetch("http://localhost:8081/article", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: url }),
    })
      .then(async (res) => {
        return res.json();
      })
      .then(function (data) {
        document.getElementById("article_id").innerHTML = data.stories[0].id;
        document.getElementById("article_title").innerHTML =
          data.stories[0].title;
        document.getElementById("article_summary").innerHTML = JSON.stringify(
          data.stories[0].summary
        );
      });
  } else {
    alert("Please enter a valid URL");
  }
}

export { handleSubmit };
