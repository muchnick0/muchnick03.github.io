// Credit: https://www.w3schools.com/howto/howto_js_read_more.asp

function show()
{
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if(moreText.style.display === "inline")
    {
        btnText.innerHTML = "Show More";
        moreText.style.display = "none";
    }
    else
    {
        btnText.innerHTML = "Show Less";
        moreText.style.display = "inline";
    }
}
