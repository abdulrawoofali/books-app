const axios = require('axios')


 
for(let i=0;i<10;i++){
    axios.post("http://localhost:8081/api/v2/book",{
        title: "Text Book "+i,
        objective: "Learn somthing ....",
        author: "5fc1cef18f3f7318d47b2e2d",
        summary: "Learning is the best way to sucessed in life",
        isbn: "9781449331818"+ +Math.random()*10,
        genre: "5fc1e3e136abdb33085c65c5",
        avatar_url: "https://shadycharacters.co.uk/wp/wp-content/uploads/2016/12/Book_IMG_1754-1-e1481474081467-980x1280.jpg",
        likes: 100+Math.random()*10,
      
    }).then(_ => console.log("posted data")).catch(err => console.log(err));
}

for(let i=0;i<10;i++){
    axios.post("http://localhost:8081/api/v2/book",{
        title: "Comic Book"+i,
        objective: "Learn somthing ....",
        author: "5fc1cef18f3f7318d47b2e2d",
        summary: "Learning is the best way to sucessed in life",
        isbn: "9781449331817"+ +Math.random()*10,
        genre: "5fc1de6836abdb33085c65c0",
        avatar_url: "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-1-CRC.png",
        likes: 50+Math.random()*10,
      
    }).then(_ => console.log("posted data")).catch(err => console.log(err));
}

for(let i=0;i<10;i++){
    axios.post("http://localhost:8081/api/v2/book",{
        title: "crime Book"+i,
        objective: "Learn somthing ....",
        author: "5fc1cf818f3f7318d47b2e2e",
        summary: "Learning is the best way to sucessed in life",
        isbn: "9781449331817"+ +Math.random()*10,
        genre: "5fc1df3636abdb33085c65c1",
        avatar_url: "https://awards.kyoorius.com/2015/design/wp-content/uploads/2015/08/26621.jpg",
        likes: 50+Math.random()*10,
      
    }).then(_ => console.log("posted data")).catch(err => console.log(err));
}


for(let i=0;i<10;i++){
    axios.post("http://localhost:8081/api/v2/book",{
        title: "Histroy Book"+i,
        objective: "Learn somthing ....",
        author: "5fc1cbd78f3f7318d47b2e2b",
        summary: "Learning is the best way to sucessed in life",
        isbn: "9781449331817"+ +Math.random()*10,
        genre: "5fc1df3636abdb33085c65c1",
        avatar_url: "https://i0.wp.com/wsap.academy/wp-content/uploads/2015/03/1123676.jpg",
        likes: 50+Math.random()*10,
      
    }).then(_ => console.log("posted data")).catch(err => console.log(err));
}


//https://shadycharacters.co.uk/wp/wp-content/uploads/2016/12/Book_IMG_1754-1-e1481474081467-980x1280.jpg