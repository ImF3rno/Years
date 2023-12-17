function century(year){
    if(year.toString().length<3) return 1;
    const c=+year.toString().slice(0,-2)
    if(year%100===0) return c
    return c+1;
}

document.querySelector('button').addEventListener('click',()=>{
    const yearInput=document.querySelector('input');
    const year=parseInt(yearInput.value, 10);
    const result=century(year);
    const p=document.createElement('p');
    p.innerHTML=result || 'Invalid year input';
    document.body.appendChild(p);
    yearInput.style.display='none';
    document.querySelector('button').style.display='none';
    const resetButton=document.createElement('button');
    resetButton.innerHTML='Reset';
    resetButton.addEventListener('click',()=>{
        p.innerHTML='';
        yearInput.style.display='block';
        document.querySelector('button').style.display='block';
        document.body.removeChild(resetButton);
    });
    document.body.appendChild(resetButton);
});

