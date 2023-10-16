document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("showall").addEventListener("click", function () {
        console.log("Show All clicked");
        document.getElementsByClassName("watch")[0].src = "http://moneyinc.com/wp-content/uploads/2018/05/Victorinox-Watches-2.jpg"
        document.getElementsByClassName("watch")[1].src = "https://images6.alphacoders.com/349/349397.jpg"
        document.getElementsByClassName("watch")[2].src = "https://cdn-s3.touchofmodern.com/products/000/077/522/22c02449ec1fd63fd681f21ba0820edf_large.jpg?1395425284"
        document.getElementsByClassName("car")[0].src = "https://wallup.net/wp-content/uploads/2017/11/23/533023-Lamborghini-car-car_show-photography-black_cars-luxury_cars.jpg"
        document.getElementsByClassName("car")[1].src = "https://wallpapercave.com/wp/wp6522801.jpg"
        document.getElementsByClassName("car")[2].src = "https://tonyferraricertified.com/wp-content/uploads/2018/08/sportscar-17583_1920.jpg"
        document.getElementsByClassName("neclace")[0].src = "https://i.pinimg.com/originals/43/e8/44/43e844a961445c6192276f5680fd6358.jpg"
        document.getElementsByClassName("neclace")[1].src = "https://media.istockphoto.com/photos/round-diamonds-necklace-picture-id163122066?k=6&m=163122066&s=612x612&w=0&h=sCj66Zlwt1VOBNpi3yMVW4t-669d5YkwEmFm6lOJIqA="
        document.getElementsByClassName("neclace")[2].src = "https://media.istockphoto.com/photos/shiny-heartshaped-diamond-pendant-on-silver-colored-chain-picture-id172369175?k=6&m=172369175&s=612x612&w=0&h=NhXV1YlekiT7vdV9calyqSWkgkdOVAxlK-DFOooTxmE="
        document.getElementsByClassName("flower")[0].src = "https://2.bp.blogspot.com/-vPGbWuXmzC4/T28e9PTycfI/AAAAAAAAEbo/ZiB4XVEZ-vQ/s1600/eswar-beautiful-hibiscus-flower-dsc02642.jpg"
        document.getElementsByClassName("flower")[1].src = "http://3.bp.blogspot.com/-2_uQf67bInA/UAFQxIwX8qI/AAAAAAAAAC4/G7mqOd8glAA/s1600/Nature_Flowers_Beautiful_flowers.jpg"
        document.getElementsByClassName("flower")[2].src = "http://upload.wikimedia.org/wikipedia/commons/3/38/Flower_July_2011-2_1_cropped.jpg"
    });

    document.getElementById("watches").addEventListener("click", function () {
        document.getElementsByClassName("watch")[0].src = "http://moneyinc.com/wp-content/uploads/2018/05/Victorinox-Watches-2.jpg "
        document.getElementsByClassName("watch")[1].src = "https://images6.alphacoders.com/349/349397.jpg"
        document.getElementsByClassName("watch")[2].src = "https://cdn-s3.touchofmodern.com/products/000/077/522/22c02449ec1fd63fd681f21ba0820edf_large.jpg?1395425284"
        document.getElementsByClassName("car")[0].src = " "
        document.getElementsByClassName("car")[1].src = " "
        document.getElementsByClassName("car")[2].src = " "
        document.getElementsByClassName("neclace")[0].src = " "
        document.getElementsByClassName("neclace")[1].src = " "
        document.getElementsByClassName("neclace")[2].src = " " 
        document.getElementsByClassName("flower")[0].src = " "
        document.getElementsByClassName("flower")[1].src = " "
        document.getElementsByClassName("flower")[2].src = " "
    });

    document.getElementById("cars").addEventListener("click", function () {
        document.getElementsByClassName("watch")[0].src = " "
        document.getElementsByClassName("watch")[1].src = " "
        document.getElementsByClassName("watch")[2].src = " "
        document.getElementsByClassName("car")[0].src = "https://wallup.net/wp-content/uploads/2017/11/23/533023-Lamborghini-car-car_show-photography-black_cars-luxury_cars.jpg"
        document.getElementsByClassName("car")[1].src = "https://wallpapercave.com/wp/wp6522801.jpg "
        document.getElementsByClassName("car")[2].src = " https://tonyferraricertified.com/wp-content/uploads/2018/08/sportscar-17583_1920.jpg"
        document.getElementsByClassName("neclace")[0].src = " "
        document.getElementsByClassName("neclace")[1].src = " "
        document.getElementsByClassName("neclace")[2].src = " " 
        document.getElementsByClassName("flower")[0].src = " "
        document.getElementsByClassName("flower")[1].src = " "
        document.getElementsByClassName("flower")[2].src = " "
    });

    document.getElementById("neclaces").addEventListener("click", function () {
        document.getElementsByClassName("watch")[0].src = " "
        document.getElementsByClassName("watch")[1].src = " "
        document.getElementsByClassName("watch")[2].src = " "
        document.getElementsByClassName("car")[0].src = " "
        document.getElementsByClassName("car")[1].src = " "
        document.getElementsByClassName("car")[2].src = " "
        document.getElementsByClassName("neclace")[0].src = " https://i.pinimg.com/originals/43/e8/44/43e844a961445c6192276f5680fd6358.jpg"
        document.getElementsByClassName("neclace")[1].src = "https://media.istockphoto.com/photos/round-diamonds-necklace-picture-id163122066?k=6&m=163122066&s=612x612&w=0&h=sCj66Zlwt1VOBNpi3yMVW4t-669d5YkwEmFm6lOJIqA= "
        document.getElementsByClassName("neclace")[2].src = "https://media.istockphoto.com/photos/shiny-heartshaped-diamond-pendant-on-silver-colored-chain-picture-id172369175?k=6&m=172369175&s=612x612&w=0&h=NhXV1YlekiT7vdV9calyqSWkgkdOVAxlK-DFOooTxmE= "
        document.getElementsByClassName("flower")[0].src = " "
        document.getElementsByClassName("flower")[1].src = " "
        document.getElementsByClassName("flower")[2].src = " "
    });

    document.getElementById("flowers").addEventListener("click", function () {
        document.getElementsByClassName("watch")[0].src = " "
        document.getElementsByClassName("watch")[1].src = " "
        document.getElementsByClassName("watch")[2].src = " "
        document.getElementsByClassName("car")[0].src = " "
        document.getElementsByClassName("car")[1].src = " "
        document.getElementsByClassName("car")[2].src = " "
        document.getElementsByClassName("flower")[0].src = "https://2.bp.blogspot.com/-vPGbWuXmzC4/T28e9PTycfI/AAAAAAAAEbo/ZiB4XVEZ-vQ/s1600/eswar-beautiful-hibiscus-flower-dsc02642.jpg "
        document.getElementsByClassName("flower")[1].src = "http://3.bp.blogspot.com/-2_uQf67bInA/UAFQxIwX8qI/AAAAAAAAAC4/G7mqOd8glAA/s1600/Nature_Flowers_Beautiful_flowers.jpg "
        document.getElementsByClassName("flower")[2].src = "http://upload.wikimedia.org/wikipedia/commons/3/38/Flower_July_2011-2_1_cropped.jpg "
        document.getElementsByClassName("neclace")[0].src = " "
        document.getElementsByClassName("neclace")[1].src = " "
        document.getElementsByClassName("neclace")[2].src = " " 
    });
});

