import "./style/page.scss";
import { Header } from "./components/header";
import FacebookIcon from "../imgs/icons/facebook.png";
import InstagramIcon from "../imgs/icons/instagram.png";
import PinterestIcon from "../imgs/icons/pinterest.png";
import TwitterIcon from "../imgs/icons/twitter.png";
function App() {
  const ItemsBoxFood = [
    {
      classNameBoxDaddyRecipes: "BoxContentRecipes",
      boxImage: {
        classNameBoxImageFood: "BoxImageFood",
        srcImage: "../imgs/foods/foodBolo.png",
        alt: "Food Recipies",
        classNameImage: "Food",
      },
      boxText: {
        classNameBoxText: "BoxText",
        textContent: "Red Velvet Cake",
      },
    },
    {
      classNameBoxDaddyRecipes: "BoxContentRecipes",
      boxImage: {
        classNameBoxImageFood: "BoxImageFood",
        srcImage: "../imgs/foods/foodPizza.png",
        alt: "Food Recipies",
        classNameImage: "Food",
      },
      boxText: {
        classNameBoxText: "BoxText",
        textContent: "Margherita Pizza",
      },
    },
    {
      classNameBoxDaddyRecipes: "BoxContentRecipes",
      boxImage: {
        classNameBoxImageFood: "BoxImageFood",
        srcImage: "../imgs/foods/foodBebida.png",
        alt: "Food Recipies",
        classNameImage: "Food",
      },
      boxText: {
        classNameBoxText: "BoxText",
        textContent: "Peanut smoothie",
      },
    },
  ];

  const SubMenu = [
    {
      classNameList: "ListItemLink",
      a: {
        href: "/about",
        content: "ABOUT",
        classNameLink: "LinkToRoute",
      },
    },
    {
      classNameList: "ListItemLink",
      a: {
        href: "/recipes",
        content: "RECIPES",
        classNameLink: "LinkToRoute",
      },
    },
    {
      classNameList: "ListItemLink",
      a: {
        href: "/subscribe",
        content: "SUBSCRIBE",
        classNameLink: "LinkToRoute",
      },
    },
  ];
  return (
    <>
      <div className="containerStart">
        <Header />
        <div className="BoxTextCenter">
          <h1 className="TextCenter">Recipes</h1>
        </div>
      </div>
      <main className="ConteinerContent">
        <div className="BoxTextCenterContent">
          <h2 className="TextCenter">LATEST RECIPES</h2>
        </div>
        <ul className="ContainerLatestRecipes">
          <li className="ListOfRecipes">
            {ItemsBoxFood.map((item, index) => {
              return (
                <div className={item.classNameBoxDaddyRecipes} key={index}>
                  <div className={item.boxImage.classNameBoxImageFood}>
                    <img
                      src={item.boxImage.srcImage}
                      alt={item.boxImage.alt}
                      className={item.boxImage.classNameImage}
                    />
                  </div>
                  <div className={item.boxText.classNameBoxText}>
                    <h2 className="TextCenterFood">
                      {item.boxText.textContent}
                    </h2>
                  </div>
                </div>
              );
            })}
          </li>
          <li className="ListContainerAbout">
            <div className="BoxImgLeft">
              <img
                src="../imgs/leftAbout/leftAboutColher.png"
                alt="Colher"
                className="ImgLeftAbout"
              />
            </div>
            <div className="BoxTextRight">
              <h2 className="TextCenter">ABOUT</h2>
              <p className="TextCenterP">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus asperiores quod explicabo labore consectetur dolor
                magni nostrum nihil a odio placeat ut doloremque minima
                perferendis aspernatur, ad totam. Alias, magni! Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Molestiae inventore
                ipsa itaque, provident beatae harum incidunt voluptate quo
                tempora illum, perspiciatis aliquam facilis dicta vero dolor
                asperiores odit quam cumque!
              </p>
            </div>
          </li>
        </ul>
        <div className="ContainerContentSubscribe">
          <div className="BoxContentCenter">
            <h2 className="TextSubscribe">SUBSCRIBE</h2>
            <h3 className="TextSign">Sign up for newslleter</h3>
            <input
              type="text"
              className="inputEmail"
              placeholder="Your Email"
            />
            <input type="submit" className="inputSubmit" value="SUBMIT" />
          </div>
        </div>
        <footer>
          <div className="BoxContentFooter">
            <ul className="ContainerList">
              <li className="ListILinks">
                <div className="icons">
                  <a href="">
                    <img
                      src={FacebookIcon}
                      alt="Facebook Icon"
                      className="Icon"
                    />
                  </a>
                  <a href="">
                    <img
                      src={InstagramIcon}
                      alt="Instagram Icon"
                      className="Icon"
                    />
                  </a>
                  <a href="">
                    <img
                      src={TwitterIcon}
                      alt="Twitter Icon"
                      className="Icon"
                    />
                  </a>
                  <a href="">
                    <img
                      src={PinterestIcon}
                      alt="Pinterest Icon"
                      className="Icon"
                    />
                  </a>
                </div>
              </li>
              <nav className="NavForSubMenu">
                {SubMenu.map((item, index) => {
                  return (
                    <li key={index} className={item.classNameList}>
                      <a href={item.a.href} className={item.a.classNameLink}>
                        {item.a.content}
                      </a>
                    </li>
                  );
                })}
              </nav>
            </ul>
          </div>
          <div className="EndFooter">
            <p className="TexToEnd">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
              quidem ex adipisci non, perspiciatis labore iure. Hic animi
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
