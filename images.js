let fs = require("fs");
let axios = require("axios");

let ipfsArray = [];
let promises = [];

for(let i = 0;i < 5; i++){
    let paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + i.toString(16)).substr("-64");
    promises.push(new Promise( (res, rej) => {
        //console.log(__dirname+"/export/"+paddedHex);
        fs.readFile(`${__dirname}/export/${paddedHex}.png`, (err, data) => {
            
            if(err) rej();
            ipfsArray.push({
                path: `images/${paddedHex}.png`, 
                content: data.toString("base64")    
            })
            res();
        })
    }))

}
Promise.all(promises).then( () => {
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
})
 //https://ipfs.moralis.io:2053/ipfs/QmNUYwaAWUnnt883g2VetTkXDr3H9Px98zjmgkBMnD83rc/images/0000000000000000000000000000000000000000000000000000000000000002.png