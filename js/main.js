(() => {

    //variables
    const hotspots = document.querySelectorAll(".Hotspot");
    const materialTemplate = document.querySelector("#material-template");
    const materialList = document.querySelector("#material-list");
    const spinner = document.querySelector("#spinner"); // I added this for API loading feedback
    const errorMessage = document.querySelector("#error-message"); // I added this for error UI
  
    //function
    function loadInfoBoxes() {
  
      fetch("https://swiftpixel.com/earbud/api/infoboxes")
      .then(response => response.json())
      .then(infoBoxes => {
        console.log(infoBoxes);
  
        infoBoxes.forEach((infoBox, index) => {
        let selected = document.querySelector(`#hotspot-${index + 1}`);
  
        const titleElement = document.createElement('h2');
        titleElement.textContent = infoBox.heading;
  
        const textElement = document.createElement('p');
        textElement.textContent = infoBox.description;
  
        selected.appendChild(titleElement);
        selected.appendChild(textElement);
      });
      })
      .catch(error => {
        //make a meaningful error message and post to DOM
        console.log(error);
      });
  
     
    }
    loadInfoBoxes();
  
  
    function loadMaterialInfo() {
  
      // I manually mapped image names because API does not include file paths (bonus requirement)
      const materialImages = [
        "polymers",
        "silicone",
        "cable",
        "sensor",
        "mesh"
      ];
  
      // show spinner only while loading THIS API
      spinner.classList.remove("hidden");
  
      fetch("https://swiftpixel.com/earbud/api/materials")
        .then(response => response.json())
        .then(materials => {
          console.log(materials);
  
          materials.forEach((material, index) => {
            const clone = materialTemplate.content.cloneNode(true);
  
            // I assign the images manually based on the bonus requirement
            const imgElement = clone.querySelector(".material-img");
            imgElement.src = `images/${materialImages[index]}.png`;
            imgElement.alt = material.heading;
  
            const materialHeading = clone.querySelector(".material-heading");
            materialHeading.textContent = material.heading;
  
            const materialDescription = clone.querySelector(".material-description");
            materialDescription.textContent = material.description;
  
            materialList.appendChild(clone);
          });
  
          // hide spinner and error UI once loaded
          spinner.classList.add("hidden");
          errorMessage.classList.add("hidden");
          errorMessage.textContent = "";
        })
        .catch(error => {
          console.log(error);
  
          // I keep spinner visible when there's an error
          spinner.classList.remove("hidden");
  
          errorMessage.textContent = 
            "Materials failed to load. Please try again later.";
          errorMessage.classList.remove("hidden");
        });
    }
    loadMaterialInfo();
  
  
  
    function showInfo() {
      const selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      const selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    //Event listeners
    hotspots.forEach(hotspot => {
      hotspot.addEventListener("mouseenter", showInfo);
      hotspot.addEventListener("mouseleave", hideInfo);
    });
  
  })();
  