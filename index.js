// Write your code here!
const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo) {
  console.log("Running displayUser with:", userInfo);

  const header = document.querySelector("#main");
  console.log("Selected header element:", header);

  header.textContent = `${userInfo.username}'s Personal Webpage`;
  header.className = userInfo.theme;
  console.log("Updated header text and theme class");

  const description = document.createElement("p");
  console.log("Created new <p> element:", description);

  description.textContent = userInfo.description;
  description.className = userInfo.theme;
  console.log("Set description text and theme class");

  const body = document.querySelector("body");
  console.log("Selected body element:", body);

  body.append(description);
  console.log("Appended description to the body");
}

displayUser(userInfo)
