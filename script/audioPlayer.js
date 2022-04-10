window.onclick = function() {
    console.log("[INFO] Loaded Audio...")
    var audio = new Audio('assets/bobux.mp3');
    audio.volume = 0.1;
    audio.play();
    
};