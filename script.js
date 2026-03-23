let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let submitBtnEl = document.getElementById("submitBtn");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");

function warningMessage() {
    let isValid = true;

    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
        isValid = false;
    } else {
        siteNameErrMsgEl.textContent = "";
    }

    if (siteUrlInputEl.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
        isValid = false;
    } else {
        siteUrlErrMsgEl.textContent = "";
    }

    return isValid;
}

function getResult(event) {
    event.preventDefault();

    let isValid = warningMessage();

    if (!isValid) {
        return;
    }

    // Create list item
    let listItem = document.createElement("li");

    // Create link
    let link = document.createElement("a");
    link.href = siteUrlInputEl.value;   //  FIXED
    link.target = "_blank";
    link.textContent = siteNameInputEl.value; // Show site name

    // Append link to list
    listItem.appendChild(link);
    bookmarksListEl.appendChild(listItem);

    // Clear inputs
    siteNameInputEl.value = "";
    siteUrlInputEl.value = "";
}

bookmarkFormEl.addEventListener("submit", getResult);