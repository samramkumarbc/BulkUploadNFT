let fs = require("fs");
let axios = require("axios");

let ipfsArray = [];
let promises = [];

for(let i = 0;i < 5; i++){
    let paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + i.toString(16)).substr("-64");
    
    ipfsArray.push({
        path: `metadata/${paddedHex}.json`, 
        content: {
            image: `https://ipfs.moralis.io:2053/ipfs/QmNUYwaAWUnnt883g2VetTkXDr3H9Px98zjmgkBMnD83rc/images/${paddedHex}.png`,
            name: `My Youtube test NFT #${i}`,
            description: "Awesome NFT for my youtube video"
        }
    })
}
 


    axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder",
        ipfsArray,
        {
            headers: {
                "X-API-KEY": 'y1q9Nb236JIN3F5w4F1xGDKGpu9PInVof2cZCAeESguNm1vtQb8LNYBOo9ZeTzTI',
                "Content-Type": "application/json",
                "accept": "application/json"
            }
        }
    ).then( (res) => {
        console.log(res.data);
    })
    .catch( (error) => {
        console.log(error)
    })

 //{"image":"ipfs://QmNUYwaAWUnnt883g2VetTkXDr3H9Px98zjmgkBMnD83rc/images/0000000000000000000000000000000000000000000000000000000000000004.png","name":"My Youtube test NFT #4","description":"Awesome NFT for my youtube video"}