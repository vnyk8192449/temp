var profile;
var userequalname;
var description;
var externalurl;
var private;
var posts;
var following;
var followers;

var chardivuser;
var chardivname;
var wordsname;



function Validity() {
    let flag = 0;
    if (document.getElementsByClassName('profilepicture')[0].checked || document.getElementsByClassName('profilepicture')[1].checked) {
    }
    else {
        flag = 1;
    }
    if (document.getElementById('username').value.length < 3) {
        flag = 1;
        document.getElementById('username').style.borderBottom = '2px solid #ce2828';
    }
    if (document.getElementById('fullname').value.length < 3) {
        flag = 1;
        document.getElementById('fullname').style.borderBottom = '2px solid #ce2828';
    }
    if (document.getElementsByClassName('exturl')[0].checked || document.getElementsByClassName('exturl')[1].checked) {
    }
    else {
        flag = 1;
    }
    if (document.getElementsByClassName('privt')[0].checked || document.getElementsByClassName('privt')[1].checked) {
    }
    else {
        flag = 1;
    }
    if (!document.getElementById('posts').value) {
        flag = 1;
        document.getElementById('posts').style.borderBottom = '2px solid #ce2828';
    }
    if (!document.getElementById('following').value) {
        flag = 1;
        document.getElementById('following').style.borderBottom = '2px solid #ce2828';
    }
    if (!document.getElementById('followers').value) {
        flag = 1;
        document.getElementById('followers').style.borderBottom = '2px solid #ce2828';
    }
    if (flag == 1) {
        return false;
    }
    return true;

}

document.getElementById("formfilled").addEventListener("click", function (e) {
    e.preventDefault();
    if (Validity()) {
        if (document.getElementsByClassName('profilepicture')[0].checked) {
            profile = 1;
        }
        else {
            profile = 0;
        }
        if (document.getElementById('username').value == document.getElementById('fullname').value) {
            userequalname = 1;
        }
        else {
            userequalname = 0;
        }
        description = document.getElementById('description').value.trim().length;
        if (document.getElementsByClassName('exturl')[0].checked) {
            externalurl = 1;
        }
        else {
            externalurl = 0;
        }
        if (document.getElementsByClassName('privt')[0].checked) {
            private = 1;
        }
        else {
            private = 0;
        }

        posts = document.getElementById('posts').value;
        following = document.getElementById('following').value;
        followers = document.getElementById('followers').value;

        let S = document.getElementById('username').value;
        let temp = "";
        for (let i = 0; i < S.length; i++) {
            if (temp.includes(S[i]) === false) {
                temp += S[i]
            }
        }
        chardivuser = temp.length / S.length;

        let T = document.getElementById('fullname').value;
        let temp2 = "";
        for (let i = 0; i < T.length; i++) {
            if (temp2.includes(T[i]) === false) {
                temp2 += T[i]
            }
        }
        chardivname = temp2.length / T.length;

        const arr = T.split(' ');

        wordsname = arr.filter(word => word !== '').length;

        // console.log(profile);
        // console.log(userequalname);
        // console.log(description);
        // console.log(externalurl);
        // console.log(private);
        // console.log(posts);
        // console.log(following);
        // console.log(followers);
        // console.log(chardivuser);
        // console.log(chardivname);
        // console.log(wordsname);
    }
});

document.getElementById("nextclicked").addEventListener("click", function (e) {
    e.preventDefault();
    setTimeout(() => {
        document.getElementById('main').style.display = "none";
        document.getElementById('section').style.display = "flex";

    }, 500)
});
