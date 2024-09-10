document.addEventListener('DOMContentLoaded', ()=> {
    const btns = document.querySelectorAll('button');

    const answers = [988, 'Москва', 'Санкт-Петербург'];

    let counter = 0;

    btns.forEach((btn)=>{
        btn.addEventListener('click', (e)=> {
            for (let i = 0; i < answers.length; i++) {
                if (e.target.innerHTML == answers[i]) {
                    counter++;
                    console.log(`total score: ${counter}`);
                }
            }
        })
        
    });
 
})