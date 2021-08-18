window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});
const functionApiUrl = 'https://getresumecountermk.azurewebsites.net/api/GetResumeCounter?code=cua8y6NZCIHXLVAvbiVG2PxSgzqk5YxBmj1dxhEjcAGjpfB3CYNjSA==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';


const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl)
        .then(response => {
        return response.json()
        })
        .then(response => {
            console.log("Website called function API.");
        count = response.count;
            document.getElementById('counter').innerText = count;
    }).catch(function (error) {
        console.log(error);
    });
    return count;
}