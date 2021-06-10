console.log("ml5 version", ml5.version)
clisefier = ml5.imageClassifier('MobileNet', modelLoded);
classi= ml5.imageClassifier('Azure', modelLoded);
function modelLoded() {
    console.log("model loded")
}
function check() {
    img = document.getElementById("capture_img");
    clisefier.classify(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error("error");
    }
    else {
        console.log(results);
        document.getElementById("mobilenet").innerHTML = results[0].label;
        document.getElementById("azure").innerHTML = results[0].label;
    }
}
var image = ["bottle.jpg","AmazonBasics-Ergonomic-Wireless-PC-Mouse.webp",
"10180035-9289-4e73-ba85-dd657fd26de1_SN002ComputerTypeNew.jpg", 
"alaskahouse.jpg",
"Nice-bugatti-car-wallpaper-free-download_168.jpg",
"pen.jpg",
"paint.jpg",
"CUP.jpg",
"Book_Cover_PSD_Mockup_Preview_Big1-e1399726435173.jpg"];
var i=0;
function nextpic(){document.getElementById("capture_img").src=image[i];
i++;
 if (i == 9)
{i=0;}}