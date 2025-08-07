import React from "react";
import NavbarApp from "./NavbarApp.jsx";
import Card from "./Card.jsx";

// function Profile({ children }) {
//   return (
//     <div className="profile-container">
//       <div>{children}</div>
//     </div>
//   );
// }

export default function App() {
  return (
    <>
      {/* <Profile> */}
      <NavbarApp
        name="flipkart"
        size="60px"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMFtV9zw_NIJOhqcq9Kjp3CV0Oi0AgviajQ&s"
        contact="ContactUs"
      ></NavbarApp>
      <Card
        items={[
          {
            title: "Card 1",
            text: "ome quick example text to build on the card title and make up the bulk of the card’s content",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs27fkNzjyS5yyA1teEFwd9CYPR5KY0pptkw&s",
            // size: "70%",
          },
          {
            title: "Card 2",
            text: "Some quick example text to build on the card title and make up the bulk of the card’s content",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrv07l7Qh5wLKJOsfH2LT48omxudckQCI0ag&s",
          },
          {
            title: "Card 3",
            text: "Some quick example text to build on the card title and make up the bulk of the card’s content",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDyMzx1SrWytCI_Jen5yiflDYRGfqpLwpj_w&s",
          },
          {
            title: "Card 4",
            text: "Some quick example text to build on the card title and make up the bulk of the card’s content",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrv07l7Qh5wLKJOsfH2LT48omxudckQCI0ag&s",
          },
        ]}
      />
      {/* </Profile> */}
    </>
  );
}
