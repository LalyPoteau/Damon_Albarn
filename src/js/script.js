let box = document.getElementById('Funfacts');
let funfacts = [`En 2016 il a reçu l’OBE (Officer of the Order of the British Empire), en honneur de ses services dans la musique. `,
    `Avant de démarrer Blur, Damon Albarn voulait faire une carrière de mime`,
    `Il a rencontrait Graham Coxon (autre membre du groupe dans les toilettes de son école 
`, `Il est ami avec Banksy, et ça serait grâce à lui que Damon et Jamie Hewlett auraient commencé une colocation.
`,
`D’après une récente rumeur, l’un des membres de Blur serait Banksy.
`,`Il a jeté un seau d’eau sur le public lors d’un concert à Boston.
`
,
`Il a obtenu la nationalité islandaise en 2020. (pourquoi ?)`
];

let box_content = document.createElement('p')
box.append(box_content)

function anecdote(){
    id = Math.floor(Math.random() * funfacts.length); //récupère l'id au hasard
    console.log(id);
    box_content.innerHTML=funfacts[id]; //adapte celon l'id récupèrer
    
}



function anecdote_tournate(){
    anecdote();
    
    setInterval(anecdote,15000);
    
}

anecdote_tournate();