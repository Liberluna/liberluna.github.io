/*
// ネタ用　後で差し替える
import members from "../members";

let Rank0: any[] = [
  /*
  ["Pochi", 10, 7]
  */
];

/*
postsの役職ごとにポイント
Leader: 5
Manager: 4
SubLeader: 3
Developer: 2
Bug Hunter: 2
Other: 1

skill
とりあえず数で。
*/
/*
let Members: any = members;

for (let f: number = 0; f < Members.length; f++) {
  let Member: any = Members[f];
  let Name: string = Member["name"];
  let Posts: string[] = Member["posts"]; 
  let Point: number = 0;

  for (let r: number = 0; r < Posts.length; r++) {
    if (Posts[r] === "Leader") {
      Point += 5;
    } else if (Posts[r] === "Manager") {
      Point += 4;
    } else if (Posts[r] === "SubLeader") {
      Point += 3;
    } else if (Posts[r] === "Developer" || Posts[r] === "Bug Hunter") {
      Point += 2;
    } else {
      Point += 1;
    }
  }

  let Skills: number = Member["skills"].length;

  let Release: any[] = [Name, Point, Skills]; 
  Rank0.push(Release);
}

Rank0.sort((a, b) => (b[1] + b[2]) - (a[1] + a[2])); 

console.log(Rank0); 
*/
