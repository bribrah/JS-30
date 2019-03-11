const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }
    // Regular
    console.log('hello');
    // Interpolated
    console.log("hello I am a %s","string");
    // Styled
    console.log("%cI am some styled text",'font-size:50px; background:red;');
    // warning!
    console.warn("RUN!");
    // Error :|
    console.error("im an error");
    // Info
    console.info("this is some info");
    // Testing
    console.assert(1===2);
    // clearing
    // Viewing DOM Elements
    let p = document.querySelector('p');
    console.log(p);
    console.dir(p);
    // Grouping together
    (dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(dog.name);
        console.log(`${dog.name} is ${dog.age} years old`)
        console.groupEnd(`${dog.name}`);
    }
    ));
    // counting
    console.count('suh dood');
    console.count('suh dood');
    console.count('suh dood');
    console.count('suh dood');
    console.count('suh dood');
    console.count('kook');
    console.count('suh dood');
    console.count('kook');
    console.count('kook');
    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/bribrah')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        })

    console.table(dogs);