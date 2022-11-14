import { useState } from "react";
import "../styles/footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
      setInputValue(inputValue);
    }
  }
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">
        Laissez-nous votre mail :
        <input
          type="email"
          placeholder="Exemple@gmail.com"
          value={inputValue}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>
    </footer>
  );
}

export default Footer;
