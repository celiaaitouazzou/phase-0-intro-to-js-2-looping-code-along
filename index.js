// Code your solutions in this file

function writeCards(nameList,occasion)
{
    let cards = [];

    for(let i = 0 ; i < nameList.length ; i++)
    {
        cards.push(`Thank you, ${nameList[i]}, for the wonderful ${occasion} gift!`)
    }

    return cards;
}

function countDown(n)
{
    for(let i = n; i >= 0;i--){
        console.log(i);
    }
}