/*TASK
Step 1: fetch tanks:
Step 2: console.log tanks;
Bonus: add them to the div: tanks-wrapper
 */


fetch("http://localhost:8080/api/tanks/")
    .then(response => response.json())
    .then(result => {
        console.log(result);
        const tanksWrapper = document.querySelector("#tanks-wrapper");

        result.data.forEach(tank => {
            const tankDiv = document.createElement("div");

            const tankNameP = document.createElement("p");
            tankNameP.innerText = tank.name || "No name";
            tankDiv.appendChild(tankNameP);

            const tankCountryP = document.createElement("p");
            tankCountryP.innerText = tank.country || "No country";
            tankDiv.appendChild(tankCountryP);


            tanksWrapper.appendChild(tankDiv);
        })
});

