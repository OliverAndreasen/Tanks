/* here write a fetch that gets the visitor count and shows it in #visitor-count */
fetch("/api/visitors")
    .then(response => response.json())
    .then(result => {
        updateVisitorCount(result.data);
});

function updateVisitorCount(visitorsCount){
    const visitorCount = document.querySelector("#visitor-count");
    visitorCount.innerText = visitorsCount;
}

//when a button is clicked update the visior count with put


function updateVisitorCountButton(){
    /* here write a fetch that updates the visitor count and shows it in #visitor-count */
        fetch("/api/visitors", {
            method: "PUT"
        })
            .then(response => response.json())
            .then(result => {updateVisitorCount(result.data);});
}




function writeInVisitorLog(){


}