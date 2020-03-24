import "./styles.css";
import axios from "axios";

function getUser(userId) {
    return new Promise(function(resolve) {
        axios.get("https://gorest.co.in/public-api/users/" + userId, {
            headers: {
                authorization: "Bearer rQqyD5LBaPDCZ0vLTuE0C_HN14mBcrqx4tbM"
            }
        }).then(function(response) {
            resolve(response);
        });
    });    
}
async function renderUser(userId) {
    const response = await getUser(userId);
    //document.getElementById("app").innerHTML = JSON.stringify(response,null,2)
    const firstName = response.result.first_name;
    const lastName = response.result.last_name;
    document.getElementById("app").innerHTML = firstName + " " + lastName;
}
async function updateUser(userId) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
    "Authorization",
    "Bearer rQqyD5LBaPDCZ0vLTuE0C_HN14mBcrqx4tbM"
    );
    var raw = JSON.stringify({ first_name: "şşşşşşşş" });
    await Axios.put("https://gorest.co.in/public-api/users/" + userId, {
        headers: myHeaders,
        body: raw
    });
    await renderUser(userId);
}
document.getElementById("updateBtn").addEventListener("click", function() {
    updateUser(5);
});

//renderUser(5);
