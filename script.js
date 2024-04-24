let c = document.body.firstElementChild.firstElementChild
let d = document.body.firstElementChild.firstElementChild.nextElementSibling
let b = document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling


const turnRedon = () =>{
    c.style.backgroundColor='red'
    c.style.transition='.4s'
}
const redBlinkone = ()=>{
    c.style.backgroundColor='transparent'
    c.style.transition='.4s'
}
const redBlinktwo = () =>{
    c.style.backgroundColor='red'
    c.style.transition='.4s'
}
const redBlinkthree = ()=>{
    c.style.backgroundColor='transparent'
    c.style.transition='.4s'
}
const redBlinkfour = () =>{
    c.style.backgroundColor='red'
    c.style.transition='.4s'
}
const redBlinkfive = ()=>{
    c.style.backgroundColor='transparent'
    c.style.transition='.4s'
}
const redBlinksix = () =>{
    c.style.backgroundColor='red'
    c.style.transition='.4s'
}
const turnRedoff = ()=>{
    c.style.backgroundColor='transparent'
    c.style.transition='.4s'
}

setTimeout(()=>{
    turnRedon()
}, 3000);

setTimeout(()=>{
    redBlinkone()
}, 7000);
setTimeout(()=>{
    redBlinktwo()
}, 7500);
setTimeout(()=>{
    redBlinkthree()
}, 8000);
setTimeout(()=>{
    redBlinkfour()
}, 8500);
setTimeout(()=>{
    redBlinkfive()
}, 9000);
setTimeout(()=>{
    redBlinksix()
}, 9500);

setTimeout(()=>{
    turnRedoff()
}, 10000);


const turnYellowon = () =>{
    d.style.backgroundColor='yellow'
    d.style.transition='.4s'
}

const turnYellowoff = ()=>{
    d.style.backgroundColor='transparent'
    d.style.transition='.4s'
}

setTimeout(()=>{
    turnYellowon()
}, 10000);
setTimeout(()=>{
    turnYellowoff()
}, 14000);

const turnGreenon = () =>{
    b.style.backgroundColor='#65fe08'
    b.style.transition='.4s'
}
const greenBlinkone = ()=>{
    b.style.backgroundColor='transparent'
    b.style.transition='.4s'
}
const greenBlinktwo = () =>{
    b.style.backgroundColor='#65fe08'
    b.style.transition='.4s'
}
const greenBlinkthree = ()=>{
    b.style.backgroundColor='transparent'
    b.style.transition='.4s'
}
const greenBlinkfour = () =>{
    b.style.backgroundColor='#65fe08'
    b.style.transition='.4s'
}
const greenBlinkfive = ()=>{
    b.style.backgroundColor='transparent'
    b.style.transition='.4s'
}
const greenBlinksix = () =>{
    b.style.backgroundColor='#65fe08'
    b.style.transition='.4s'
}
const turnGreenoff = ()=>{
    b.style.backgroundColor='transparent'
    b.style.transition='.4s'
}

setTimeout(()=>{
    turnGreenon()
}, 14000);

setTimeout(()=>{
    greenBlinkone()
}, 18000);
setTimeout(()=>{
    greenBlinktwo()
}, 18500);
setTimeout(()=>{
    greenBlinkthree()
}, 19000);
setTimeout(()=>{
    greenBlinkfour()
}, 19500);
setTimeout(()=>{
    greenBlinkfive()
}, 20000);
setTimeout(()=>{
    greenBlinksix()
}, 20500);

setTimeout(()=>{
    turnGreenoff()
}, 21000);