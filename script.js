const song = new Audio("songs/6.mp3");

const masterBtn = document.getElementById('masterBtn');

const gif = document.getElementById('gif');

const range = document.getElementById('range');

// Card Target

const cardAudio = document.querySelectorAll('.audio')

// songName target 

const songName = document.getElementById('songName');




// ye song ko play kar raha hai button ke zariye oppar wala code song.play()

masterBtn.addEventListener('click', ()=>{
 // song.play();
 if(song.paused || song.currentTime <= 0){
  song.play();
  masterBtn.classList.remove('fa-circle-play')
  masterBtn.classList.add('fa-circle-pause')
  gif.style.opacity = 1;
 }
 else{
  song.pause();
  masterBtn.classList.remove('fa-circle-pause')
  masterBtn.classList.add('fa-circle-play')
  gif.style.opacity = 0;
 }
})


  //  moving range  //

  setInterval(()=>{

    //  song duration convert in to percentage  //
 
    let percentage = (song.currentTime/song.duration)  * 100;
 
    console.log(percentage);
 
    range.value = percentage;
 
   },1000)
 

// range barhane ke liye

range.addEventListener('click', function (){

 // convert percent in to duration 
 song.currentTime = (range.value * song.duration) / 100;
})



// Card section Targeting in javascipt

// Yaha se le kar

cardAudio.forEach(function(element){
    element.addEventListener('click', (e) => {

        // console.log(element);

        if(element.classList [2] == "fa-circle-play"){
            
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');

        // songName target

        songName.innerText = element.parentElement.previousElementSibling.innerText;

        let index = e.target.id;
        // console.log(index);
        song.src = `songs/${index}.mp3`
        song.play();
        range.value = 0
        song.currentTime = 0;

        masterBtn.classList.remove('fa-circle-play');
        masterBtn.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        // console.log(song);
        }
        else{
            song.pause();
            element.classList.add('fa-circle-play');
            element.classList.remove('fa-circle-pause');
            masterBtn.classList.remove('fa-circle-pause')
            masterBtn.classList.add('fa-circle-play')
            gif.style.opacity = 0;
            
        }
    })
})

