function activateGallery(){
  let thumbnails = document.querySelectorAll("#gallery-thumbs >div >img")
  let mainImage=document.querySelector("#gallery-photo img");
  let galleryInfo=document.querySelector("#gallery-info")
  let title=galleryInfo.querySelector(".title")
  let description = galleryInfo.querySelector(".description")


  thumbnails.forEach(function(thumbnail){
    thumbnail.addEventListener("click", function(){
    //Set clicked image as main image
    let newImageSrc=thumbnail.dataset.largeVersion
    let newImageAlt=thumbnail.dataset.title

    //Set clicked image to new alt
    mainImage.setAttribute("src", newImageSrc);
    mainImage.setAttribute("alt",newImageAlt);

    //set Clicked image as current image
    document.querySelector(".current").classList.remove("current")
    thumbnail.parentNode.classList.add("current")

    //Change description to current image
    title.innerHTML = thumbnail.dataset.title;
    description.innerHTML=thumbnail.dataset.description
    })
  })
}
