import React from "react";
import "./exp.css";
export default function Exp() {
  return (
    <div className="col-span-3 ml-2">
      <div className="text-center">
        <h3 className="text-indigo-700 text-4xl">Nguyen Ngoc Nhan</h3>
        <h4 className="text-2xl">Fresher Developer</h4>
      </div>
      <div>
        <div>
          <h1 className="category_name">Education</h1>
          <p className="font-semibold">
            Vietnam - Korea University of Information and Communication
            Technology, University of Da Nang
          </p>
          <p className="font-normal">Information Technology</p>
          <p className="font-light">Aug 2019 - 2025</p>
        </div>

        <div>
          <h1 className="category_name">Experiences</h1>
          <div className="mb-2">
            <p className="font-semibold">Fresher Developer</p>
            <p className="font-normal">
              Create projects and fix bug for client
            </p>
          </div>
          <div>
            <p className="font-semibold">Deploy website on VPS, Hosting</p>
            <p className="font-normal">Setup, config Server Apache...</p>
          </div>
        </div>
        <div>
          <h1 className="category_name">Skills</h1>

          <div>
            <p className="font-semibold">Programing Language</p>
            <p className="font-normal">
              Java, Php , HTML5, CSS, Javascript, Ruby
            </p>
            <p className="font-semibold">Database</p>
            <p className="font-normal">MongoDB, MySQL</p>
            <p className="font-semibold">Framework,Library</p>
            <p className="font-normal">
              Laravel, Vue, React, Next, Express, Tailwind , Boostrap
            </p>
          </div>
        </div>
        <div className="link_a">
          <h1 className="category_name">Project</h1>
          <div className="mb-2">
            <p className="font-semibold">Codehero</p>
            <p className="font-normal">Techniques: Laravel + VueJs</p>
            <p className="font-light">
              <a target="_blank" href="https://github.com/nhan2804/codehero_v2">
                view on Github
              </a>
            </p>
          </div>

          <div className="mb-2">
            <p className="font-semibold">Eravietnam</p>
            <p className="font-normal">Techniques: Laravel + ReactJs</p>
            <p className="font-light">
              <a
                target="_blank"
                href="https://nguyendangdu2001.github.io/sohocera-public/"
              >
                view on Website
              </a>
            </p>
          </div>
          <div className="mb-2">
            <p className="font-semibold">Search to Download Mp3 Youtube</p>
            <p className="font-normal">Techniques: HTML5 + JS</p>
            <p className="font-light">
              <a
                target="_blank"
                href="https://nhan2804.github.io/searchtomp3ytb/"
              >
                view on Website
              </a>
            </p>
          </div>
          <div className="mb-2">
            <p className="font-semibold">KSH.VN</p>
            <p className="font-normal">Techniques: Laravel</p>
            <p className="font-light">
              <a target="_blank" href="http://ksh.vn/">
                view on Website
              </a>
            </p>
          </div>
          <div className="mb-2">
            <p className="font-semibold">Template Nodejs</p>
            <p className="font-normal">Techniques: Nodejs</p>
            <p className="font-light">
              <a target="_blank" href="https://github.com/nhan2804/nodejs">
                view on Github
              </a>
            </p>
          </div>
          <div className="mb-2">
            <p className="font-semibold">Anyme FE+BE</p>
            <p className="font-normal">Techniques: NextJs,NextJs</p>
            <p className="font-light">
              <a target="_blank" href="https://github.com/nhan2804/anyme">
                view on Github FE
              </a>{" "}
              |{" "}
              <a target="_blank" href="https://github.com/nhan2804/anymebe">
                view on Github BE
              </a>
            </p>
          </div>
          <div className="mb-2">
            <p className="font-semibold">Thienhadaichien</p>
            <p className="font-normal">Techniques: Laravel</p>
            <p className="font-light">
              <a target="_blank" href="https://thiehadaichien.com/">
                view on Website
              </a>{" "}
            </p>
          </div>
          <div className="mb-2">
            <p className="font-semibold">Web LightNovel and News</p>
            <p className="font-normal">Techniques: Php</p>
            <p className="font-light">
              <a target="_blank" href="https://github.com/nhan2804/shareanime">
                view on Github
              </a>{" "}
            </p>
          </div>
        </div>
        <div>
          <h1 className="category_name">Interest</h1>
          <p className="font-semibold">- Listering Music</p>
          <p className="font-semibold">- Read LightNovel</p>
          <p className="font-semibold">- Play Game</p>
        </div>
      </div>
    </div>
  );
}
