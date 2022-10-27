function onPageNavigate(e) {
    console.log(e);
}
function onInfoNavigate(id) {
    location.href = `/post?post_id=${id}`;
}

window.onload = function () {
    const param = new URLSearchParams(location.search);
    console.log(param.get("page"));
    const pageParam = param.get("post_id");

    const post = [
        {
            id: 1,
            NAME: "착한백반",
            menu: "즉석라면",
            price: 3000,
        },
        {
            id: 2,
            NAME: "진짜배기탕",
            menu: "부대찌개,라면사리<br>잡곡밥<br>야채계란찜",
            price: 4000,
        },
        {
            id: 3,
            NAME: "크레이지팬",
            menu: "핫스파이시치밥<br>미역국<br>포테이토샐러드",
            price: 4500,
        },
        {
            id: 4,
            NAME: "테이크아웃",
            menu: "샐러드<br>온더고도시락<br>닭가슴살,음료",
            price: 4500,
        },
        {
            id: 5,
            NAME: "셀프바",
            menu: "양상추샐러드<br>배추김치",
            price: "*",
        },
    ];

    const content = document.getElementById("post_content");
    console.log(content);

    const row = document.createElement("tr");
    row.innerHTML = `<div>1</div>`;

    for (let i = 0; i < post.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${post[i].id}</td>
        <td onclick="onInfoNavigate(${post[i].id}">${post[i].NAME}</td>
        <td>${post[i].menu}</td>
        <td>${post[i].price}</td>`;

        content.append(row);
    }
};
