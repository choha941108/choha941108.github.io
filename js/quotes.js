const quotes = [
    {
        quote: "고양이는 매력과 독립성을 상징하기도 하지만, 인간과 동등하게 위대한 우정과 애정을 나눌 수도 있는 동물이다.",
        author: " - 마르게리타 해크 - "
    },
    {
        quote: "고양이는 철저히 정직하다. 인간은 이런저런 이유로 자신의 감정을 숨기기도 하지만, 고양이는 그렇지 않다.",
        author: " - 어니스트 헤밍웨이",
    },    
    {
        quote: "개는 산문. 고양이는 시.",
        author: " - 장 버든 - " ,
    },    
    {
        quote: "고양이는 우리에게 한 가지 사실을 가르쳐주려고 세상에 있는 것 같다. 완벽하게 몰입하면,한순간도 영원처럼 살 수 있다는 것 말이다.",
        author: " - 제프리 무사예프 마송 - ",
    },    
    {
        quote: "고양이와 함께 놀 때면 내가 고양이를 데리고 노는 것인지, 고양이가 나를 데리고 노는 것인지, 알 수가 없더라",
        author: " - 미셸 드 몽테뉴 - ",
    },    
    {
        quote: "새끼고양이는 동물의 왕국 정원 속의 장미꽃 봉오리다.",
        author: " - 로버트 사우디 - ",
    },    
    {
        quote: "고양이는 길들이기가 아주 어렵다고 들었다. 하지만 그렇지 않다. 내 고양이는 이틀 만에 나를 길들였다.",
        author: " - 빌 테이나 - ",
    },    
    {
        quote: "고양이는 놀랍도록 예민한 청력을 가지고 있지만, 당신이 부를 때는 귀머거리가 된다.",
        author: " - 작자 미상 - ",
    },    
    {
        quote: "인간이 불행에서 벗어날 수 있는 방법이 두 가지 있다. 그것은 바로 음악과 고양이다.",
        author: " - 알베르트 슈바이처 - ",
    },    
    {
        quote: "한 동물을 사랑하기 전까지 우리 영혼의 일부는 잠든 채로 있다.",
        author: " - 아나톨 프랑스 - ",
    }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;