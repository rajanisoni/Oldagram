import {posts} from "./Data.js";
const content = document.getElementById("content")


// Render Html
let postData="";
for (let post of posts){
    postData +=`
   
             <section class="section1">
            
                <img class="avatar" src="${post.avatar}">
                <div class="avatar-intro">
                     <h3>${post.name}</h3>
                     <p>${post.location}</p>
                </div>
             </section>
        
        
             <section class="section2">
            
                <img class="post-img"src="${post.post}">
                <div class="icons-div">
                     <i class="fa-solid fa-heart fa-2x icon heart"></i>
                     <i class="fa-regular fa-comment fa-2x icon comment "></i>
                     <i class="fa-solid fa-share-from-square fa-2x icon share"></i>
                 </div>
                 
                <h3><span class="like"> ${post.likes}</span> likes</h3> 
                
            
            
                  <div class="post-description">
                       <h3>${post.username}</h3> 
                       <p>${post.comment}</p>
                 </div>
            
             </section>
             `
}
content.innerHTML=postData;



// Inceraseing and decresing the likes on click
 
     const likeBtn = document.getElementsByClassName("heart")
     let firstTimeClicked = true;
     for (let i=0; i<likeBtn.length; i++){
         
     likeBtn[i].addEventListener("click",function(){
            let likeNumber = document.getElementsByClassName("like")
            let stringToNum = parseInt(likeNumber[i].innerHTML)
            
            
            if(firstTimeClicked==true){
                
                stringToNum += 1
                likeNumber[i].innerHTML=stringToNum
                likeBtn[i].classList.add("red")
               //  console.log(stringToNum)
                
                firstTimeClicked = false;
            }
            
               else {
                    stringToNum-=1
                    likeNumber[i].innerHTML=stringToNum
                   likeBtn[i].classList.remove("red") 
                    // console.log(stringToNum)
                    
                    firstTimeClicked = true;
            }
})}   