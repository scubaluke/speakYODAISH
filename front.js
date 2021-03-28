const textInput = document.querySelector('#toYoda')
const printResponse = document.querySelector('.response')

async function getYoda() {
  
    const url = `http://yoda-api.appspot.com/api/v1/yodish?text=${encodeURIComponent(textInput.value)}`
    try {
        const res = await fetch(url);
        const data = await res.json()
        console.log(data.yodish);
       return printResponse.textContent = data.yodish
    } catch (err) {
        console.error(err);
    }
}
document.querySelector('button').addEventListener('click', getYoda)
