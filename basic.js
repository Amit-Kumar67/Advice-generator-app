
let api = "https://api.adviceslip.com/advice";


const box = document.querySelector("#box")
const quote = document.querySelector("#quote")
const btn = document.querySelector("#btn")

const fetchQuote = async()=>{
    try {
        const res1 = await fetch(api)
        const result1 = await res1.json()
        console.log(result1)
        
        quote.innerHTML = `"${result1.slip.advice}"`
         
    } catch (error) {
        console.log(error)
    }
}
fetchQuote();

btn.addEventListener('click',()=>{
    fetchQuote()
})


