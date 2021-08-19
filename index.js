let getById = (id) =>document.getElementById(id)
let interval,hours=0,minutes=0,second=0,miliSecond=0;

function multiElement(id1, id2, id3, id4){
    return [getById(id1), getById(id2), getById(id3), getById(id4)]
}

function setElementValue(){
    let multiArr = multiElement('hours','minutes','second','milis')
    multiArr[3].innerText = miliSecond
    multiArr[2].innerText = second
    multiArr[1].innerText = minutes
    multiArr[0].innerText = hours
}

let watchStarted = (valid) =>{
    interval = setInterval(function(){
        miliSecond++;
        if(miliSecond === 100){
            miliSecond=0
            second++
            if(second===60){
                minutes++
                second=0
                if(minutes===60){
                    hours++
                    minutes=0
                }
            }
        }
        setElementValue()
    },10)
}



getById('btn').addEventListener('click',function(e){
    if(e.target.id === 'start-btn'){
        watchStarted(true)
    }else if(e.target.id === 'reset-btn'){
        hours = 0;
        minutes = 0;
        second = 0;
        miliSecond = 0;
        setElementValue()
       clearInterval(interval);
    }else{
        clearInterval(interval);
    }
})