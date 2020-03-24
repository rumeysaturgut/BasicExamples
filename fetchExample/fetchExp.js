function onFetch () {
    fetch('https://dtv-projects.firebaseio.com/sections.json')
        .then((response) => {
            return response.json()
        })
        .then((sectionJson) => {
            
            fetch('https://dtv-projects.firebaseio.com/menu.json')
                .then((response) => {
                    return response.json()
                })
                .then((myJson) => {
                    console.log(myJson)
                    console.log(sectionJson)
                })

            
        })
    
}

function getContent() {
   console.log('hakki');
   onFetch();
   console.log('ilkbahar');
}

getContent();