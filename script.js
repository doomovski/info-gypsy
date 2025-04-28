document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault()
  
    this.reset()
  
    const successMessage = document.getElementById("successMessage")
    successMessage.style.display = "block"
  
    setTimeout(() => {
      successMessage.style.display = "none"
    }, 1000)
  })
  
  document.querySelectorAll(".nav-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const sectionId = this.getAttribute("href")
      const targetElement = document.querySelector(sectionId)
      const offset = 250
  
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", 
      })
    })
  })
  
  document.querySelectorAll(".logo").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const sectionId = this.getAttribute("href")
      const targetElement = document.querySelector(sectionId)
      const offset = 80
  
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    })
  })
  

  const counters = document.querySelectorAll(".count")
  
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target")
      const count = +counter.innerText
      const baseDuration = target < 1000 ? 3000 : 1000 
      const speed = Math.max(50, baseDuration / target) 
      const inc = target / (baseDuration / 20) 
  
      if (count < target) {
        counter.innerText = Math.ceil(Math.min(count + inc, target))
        setTimeout(updateCount, speed)
      } else {
        counter.innerText = target
      }
    }
  
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          updateCount()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
  
    observer.observe(counter)
  })
  