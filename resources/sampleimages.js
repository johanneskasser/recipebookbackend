function getRandomImage() {
    const min = 0
    const max = 10
    const random = Math.round((Math.random() * (max - min)) + min)
    //console.log(random, getImageList())
    return getImageList()[random]
}

function getImageList() {
    return [
        "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
        "https://www.watson.ch/imgdb/a6ee/Qx,A,0,0,1001,667,0,0,1001,667/1458756350626158",
        "https://images.squarespace-cdn.com/content/v1/53e52074e4b0392a271246de/1558082760967-FXJ98LCJWK5P2HEX5X19/2019-SFF-Facebook-Homepage-001-plastikfrei.jpg?format=2500w",
        "https://images.lecker.de/%C3%BCberbackene-nachos-feel-good-food-lecker-12-2019,id=3c6d3f60,b=lecker,w=590,h=442,cg=c.jpg",
        "https://img.freepik.com/vektoren-kostenlos/fast-food-illustrationssatz_121223-1482.jpg?w=2000",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXOlE4xOGubAy0FGf65ikoRuwEJRW54ERgA&usqp=CAU",
        "https://www.foodboom.de/newsletter.webp",
        "https://www.foodwatch.org/fileadmin/_processed_/3/1/csm_Doener_AdobeStock_karepa_Website2_Nachricht_a51c2c4039.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-s/11/de/d3/3d/easy-food.jpg",
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=556,505",
        "https://www.erdeundleben.com/wp-content/uploads/2021/02/folgendes-macht-unser-food-personal-wenn-es-fast-zu-mude-ist-um-zu-kochen-0-Yywyr8ju.jpg"
    ]
}

module.exports = getRandomImage()
