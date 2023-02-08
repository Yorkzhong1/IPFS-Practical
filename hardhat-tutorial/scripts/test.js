const isConnected = false;
const div = document.getElementById("buttonDiv");

if (isConnected) {
  const time = new Date().toLocaleString();
  div.innerHTML = `<p>Current time: ${time}</p>`;
} else {
  div.innerHTML = `<button id="connectButton">Connect to MetaMask</button>`;
  document.getElementById("connectButton").addEventListener("click", function() {
    // Connect to MetaMask here
  });
}
