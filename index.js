const btnLike1 = document.getElementById("btnLike1")
const btndisLike1 = document.getElementById("btndisLike1")
const btnLike2 = document.getElementById("btnLike2")
const btndisLike2 = document.getElementById("btndisLike2")
const countLikes1 = document.getElementById("countLikes1")
const countDislikes1 = document.getElementById("countDislikes1")
const countLikes2 = document.getElementById("countLikes2")
const countDislikes2 = document.getElementById("countDislikes2")

function hitLikes1() {
  let totalLikes1 = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
}
btnLike1.addEventListener("click",hitLikes1)

function hitLikes2() {
  let totalLikes2 = parseInt(countLikes2.value) + 1
  countLikes2.textContent = totalLikes2.toString()
}
btnLike2.addEventListener("click",hitLikes2)

function hitLikes3() {
  let totalLikes3 = parseInt(countDilikes1.value) + 1
  countDislikes1.textContent = totalLikes3.toString()
}
btndisLike1.addEventListener("click",hitLikes3)
function hitLikes4() {
  let totalLikes3 = parseInt(countDilikes2.value) + 1
  countDislikes1.textContent = totalLikes2.toString()
}
btndisLike2.addEventListener("click",hitLikes4)


