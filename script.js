"use strict";

// const html =
const clientContainer = document.querySelector(".clients");
const users = [
  {
    image: "assest/images/client01.jpg",
    name: "john doe",
    comment:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
  },
  {
    image: "assest/images/client02.jpg",
    name: "johnathan doe",
    comment:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis."',
  },
  {
    image: "assest/images/client03.jpg",
    name: "john doe",
    comment:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
  },
  {
    image: "assest/images/client04.jpg",
    name: "johnathan doe",
    comment:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis."',
  },
  {
    image: "assest/images/client05.jpg",
    name: "john doe",
    comment:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
  },
  {
    image: "assest/images/client06.jpg",
    name: "johnathan doe",
    comment:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis."',
  },
];

const userCreator = function (arr) {
  arr.forEach((el) => {
    const html = `
        <div class="client">
        <div class="client-avatar">
          <img
            src=${el.image}
            alt=""
          />
        </div>
        <div class="clent-info">
          <div class="client-comment">${el.comment}</div>
          <div class="client-name">
            <p>- ${el.name}</p>
          </div>
        </div>
        </div>`;
    clientContainer.insertAdjacentHTML("beforeend", html);
  });
};

userCreator(users);
