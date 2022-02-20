
//variables
const player = document.querySelector('.palyer');
const video = player.querySelector('.viewer');
const videoSource = player.querySelector('.viewer source');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelector('.playbackRate-btn .player__slider');
const rangesspan = player.querySelector('.playbackRate-btn span ');

const totaltime = player.querySelector('.totalTime');
const viewTime = player.querySelector('.viiewTime');
const valumeBtn = player.querySelector('.volumeBtn span');
const valumeWrapper = player.querySelector('.volume-show-box .volumeWrapper');
const valumeRanges = player.querySelector('.volume-show-box .player__slider');

const valumeIcon = player.querySelector('.volume-icon');


const openfullScreenBox = player.querySelector('.fullScreen-box .fullScreen-expand');
const closefullScreenBox = player.querySelector('.fullScreen-box .fullScreen-unexpand');

const fullScreenBox = player.querySelector('.Expanded-box');


const subtitles = document.querySelector('.caption-box');








/*===================/end of variables / =====================*/


console.log(video);


/*===========================/ video URl chnage /=======================*/



window.onload = function() {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "arraybuffer";
  
  const blob = new Blob([xhr.response]);
  const url = URL.createObjectURL(blob);
  videoSource.src = url;
};

/*===========================/ end of video URl chnage /=======================*/

/*===========================/ Stop PrintScreen /=======================*/

document.onkeyup = key1;

function key1(e) {
  switch (e.which) {
    case 44: // PrintScreen
     alert('You can not take  PrintScreen');
      break; 
  }
}

document.addEventListener("keyup", function (e) {
  var keyCode = e.keyCode ? e.keyCode : e.which;
          if (keyCode == 44) {
              stopPrntScr();
          }
         
      });
function stopPrntScr() {

          var inpFld = document.createElement("input");
          inpFld.setAttribute("value", ".");
          inpFld.setAttribute("width", "0");
          inpFld.style.height = "0px";
          inpFld.style.width = "0px";
          inpFld.style.border = "0px";
          document.body.appendChild(inpFld);
          inpFld.select();
          document.execCommand("copy");
          inpFld.remove(inpFld);
      }
     function AccessClipboardData() {
          try {
              window.clipboardData.setData('text', "Access   Restricted");
          } catch (err) {
          }
      }
      setInterval("AccessClipboardData()", 300);
/*===========================/ end of stop PrintScreen /=======================*/
/*===========================/disable right click /=======================*/
 // disable right click
 document.addEventListener('contextmenu', event => event.preventDefault());
 
 document.onkeydown = function (e) {

     // disable F12 key
     if(e.keyCode == 123) {
         return false;
     }

     // disable I key
     if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
         return false;
     }

     // disable J key
     if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
         return false;
     }

     // disable U key
     if(e.ctrlKey && e.keyCode == 85) {
         return false;
     }

  
 }


 /*===========================/end of disable right click /=======================*/



/*===========================/ functions /=======================*/

function togglePlay(){
  const method = video.paused ? 'play' : 'pause';
    video[method]();
}



function updateButton(){
    //const icon = this.paused ? '▶' : '⏸';
    //toggle.textContent = icon;
    if(this.paused){
        toggle.innerHTML = "<i class='bi bi-play-circle'></i>";
    }else{
        toggle.innerHTML = "<i class='bi bi-pause-circle'></i>";
    }
}



function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
    console.log(this.dataset.skip);
}
function handleRangeUpdate(){
 video[this.name] = this.value;
 console.log(this.value );

 const speedinPer = this.value;
 rangesspan.innerHTML = speedinPer + ' x';

 
}

function volumecontroler() {
    video[this.name] = this.value;

   
   
    const volumeinPer = this.value;
  
    const setvalumeall = Math.floor((volumeinPer) * 100)
  
    valumeBtn.innerHTML = setvalumeall + '%';
  
    valumeWrapper.style.width = `${setvalumeall}%`;
    if(this.value >= 0.1){
        valumeIcon.innerHTML = "<i class='bi bi-volume-up-fill'></i>";
    }else{
        valumeIcon.innerHTML = "<i class='bi bi-volume-mute-fill'></i>";
    }
    
}


function handleProgress(){
    const  progressBarvideoduration = video.duration;
    const  progressBarvideocurrentTime = video.currentTime;

    //progressBar runing
    const percent = (progressBarvideocurrentTime / progressBarvideoduration) *  100;
    progressBar.style.width = `${percent}%`;


}


function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
 console.log(e);
}

function currentStatus (){
    const  videoduration = video.duration;
    const  videocurrentTime = video.currentTime;
        //convert decimal to whole number
        const roundedduration = Math.floor(videoduration);
        const roundedcurrentTime = Math.floor(videocurrentTime);
    
       
    //Totle time of Videoo
    if(roundedduration >= 3600){
     const totalNumberOfSeconds = roundedduration;
     const hours = parseInt( totalNumberOfSeconds / 3600 );
     const minutes = parseInt( (totalNumberOfSeconds - (hours * 3600)) / 60 );
     const seconds = Math.floor((totalNumberOfSeconds - ((hours * 3600) + (minutes * 60))));
     const totleresult = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);

    
         totaltime.innerHTML = totleresult;
      
    }else{
        const totalNumberOfSeconds = roundedduration;
        const hours = parseInt( totalNumberOfSeconds / 3600 );
        const minutes = parseInt( (totalNumberOfSeconds - (hours * 3600)) / 60 );
        const seconds = Math.floor((totalNumberOfSeconds - ((hours * 3600) + (minutes * 60))));
        const totleresult =  (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
       
            totaltime.innerHTML = totleresult;
         
       
    }


     
    //current time  of Videoo
    if(roundedcurrentTime >= 3600){
     const totalNumberOfSecondsf = roundedcurrentTime;
     const hours1 = parseInt( totalNumberOfSecondsf / 3600 );
     const minutes1 = parseInt( (totalNumberOfSecondsf - (hours1 * 3600)) / 60 );
     const seconds1 = Math.floor((totalNumberOfSecondsf - ((hours1 * 3600) + (minutes1 * 60))));

     const finalHours = (hours1 < 10 ? "0" + hours1 : hours1) + ":" ;
     const finalMinutes = (minutes1 < 10 ? "0" + minutes1 : minutes1) + ":" ;
     const finalSeconds = (seconds1  < 10 ? "0" + seconds1 : seconds1);
     const withHouser = finalHours + finalMinutes + finalSeconds ;
     const currentresult =  withHouser
     viewTime.innerHTML = currentresult;
    }else{
        const totalNumberOfSecondsf = roundedcurrentTime;
     const hours1 = parseInt( totalNumberOfSecondsf / 3600 );
     const minutes1 = parseInt( (totalNumberOfSecondsf - (hours1 * 3600)) / 60 );
     const seconds1 = Math.floor((totalNumberOfSecondsf - ((hours1 * 3600) + (minutes1 * 60))));

     const finalHours = (hours1 < 10 ? "0" + hours1 : hours1) + ":" ;
     const finalMinutes = (minutes1 < 10 ? "0" + minutes1 : minutes1) + ":" ;
     const finalSeconds = (seconds1  < 10 ? "0" + seconds1 : seconds1);
        const withHouser =  finalMinutes + finalSeconds ;
        const currentresult =  withHouser
        viewTime.innerHTML = currentresult;
    }

  
//add class on player for hide control
    const myTimeout = setTimeout(myGreeting, 5000);
    function myGreeting() {
        player.classList.add('hideControl');
      }

  
}
//set daynmic value of volume 
function daynamicValueVolume() {
    const getOriginaltag = player.querySelector('.volumeBtn .player__slider').value;
    video.volume = getOriginaltag;
}



// fullScreen

function openFullscreen() {
    if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (player.webkitRequestFullscreen) { /* Safari */
      player.webkitRequestFullscreen();
    } else if (player.msRequestFullscreen) { /* IE11 */
      player.msRequestFullscreen();
    }

    if(player.requestFullscreen){
        openfullScreenBox.style.display = 'none';
        closefullScreenBox.style.display = 'block';
       
    } 

  }

  /* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }

     if(document.exitFullscreen){
        openfullScreenBox.style.display = 'block';
        closefullScreenBox.style.display = 'none';
    }
  

  }

 function fullwidthvideo() {
    const bodyexpandedOn =  document.querySelector("body");
    bodyexpandedOn.classList.toggle("expandedVideo");
 } 


function captionBox(){
    const tracks = video.textTracks;
for (var i = 0, L = tracks.length; i < L; i++) { /* tracks.length == 10 */
    if (tracks[i].language == 'en') {
      // console.dir(tracks[i]);
      if( tracks[i].mode == "hidden"){
        tracks[i].mode = "showing";
      }else if( tracks[i].mode == "showing"){
        tracks[i].mode = "hidden";
      }
      
    }
 }
}



function playByButton(){
  video.click();

}


/*====================end of factions ========================= */


console.log(toggle);
/*/=========================== Actions==========================*/

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('timeupdate', currentStatus);
video.addEventListener('click', daynamicValueVolume);

openfullScreenBox.addEventListener('click', openFullscreen);
closefullScreenBox.addEventListener('click', closeFullscreen);
toggle.addEventListener('click', playByButton);
fullScreenBox.addEventListener('click', fullwidthvideo);

subtitles.addEventListener('click', captionBox);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.addEventListener('change', handleRangeUpdate);
valumeRanges.addEventListener('change', volumecontroler);

let  mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () =>  mousedown = true);
progress.addEventListener('mouseup', () =>  mousedown = false);

