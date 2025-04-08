document.addEventListener('DOMContentLoaded', function() {
  // Person studying illustration
  const personStudyingContainer = document.getElementById('person-studying');
  
  if (personStudyingContainer) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("fill", "none");
    svg.style.maxHeight = "200px";
    
    // Desk
    const desk = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    desk.setAttribute("x", "20");
    desk.setAttribute("y", "65");
    desk.setAttribute("width", "60");
    desk.setAttribute("height", "5");
    desk.setAttribute("fill", "#D1C4E9");
    desk.setAttribute("rx", "1");
    svg.appendChild(desk);
    
    // Desk leg
    const deskLeg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    deskLeg.setAttribute("x", "45");
    deskLeg.setAttribute("y", "70");
    deskLeg.setAttribute("width", "10");
    deskLeg.setAttribute("height", "15");
    deskLeg.setAttribute("fill", "#C5CAE9");
    svg.appendChild(deskLeg);
    
    // Book
    const book = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    book.setAttribute("x", "35");
    book.setAttribute("y", "55");
    book.setAttribute("width", "15");
    book.setAttribute("height", "10");
    book.setAttribute("fill", "#FFCDD2");
    book.setAttribute("rx", "1");
    svg.appendChild(book);
    
    // Notebook
    const notebook = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    notebook.setAttribute("x", "55");
    notebook.setAttribute("y", "58");
    notebook.setAttribute("width", "12");
    notebook.setAttribute("height", "7");
    notebook.setAttribute("fill", "#BBDEFB");
    notebook.setAttribute("rx", "1");
    svg.appendChild(notebook);
    
    // Person's head
    const head = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    head.setAttribute("cx", "42");
    head.setAttribute("cy", "40");
    head.setAttribute("r", "7");
    head.setAttribute("fill", "#FFCC80");
    svg.appendChild(head);
    
    // Person's body
    const body = document.createElementNS("http://www.w3.org/2000/svg", "path");
    body.setAttribute("d", "M42 47 L42 60 L38 65 L46 65 L42 60");
    body.setAttribute("fill", "#81C784");
    body.setAttribute("stroke", "#81C784");
    body.setAttribute("stroke-width", "1");
    svg.appendChild(body);
    
    // Person's arm
    const arm = document.createElementNS("http://www.w3.org/2000/svg", "path");
    arm.setAttribute("d", "M42 50 L52 58");
    arm.setAttribute("stroke", "#81C784");
    arm.setAttribute("stroke-width", "3");
    arm.setAttribute("stroke-linecap", "round");
    svg.appendChild(arm);
    
    // Lamp base
    const lampBase = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    lampBase.setAttribute("x", "70");
    lampBase.setAttribute("y", "60");
    lampBase.setAttribute("width", "5");
    lampBase.setAttribute("height", "5");
    lampBase.setAttribute("fill", "#90A4AE");
    svg.appendChild(lampBase);
    
    // Lamp neck
    const lampNeck = document.createElementNS("http://www.w3.org/2000/svg", "path");
    lampNeck.setAttribute("d", "M72.5 60 L72.5 40 L65 30");
    lampNeck.setAttribute("stroke", "#90A4AE");
    lampNeck.setAttribute("stroke-width", "2");
    lampNeck.setAttribute("fill", "none");
    svg.appendChild(lampNeck);
    
    // Lamp head
    const lampHead = document.createElementNS("http://www.w3.org/2000/svg", "path");
    lampHead.setAttribute("d", "M65 30 L55 40 L65 40 Z");
    lampHead.setAttribute("fill", "#CFD8DC");
    svg.appendChild(lampHead);
    
    // Lamp light
    const lampLight = document.createElementNS("http://www.w3.org/2000/svg", "path");
    lampLight.setAttribute("d", "M60 35 L40 50");
    lampLight.setAttribute("stroke", "#FFE082");
    lampLight.setAttribute("stroke-width", "15");
    lampLight.setAttribute("stroke-opacity", "0.2");
    lampLight.setAttribute("stroke-linecap", "round");
    svg.appendChild(lampLight);
    
    // Add calendar or clock to show time passing
    const calendar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    calendar.setAttribute("x", "25");
    calendar.setAttribute("y", "30");
    calendar.setAttribute("width", "10");
    calendar.setAttribute("height", "12");
    calendar.setAttribute("fill", "#EEEEEE");
    calendar.setAttribute("rx", "1");
    svg.appendChild(calendar);
    
    // Calendar details
    const calLine1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    calLine1.setAttribute("x1", "27");
    calLine1.setAttribute("y1", "33");
    calLine1.setAttribute("x2", "33");
    calLine1.setAttribute("y2", "33");
    calLine1.setAttribute("stroke", "#9E9E9E");
    calLine1.setAttribute("stroke-width", "0.5");
    svg.appendChild(calLine1);
    
    const calLine2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    calLine2.setAttribute("x1", "27");
    calLine2.setAttribute("y1", "36");
    calLine2.setAttribute("x2", "33");
    calLine2.setAttribute("y2", "36");
    calLine2.setAttribute("stroke", "#9E9E9E");
    calLine2.setAttribute("stroke-width", "0.5");
    svg.appendChild(calLine2);
    
    const calLine3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    calLine3.setAttribute("x1", "27");
    calLine3.setAttribute("y1", "39");
    calLine3.setAttribute("x2", "33");
    calLine3.setAttribute("y2", "39");
    calLine3.setAttribute("stroke", "#F44336");
    calLine3.setAttribute("stroke-width", "0.5");
    svg.appendChild(calLine3);
    
    personStudyingContainer.appendChild(svg);
    
    // Animation for lamp light
    const animate = () => {
      const opacity = 0.15 + Math.sin(Date.now() / 500) * 0.05;
      lampLight.setAttribute("stroke-opacity", opacity.toString());
      requestAnimationFrame(animate);
    };
    
    animate();
  }
});
