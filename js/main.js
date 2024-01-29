let selected_country = document.querySelector (".selected_country")
let flag_coutery =document.querySelector (".flag_country")
let country_sel =document.querySelector (".country_sel")
let ex =document.querySelector (".ex")
let conent2 =document.querySelector (".conent2")
let conent3 =document.querySelector (".conent3")
let conent4 =document.querySelector (".conent4")
let Population=document.querySelector (".Population")
let Region=document.querySelector (".Region")
let Start=document.querySelector (".Start")
let zone=document.querySelector (".zone")
let Capital =document.querySelector (".Capital")
let map2 = document.querySelector (".map2")
let link2 = document.querySelector (".link2")
let to2 = document.getElementById("#to")
let from2 =document.getElementById("#from")
let message2 = document.getElementById("message")
let Newspace =document.querySelector (".Newspace")  
let sections=document.querySelectorAll ('section')
let section3 =document.querySelector (".section3")
let section5 =document.querySelector (".section5")
let section6 =document.querySelector (".section6")
function clearNewsSpace() {
    Newspace.innerHTML = '';
}



fetch(" https://restcountries.com/v3.1/all") .then(response => response.json())
.then(response =>{
    let options1=ex.options
    let target_contry = ""
    console.log (response)
    response.forEach(element => {

      selected_country.innerHTML +=`
      
      <option>${element.name.common}</option>    
      
      `
      if (element.name.common == target_contry) {
          flag_coutery.innerHTML+=`
          
          <img src="${element.flags.png}" alt="">
          `
  
      }
      
  });


    ex.onclick= function () {
       for (let i =1 ; i <251 ;i ++ ) {
    
            if (options1 [i].selected == true ) {
                for(let y=0;y<4;y++) {

                    sections[y].style.display="block";
                }
                section3.style.display="block"
                section5.style.display="block"
                section6.style.display="block"
                
            
            
              target_contry=options1[i].value
              response.forEach(element => {

                if (element.name.common == target_contry) {
                    

                    flag_coutery.innerHTML=`
                    <img src="${element.flags.png}" alt="">
                    <h6>Flag</h6>


                    `
                    conent2.innerHTML = `
                    
                <img src="${element.coatOfArms.png}" alt="">
                  <h6> <a href="">Coat Of Arms</a> </h6>
                    `
                    conent3.innerHTML= `
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UN_emblem_blue.svg/200px-UN_emblem_blue.svg.png" alt="">
                <h6> <a href="aboutus.html#">United Nations
                    `
                    if (element.unMember == true) {
                        conent3.innerHTML+= `
                        <i class="fas fa-check"></i>
                        
                        `
                    }
                    else {
                        conent3.innerHTML+= `
                        <i class="fas fa-times"></i> 
                    
                        `
                    }
                    conent4.innerHTML=`
                    <img src="https://cdn4.iconfinder.com/data/icons/digital-nomad-volume-1/1000/INDEPENDENT-512.png" alt="">
                  <h6> <a href="#">Independent </a></h6>
                    `
                    if (element.independent == true) {
                        conent4.innerHTML+= `
                        <i class="fas fa-check"></i>
                        
                        `
                    }
                    else {
                        conent4.innerHTML+= `
                        <i class="fas fa-times"></i> 
                    
                        `
                    }
                    Population.innerHTML =element.population.toLocaleString()
                    Region.innerHTML =element.region
                    Start.innerHTML =element.startOfWeek
                    zone.innerHTML =element.timezones[0]
                    Capital.innerHTML = element.capital
                    map2.innerHTML= `
                    <iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?q=${target_contry}&key=AIzaSyDCCfoXSZoK3UBns2vOgqjxikkomxkSp6k"></iframe>
                
                
                    
                    
                    
                    `
                    link2.href =element.maps.googleMaps


                    Newspace.innerHTML = '';

                    fetch (`https://api.worldnewsapi.com/search-news?api-key=8467cf5af646497a82ce5e379a21e9ad&source-countries=${element.cca2}`).then(r => r.json())
                    .then(r =>{
                   resulut2=r.news
                   resulut2.forEach(ele => {
                    console.log(ele)
                   
                    Newspace.innerHTML+=`
                    <div class="col-md-3 col-sm-6 mt-4 ">
                    <div class="news-box">
                      <div class="new-thumb"> <span class="cat c1">Economy</span> <img src="${ele.image}" class="new_img" alt=""> </div>
                      <div class="new-txt">
                        <ul class="news-meta">
                          <li class="new_date">${ele.publish_date}</li>
                        </ul>
                        <h6 class="new_title"><a href="index.html#" class="new_link">${ele.title}</a></h6>
                        <p class="new_new"> ${ele.text} </p>
                      </div>
                      <div class="news-box-f"> <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="ewew"> ${ele.author} <a href="index.html#"><i class="fas fa-arrow-right"></i></a> </div>
                    </div>
                  </div>


                    `
            
                   });
                
                
                
                
                })             


                    
                }
                
            });
              
            } 
        }
    }    



})



