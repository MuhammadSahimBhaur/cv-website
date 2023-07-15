const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.static("public"));
app.use(cors());

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/projects", (req, res) => {
  res.json({
    projects: [
      {
        Title: "Khudkaar",
        id: 0,
        image: "gs://cv-website-bucket/khud kaar.jpg",
        Summary:
          "Empowering unemployed individuals, and supporting women and students in selling homemade products, while providing part-time work opportunities through a functional online retail store and freelance portal.",
        Description: `<div>
          <p>
            Khudkaar.com was not only a project to help us learn Software Engineering fundamentals but also an attempt at helping a social aware student startup to grow even more.
          </p>
          <br>
          <p>
            Khudkaar is a social enterprise working to create employment opportunities for the unemployed and lift them up from scratch. It is committed to providing them access to the market and assisting them in setting up their businesses. Our focus is specifically on helping unemployed women and hostelite students. We aim to enable women to sell their homemade products such as hygienic food, beautiful artwork, and amazing handicrafts, while allowing students to purchase these products at affordable prices.
          </p>
          <br>
          <p>
            Our application allows unemployed individuals to sell their homemade products online and earn a reasonable income. Additionally, we have a freelance portal that showcases user profiles with various useful skills such as art and drawing, Photoshop, animation, and more. This portal enables users to work part-time and serve our customers effectively. Similarly, our customers can search for profiles and select the right people for their required work.
          </p>
          <br>
          <p>
            Through our efforts we have developed a functional online retail store that provides ample learning opportunities. While the platform may lack finesse, it has served as a valuable learning experience for our team. We are excited to collaborate with the clients of KhudKaar in order to contribute to the betterment of the community.
          </p>
        </div>
        `,
      },
      {
        Title: "SE",
        id: 1,
        image: "https://loremflickr.com/640/360/paris",
        Summary: "Elit sunt Lorem exercitation incididunt qui consectetur.",
        Description:
          "Consequat dolore consequat irure nostrud. Pariatur velit laboris mollit fugiat consequat culpa et fugiat elit aliqua proident eiusmod. Nulla nostrud occaecat ut id dolor velit culpa ex dolor. Sit ullamco ex deserunt non nisi in commodo est aliqua. Enim esse excepteur eu nostrud consequat cupidatat dolor minim.",
      },
      {
        Title: "John3",
        id: 2,
        image: "https://loremflickr.com/640/360/pakistan",
        Summary:
          "In reprehenderit elit qui elit sit laboris minim laboris Lorem nisi in.",
        Description:
          "Consequat dolore consequat irure nostrud. Pariatur velit laboris mollit fugiat consequat culpa et fugiat elit aliqua proident eiusmod. Nulla nostrud occaecat ut id dolor velit culpa ex dolor. Sit ullamco ex deserunt non nisi in commodo est aliqua. Enim esse excepteur eu nostrud consequat cupidatat dolor minim.",
      },
      {
        Title: "SEdcd",
        id: 3,
        image: "https://loremflickr.com/640/360/india",
        Summary: "Elit sunt Lorem exercitation incididunt qui consectetur.",
        Description:
          "Consequat dolore consequat irure nostrud. Pariatur velit laboris mollit fugiat consequat culpa et fugiat elit aliqua proident eiusmod. Nulla nostrud occaecat ut id dolor velit culpa ex dolor. Sit ullamco ex deserunt non nisi in commodo est aliqua. Enim esse excepteur eu nostrud consequat cupidatat dolor minim.",
      },
      {
        Title: "Johdcscdsn3",
        id: 4,
        image: "https://loremflickr.com/640/360/italy",
        Summary:
          "In reprehenderit elit qui elit sit laboris minim laboris Lorem nisi in.",
        Description:
          "Consequat dolore consequat irure nostrud. Pariatur velit laboris mollit fugiat consequat culpa et fugiat elit aliqua proident eiusmod. Nulla nostrud occaecat ut id dolor velit culpa ex dolor. Sit ullamco ex deserunt non nisi in commodo est aliqua. Enim esse excepteur eu nostrud consequat cupidatat dolor minim.",
      },
    ],
  });
});

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log("Server listening on port", port);
});
