function startProgress() {
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');
let progress = 0; 
const interval = setInterval(() => {
    if (progress < 100) {
    progress++; 
    progressBar.style.width = progress + '%'; 
    progressText.textContent = progress + '%'; 
        } else {
    clearInterval(interval); 
        }
    }, 100); 
    }