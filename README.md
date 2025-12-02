# Nguyen_Linh_AJAX

This project extends the Earbuds Promotional Page by making the model dynamic using **Fetch API**, **AJAX loading**, **HTML templates**, and **SASS**. The page loads hotspot details and material information from the provided APIs and displays them interactively.

---

## 🔧 Features

### • Dynamic Hotspots  
- Data loaded from:  
`https://swiftpixel.com/earbud/api/infoboxes`  
Each hotspot displays a heading description 

### • Dynamic Materials Section  
- Data loaded from:  
`https://swiftpixel.com/earbud/api/materials`  
- Images are manually mapped (bonus requirement).
- Content is generated using the `<template>` element and styled into equal-height cards.

### • Loading Spinner + Error Handling  
- A custom SVG spinner appears during failed API requests.  
- Clear error messaging is shown if data cannot be loaded.

### • Responsive Behaviour  
- **Mobile (<768px):** static product image  
- **Tablet & Desktop (≥768px):** 3D model visible & full-width material cards

***One card per row layout for clarity***

---

## 🛠 Tech Used
- HTML5  
- SASS / CSS3  
- JavaScript (ES6)  
- Fetch API  
- model-viewer  
- GSAP  

---

## 🧱 Project Structure
- **Nguyen_Linh_AJAX**
  - **css/**
   - **images/**
   - **js/**
   - **model/**
   - **sass/**
   - **index.html/**

---

## 🎨 SASS Highlights  
- Uses a clean color system defined in `variables.scss`
- Equal-height material cards
- Mobile-first layout
- Custom styling for loading spinner, hotspots, and cards

---

## 📌 Notes
- All code follows the Authoring Class Style Guide.
- API provides only text; image mapping is manually implemented
- API images must be added manually if used.

---

## 👤 Author
Linh Nguyen — Interactive Media Design, Fanshawe College

