const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/projects", (req, res) => {
  res.json({
    projects: [
      {
        Title: "Khudkaar",
        id: 0,
        image: "https://loremflickr.com/640/360/germany",
        Summary:
          "Labore irure id ex incididunt Lorem ex eiusmod sint proident ad.",
        Description:
          "Consequat dolore consequat irure nostrud. Pariatur velit laboris mollit fugiat consequat culpa et fugiat elit aliqua proident eiusmod. Nulla nostrud occaecat ut id dolor velit culpa ex dolor. Sit ullamco ex deserunt non nisi in commodo est aliqua. Enim esse excepteur eu nostrud consequat cupidatat dolor minim.",
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
