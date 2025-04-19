let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


        // Simulate loading progress
        function updateProgress() {
            const progressBar = document.querySelector('.progress-bar');
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 10;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                }
                progressBar.style.width = progress + '%';
            }, 300);
        }
        
        // Start progress animation
        updateProgress();
        
        // Hide loading screen when everything is loaded
        window.addEventListener('load', function() {
            setTimeout(function() {
                const loadingScreen = document.getElementById('loading-screen');
                loadingScreen.style.opacity = '0';
                
                setTimeout(function() {
                    loadingScreen.style.display = 'none';
                    document.querySelector('.content').style.display = 'block';
                }, 800);
            }, 2000); // Minimum show time of 2 seconds
        });
        
        // Fallback in case load event doesn't fire
        setTimeout(function() {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen.style.display !== 'none') {
                loadingScreen.style.opacity = '0';
                setTimeout(function() {
                    loadingScreen.style.display = 'none';
                    document.querySelector('.content').style.display = 'block';
                }, 800);
            }
        }, 5000); // Maximum show time of 5 seconds
    