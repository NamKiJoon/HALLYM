const headerBtn = document.querySelector(`.header_Btn`);
const menu = document.querySelector(`.header_menu`);
const icons = document.querySelector(`.header_icons`);

headerBtn.addEventListener(`click`, () => {
    menu.classList.toggle(`active`);
    icons.classList.toggle(`active`);
});

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
            NAME: "휘당",
            menu: "안동찜닭,당면<br>잡곡밥<br>알큰콩나물국",
            price: "*",
        },
        {
            id: 2,
            NAME: "Chef&U",
            menu: "잔치국수<br>제육김치덮밥<br>크로와상-딸기잼",
            price: "*",
        },
        {
            id: 3,
            NAME: "Health&",
            menu: "양상추 샐러드<br>깍두기<br>둥글레차",
            price: "*",
        },
        {
            id: 4,
            NAME: "IN THE BOX",
            menu: "건강식 샐러드",
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
