 var array = [
        {
            image:"https://aiaraldea.tok-md.com/argazkiak/dZw/cache/g_tokikom_700x700.jpg",
            name: "A Star is born",
            shortDescripion: "love,music",
            likes:0
        },
        {   image:"https://static.rogerebert.com/uploads/movie/movie_poster/mandy-2018/large_mandy-poster-9.jpg",
            name: "Mandy",
            shortDescripion: "drama,wars",
            likes:0
        },
        {   
            image:"https://www.waukeepubliclibrary.org/sites/default/files/Event%20Images/Adult%20Events/firstman.jpg",
            name: "First Man",
            shortDescripion: "success,true story",
            likes:0
         
        },
        {   
            image:"https://files.scary-movies.de/2015/06/Halloween-2018-Teaser-Poster-640x1014.jpg",
            name: "Halloween",
            shortDescripion: "horror,violence",
            likes:0
      
        },
        {   
            image:"https://horrornews.net/wp-content/uploads/2011/08/EvidenceOfAHauntingPoster.jpg",
            name: "Evidence of a Haunting",
            shortDescripion:"horror,physically",
            likes:0
     
        },
        {   
            image:"https://stat.ameba.jp/user_images/20180915/13/projectseattle/28/be/j/o0353053814266313976.jpg",
            name: "Crazy Rich Asians",
            shortDescripion:"love,drama",
            likes: 0
  
        }
    ];


            for(var i = 0 ; i < array.length ; i++){
        document.getElementById('result').innerHTML += `<div class="movie">
                                <img src="${array[i].image}">
                                <div>
                                <h4>${array[i].name}</h4>
                                <p>${array[i].shortDescripion} </p>
                                <button class="btn" id="${i}">Like &nbsp<i class="fa fa-thumbs-up" aria-hidden="true"></i></button>
                                <p class="likes" > ${array[i].likes}</p>
                                </div>
                           </div>`
    }




    var allbtn = document.getElementsByClassName("btn");

        for (var i =0; i< array.length; i++) {
            allbtn[i].addEventListener("click", function(){increase(this.getAttribute("id"))},false);
        }

    
        

        function increase (i){
            var change = document.getElementsByClassName("likes");
            change[i].innerHTML = array[i].likes++;
        }

         var btns = document.getElementsByClassName("btn");

             console.log(btns);
    
        
            for(let i = 0; i < btns.length ; i++){
            
                btns[i].addEventListener("click", function(){like(this.getAttribute("id"))
            
            });
       }


        function like(i){
       
             for(let i = 0; i < array.length ; i++){ let likes=document.getElementsByClassName("likes");             
              let sort=document.getElementById(`"likes"+${i}`); likes.innerHTML = `${array[i].likes++}`

            console.log(likes)

           

          }

       }
