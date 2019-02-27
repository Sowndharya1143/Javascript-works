const quotes=[
    {
        name:"AAA",
        quote:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    },
    {
        name:"BBB",
        quote:"BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
    },
    {
        name:"CCC",
        quote:"CCCCCCCCCCCCCCCCCCCCCCCCCCCCC"
    },
    {
        name:"DDD",
        quote:"DDDDDDDDDDDDDDDDDDDDDDDDDDDDD"
    },
    {
        name:"EEE",
        quote:"EEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
    },
    {
        name:"FFF",
        quote:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
    },
    {
        name:"GGG",
        quote:"GGGGGGGGGGGGGGGGGGGGGGGGGGGGG"
    }
]
var quoteBtn =document.querySelector("#quoteBtn");
var quote=document.querySelector("#quote");
var quoteAuthor=document.querySelector("#quoteAuthor");
quoteBtn.addEventListener("click",getQuote);
function getQuote(){
    var number=Math.floor(Math.random()*quotes.length);
    quote.textContent=quotes[number].quote;
    quoteAuthor.textContent=quotes[number].name;
}