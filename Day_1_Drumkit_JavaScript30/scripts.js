window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0 // Rewinds to the start
  audio.play()

  // Add class
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  key.classList.add("keyOn")

  // Remove class
  setTimeout(function() {
    key.classList.remove("keyOn")
  }, 150)
  
})