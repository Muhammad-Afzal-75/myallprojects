console.log('welcome to')
//initialize the value
let songIndex = 0;
let  audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let mypromyprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masteSongName = document.getElementById('masterSongName');
let songItems =Array.from( document.getElementsByClassName('songItem'));

let songs =[
    {songName: "Naat .sakoon paya", filePath: "1.mp3", coverPath: "coverr.jpg"},
    {songName: "Naat .mery mola.Allah ho Allah ho", filePath: "2.mp3", coverPath: "cover2.jpg"},
    {songName: "Naat .chlo acha huwa", filePath: "3.mp3", coverPath: "cover3.jpg"},
    {songName: "Naat. hale dil kis ko sunain", filePath: "4.mp3", coverPath: "coverimage.jpg"},
    {songName: "Naat. hu kram sarkar gam hu gy beshumar", filePath: "5.mp3", coverPath: "coverr.jpg"},
    {songName: "Naat. sarkar ay", filePath: "6.mp3", coverPath: "coverr.jpg"},
    {songName: "Naat. kaby ki ronak", filePath: "7.mp3", coverPath: "coverr.jpg"}
]
songItems.forEach((element, i)=>{

element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByTagName("span")[0].innerText = songs[i].songName;

})
//audioElement.play();


//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity= 0;
    }
})
//Listen to events

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seakbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress)
    mypromyprogressbar.value = progress;

})

mypromyprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = mypromyprogressbar.value* audioElement.duration/100;
})
const makeAllPlays =()=>{

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target)
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex+1}.mp3`;
        masteSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity= 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
        
    audioElement.src = `${songIndex+1}.mp3`;
    masteSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity= 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
      
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
        
    audioElement.src = `${songIndex+1}.mp3`;
    masteSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity= 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
      
})