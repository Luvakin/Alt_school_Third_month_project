
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        let intervalId = null;
        let isRunning = false;

        const display = document.getElementById('display');
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const resetBtn = document.getElementById('resetBtn');

        function updateDisplay() {
            const h = hours.toString().padStart(2, '0');
            const m = minutes.toString().padStart(2, '0');
            const s = seconds.toString().padStart(2, '0');
            display.textContent = `${h}:${m}:${s}`;
        }

        function startTimer() {
            if (isRunning) return; // Prevent multiple timers
            
            isRunning = true;
            intervalId = setInterval(() => {
                seconds++;
                
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
                
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
                
                updateDisplay();
            }, 1000);
        }

        function stopTimer() {
            clearInterval(intervalId);
            isRunning = false;
        }

        function resetTimer() {
            clearInterval(intervalId);
            isRunning = false;
            hours = 0;
            minutes = 0;
            seconds = 0;
            updateDisplay();
        }

        startBtn.addEventListener('click', startTimer);
        stopBtn.addEventListener('click', stopTimer);
        resetBtn.addEventListener('click', resetTimer);
    