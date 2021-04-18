import React from "react";
import "./info.css";
export default function Info() {
  return (
    <div className="">
      <div className="text-center">
        <img
          style={{ display: "unset" }}
          className="w-60 h-60 rounded-full text-center"
          src="https://avatars.githubusercontent.com/u/60734651"
          alt="yukino"
        />
      </div>
      <div className="info">
        <ul>
          <li>
            <i className="fas fa-address-card"></i> Tam Dan Commune, Phu Ninh
            District, Quang Nam Province
          </li>
          <li>
            <i class="fas fa-envelope"></i> xiiithixg@gmail.com
          </li>
          <li>
            <i class="fas fa-phone"></i> 0896 235 652
          </li>
          <li>
            <i class="fab fa-github"></i>{" "}
            <a href="https://github.com/nhan2804/" className="link">
              github.com/nhan2804
            </a>
          </li>
          <li>
            <i class="fab fa-linkedin"></i> linkin.com/comison
          </li>
          <li>
            <i class="fab fa-facebook"></i>{" "}
            <a
              target="_blank"
              className="link"
              href="https://www.facebook.com/anhimdi/"
            >
              fb.com/anhimdi
            </a>
          </li>
        </ul>
        <h1 className="sumany">Summany</h1>
        <p className="">
          I am currently in my 2nd year at school. I am diligent and want to
          explore and discover new technologies
        </p>
      </div>
    </div>
  );
}
