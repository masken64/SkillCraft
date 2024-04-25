import logo from "./assets/skillcraft.png";

export default function Header() {
  return (
    <header className="header">
      <div className="leftH">
        <img
          src={logo}
          className="logo"
          alt="skillcraft logo"
          aria-label="skillcraft logo"
          role="presentation"
        ></img>
      </div>
      <div className="rightH">
        <a
          href="https://github.com/masken64/SkillCraft"
          className="viewcode"
          aria-label="view code link"
          target="_blank"
        >
          View Code
        </a>
      </div>
    </header>
  );
}
