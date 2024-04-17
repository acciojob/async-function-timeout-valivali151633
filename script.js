//your JS code here. If required.



const btn = document.getElementById("btn")
btn.addEventListener("click" , async () => {
  let text = document.getElementById("text").value;
  let delay = document.getElementById("delay").value;
  await displayMessage(text , delay);
})


async function displayMessage(text , delay){

  const delayTime = parseInt(delay);
 await new Promise ((resolve , reject) => {
    setTimeout(()=> {
      resolve(document.getElementById("output").innerText = text)
    }, delayTime*1000);

  })


}