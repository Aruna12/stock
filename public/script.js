function makeRequest(
  elementId,
  fetchURL,
  fetchOpts = { method: "GET" },
  successCb = res => alert(res.message)
) {
  let elem = document.getElementById(elementId);
  elem.addEventListener("click", event =>
    fetch(fetchURL, fetchOpts)
      .then(res => res.json())
      .then(successCb)
  );
  return elem;
}

makeRequest("order", "/order", { method: "POST" });
makeRequest("expired", "/expired", { method: "DELETE" });
makeRequest("discount", "/discount", { method: "POST" });
makeRequest("show", "/show", { method: "GET" }, res => {
  let showList = document.getElementById("show-all");
  res.message.forEach(product => {
    let li = document.createElement("li");
    li.innerText = ` ${product.name} - ${product.qty}`;
    showList.appendChild(li);
  });
});
