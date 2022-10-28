




// const menuToggle = document.querySelector(".toggle");
// const showcase = document.querySelector(".showcase");

// menuToggle.addEventListener("click", () => {
//   menuToggle.classList.toggle("active");
//   showcase.classList.toggle("active");
// });

// for(let i=0;i<20;i++){

//         var addCards=document.querySelector(".news-wrapper").innerHTML
//         newsWrapper.innerHTML=addCards+`
//         <div class="cards">
//                 <div class="cards-content">
//                   <div class="cards-title">
//                     <h2>Rishi Sunak, Backed By 140 MPs, Could Become UK PM Today If</h2>
//                     <p class="news-source">-NDTV News</p>
//                   </div>
//                   <div class="image">
//                     <img
//                       src="https://c.ndtvimg.com/2022-10/nrehr9ck_rishi-sunak_625x300_23_October_22.jpg"
//                       alt=""
//                       class="news-image"
//                     />
//                   </div>
//                   <div class="news-description">
//                     <p>
//                       Britain's former finance minister Rishi Sunak could end up
//                       becoming the country's next prime minister if his opponent Penny
//                       Mordaunts fail to win the backing of 100 MPs by tomorrow. Sunak
//                       already has the backing of 142 members of the parliament
//                     </p>
//                   </div>
        
//                   <button class="read-more">$readmore</button>
//                 </div>
//               </div>
              
//         `
        

// }



let newsWrapper=document.querySelector(".news-wrapper")
// console.log(newsWrapper)

fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=84b2366d1f084e568a5e8e5035ed56a0')
	.then(response => response.json())
	.then(data=>{

                const arraySize=data.totalResults
                // console.log(arraySize)
                for(let i=0;i<arraySize;i++){
                        var addCards=document.querySelector(".news-wrapper").innerHTML
                        const title=data.articles[i].title
                        // console.log(title)
                        // title=title.substring(0, title.indexOf('-'));

                        // const source=data.articles[i].source.name
                        // console.log(source)

                        const image=data.articles[i].urlToImage
                        // console.log(image);

                        const description=data.articles[i].description
                        // console.log(description)
                        const url_=data.articles[i].url
                        // console.log(url_)

                        // adding cards 
                        if(image!=null&&description!=""&&description!=null){
                                
        newsWrapper.innerHTML=addCards+`
        <div class="cards">
                <div class="cards-content">
                 
                  <div class="image">
                    <img
                      src="${image}"
                      alt=""
                      class="news-image"
                    />
                  </div>
                  <div class="cards-title">
                  <h2>${title}</h2>
                  
                </div>
                  <div class="news-description">
                    <p>
                     ${description}
                    </p>
                  </div>
                  
        
                  
                </div>
                <a href="${url_}" class="read-more">read more</a>
                </div>`

                        }



                }


        } )
	

// buisness news 

const buisness=document.getElementById("buisness")
buisness.addEventListener("click",e=>{

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=84b2366d1f084e568a5e8e5035ed56a0')
	.then(response => response.json())
	.then(data=>{

                const arraySize=data.totalResults
                // console.log(arraySize)
                newsWrapper.innerHTML="";
                for(let i=0;i<arraySize;i++){
                        var addCards=document.querySelector(".news-wrapper").innerHTML
                        const title=data.articles[i].title
                        // console.log(title)
                        // title=title.substring(0, title.indexOf('-'));

                        // const source=data.articles[i].source.name
                        // console.log(source)

                        const image=data.articles[i].urlToImage
                        // console.log(image);

                        const description=data.articles[i].description
                        // console.log(description)
                        const url_=data.articles[i].url
                        // console.log(url_)

                        // adding cards 
                        if(image!=null&&description!=""&&description!=null){
                                
        newsWrapper.innerHTML=addCards+`
        <div class="cards">
                <div class="cards-content">
                  
                  <div class="image">
                    <img
                      src="${image}"
                      alt=""
                      class="news-image"
                    />
                  </div>
                  <div class="cards-title">
                    <h2>${title}</h2>
                    
                  </div>
                  <div class="news-description">
                    <p>
                    ${description}
                    </p>
                  </div>
        
                  
                </div>
                <a href="${url_}" class="read-more">read more</a>
              </div>`

                        }



                }


        } )
	
})


// entertainment news 

const entertainment=document.getElementById("entertainment")
entertainment.addEventListener("click",e=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
  fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=84b2366d1f084e568a5e8e5035ed56a0')
	.then(response => response.json())
	.then(data=>{

                const arraySize=data.totalResults
                // console.log(arraySize)
                newsWrapper.innerHTML="";
                for(let i=0;i<arraySize;i++){
                        var addCards=document.querySelector(".news-wrapper").innerHTML
                        const title=data.articles[i].title
                        // console.log(title)
                        // title=title.substring(0, title.indexOf('-'));

                        // const source=data.articles[i].source.name
                        // console.log(source)

                        const image=data.articles[i].urlToImage
                        // console.log(image);

                        const description=data.articles[i].description
                        // console.log(description)

                        const url_=data.articles[i].url
                        // console.log(url_)

                        // adding cards 
                        if(image!=null&&description!=""&&description!=null){
                                
        newsWrapper.innerHTML=addCards+`
        <div class="cards">
                <div class="cards-content">
                  
                  <div class="image">
                    <img
                      src="${image}"
                      alt=""
                      class="news-image"
                    />
                  </div>
                  <div class="cards-title">
                    <h2>${title}</h2>
                    
                  </div>
                  <div class="news-description">
                    <p>
                    ${description}
                    </p>
                  </div>
        
                  
                </div>
                <a href="${url_}" class="read-more">read more</a>
              </div>`

                        }



                }


        } )
	
})


// health news 

const health=document.getElementById("health")
health.addEventListener("click",e=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=84b2366d1f084e568a5e8e5035ed56a0')
	.then(response => response.json())
	.then(data=>{

                const arraySize=data.totalResults
                // console.log(arraySize)
                newsWrapper.innerHTML="";
                for(let i=0;i<arraySize;i++){
                        var addCards=document.querySelector(".news-wrapper").innerHTML
                        const title=data.articles[i].title
                        // console.log(title)
                        // title=title.substring(0, title.indexOf('-'));

                        // const source=data.articles[i].source.name
                        // console.log(source)

                        const image=data.articles[i].urlToImage
                        // console.log(image);

                        const description=data.articles[i].description
                        // console.log(description)

                        const url_=data.articles[i].url
                        // console.log(url_)

                        // adding cards 
                        if(image!=null&&description!=""&&description!=null){
                                
        newsWrapper.innerHTML=addCards+`
        <div class="cards">
                <div class="cards-content">
                 
                  <div class="image">
                    <img
                      src="${image}"
                      alt=""
                      class="news-image"
                    />
                  </div>
                  <div class="cards-title">
                  <h2>${title}</h2>
                  
                </div>
                  <div class="news-description">
                    <p>
                    ${description}
                    </p>
                  </div>
        
                  
                </div>
                <a href="${url_}" class="read-more">read more</a>
              </div>`

                        }



                }


        } )
	
})



// science news 

const science=document.getElementById("science")
science.addEventListener("click",e=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  fetch('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=84b2366d1f084e568a5e8e5035ed56a0')
	.then(response => response.json())
	.then(data=>{

                const arraySize=data.totalResults
                // console.log(arraySize)
                newsWrapper.innerHTML="";
                for(let i=0;i<arraySize;i++){
                        var addCards=document.querySelector(".news-wrapper").innerHTML
                        const title=data.articles[i].title
                        // console.log(title)
                        // title=title.substring(0, title.indexOf('-'));

                        // const source=data.articles[i].source.name
                        // console.log(source)

                        const image=data.articles[i].urlToImage
                        // console.log(image);

                        const description=data.articles[i].description
                        // console.log(description)
                        const url_=data.articles[i].url
                        // console.log(url_)

                        // adding cards 
                        if(image!=null&&description!=""&&description!=null){
                                
        newsWrapper.innerHTML=addCards+`
        <div class="cards">
                <div class="cards-content">
                  
                  <div class="image">
                    <img
                      src="${image}"
                      alt=""
                      class="news-image"
                    />
                  </div>
                  <div class="cards-title">
                    <h2>${title}</h2>
                    
                  </div>
                  <div class="news-description">
                    <p>
                    ${description}
                    </p>
                  </div>
        
                  
                </div>
                <a href="${url_}" class="read-more">read more</a>
              </div>`

                        }



                }


        } )
	
})


// sports news 

const sports=document.getElementById("sports")
sports.addEventListener("click",e=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=84b2366d1f084e568a5e8e5035ed56a0')
	.then(response => response.json())
	.then(data=>{

                const arraySize=data.totalResults
                // console.log(arraySize)
                newsWrapper.innerHTML="";
                for(let i=0;i<arraySize;i++){
                        var addCards=document.querySelector(".news-wrapper").innerHTML
                        const title=data.articles[i].title
                        // console.log(title)
                        // title=title.substring(0, title.indexOf('-'));

                        // const source=data.articles[i].source.name
                        // console.log(source)

                        const image=data.articles[i].urlToImage
                        // console.log(image);

                        const description=data.articles[i].description
                        // console.log(description)

                        const url_=data.articles[i].url
                        // console.log(url_)

                        // adding cards 
                        if(image!=null&&description!=""&&description!=null){
                                
        newsWrapper.innerHTML=addCards+`
        <div class="cards">
                <div class="cards-content">
                  
                  <div class="image">
                    <img
                      src="${image}"
                      alt=""
                      class="news-image"
                    />
                  </div>
                  <div class="cards-title">
                    <h2>${title}</h2>
                    
                  </div>
                  <div class="news-description">
                    <p>
                    ${description}
                    </p>
                  </div>
        
                  
                </div>
                <a href="${url_}" class="read-more">read more</a>
              </div>`

                        }



                }


        } )
	
})


// technology news  

const technology=document.getElementById("technology")
technology.addEventListener("click",e=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  fetch('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=84b2366d1f084e568a5e8e5035ed56a0')
	.then(response => response.json())
	.then(data=>{

                const arraySize=data.totalResults
                // console.log(arraySize)
                newsWrapper.innerHTML="";
                for(let i=0;i<arraySize;i++){
                        var addCards=document.querySelector(".news-wrapper").innerHTML
                        const title=data.articles[i].title
                        // console.log(title)
                        // title=title.substring(0, title.indexOf('-'));

                        // const source=data.articles[i].source.name
                        // console.log(source)

                        const image=data.articles[i].urlToImage
                        // console.log(image);

                        const description=data.articles[i].description
                        // console.log(description)

                        const url_=data.articles[i].url
                        // console.log(url_)

                        // adding cards 
                        if(image!=null&&description!=""&&description!=null){
                                
        newsWrapper.innerHTML=addCards+`
        <div class="cards">
                <div class="cards-content">
                 
                  <div class="image">
                    <img
                      src="${image}"
                      alt=""
                      class="news-image"
                    />
                  </div>
                  <div class="cards-title">
                  <h2>${title}</h2>
                  
                </div>
                  <div class="news-description">
                    <p>
                    ${description}
                    </p>
                  </div>
        
                  
                </div>
                <a href="${url_}" class="read-more">read more</a>
              </div>`

                        }



                }


        } )
	
})
