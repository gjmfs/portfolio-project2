//Programming Languages
import js from "../../assets/icons/tools/languages/js.svg";
import java from "../../assets/icons/tools/languages/java.svg";
import bash from "../../assets/icons/tools/languages/bash.svg";
import kotlin from "../../assets/icons/tools/languages/kotlin.svg";
import php from "../../assets/icons/tools/languages/php.svg";
import python from "../../assets/icons/tools/languages/python.svg";

export const PL = [
  { name: "JavaScript", img: js },
  { name: "Java", img: java },
  { name: "BashScript", img: bash },
  { name: "Kotlin", img: kotlin },
  { name: "PHP", img: php },
  { name: "Python", img: python },
];

//Libraries
import reactjs from "../../assets/icons/tools/Library/reactjs.svg";
import axios from "../../assets/icons/tools/Library/axios.png";

const Libraries = [
  { name: "ReactJS", img: reactjs },
  { name: "Axios", img: axios },
];

// os
import linux from "../../assets/icons/tools/OS/linux.svg";
import windows from "../../assets/icons/tools/OS/windows.svg";
import android from "../../assets/icons/tools/OS/android.svg";

const OS = [
  { name: "Android", img: android },
  { name: "Windows", img: windows },
  { name: "Linux (Debian Distros)", img: linux },
];

//package managers
import npm from "../../assets/icons/tools/PackageManager/npm.svg";
import apt from "../../assets/icons/tools/PackageManager/apt.svg";

const PM = [
  { name: "Node Package Manager (NPM)", img: npm },
  { name: "Advanced Programming Tool (APT)", img: apt },
];

//version controls
import git from "../../assets/icons/tools/version-control/git.svg";
import github from "../../assets/icons/tools/version-control/github.svg";

const vc = [
  { name: "Git", img: git },
  { name: "Github", img: github },
];

//Graphic Design
import figma from "../../assets/icons/tools/GraphicDesign/figma.svg";

const GD = [{ name: "Figma", img: figma }];

//frameworks
import bootstrap from "../../assets/icons/tools/FrameWorks/bootstrap.svg";
import express from "../../assets/icons/tools/FrameWorks/express.svg";

const frameworks = [
  { name: "Bootstrap", img: bootstrap },
  { name: "ExpressJS", img: express },
];

//database
import mongodb from "../../assets/icons/tools/Database/mongodb.svg";
import sql from "../../assets/icons/tools/Database/sql.svg";

const DB = [
  { name: "MongoDB", img: mongodb },
  { name: "SQL", img: sql },
];

//Structure
import html from "../../assets/icons/tools/Structure/html.svg";
import css from "../../assets/icons/tools/Structure/css.svg";

const Structure = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
];

export default { PL, Structure, DB, frameworks, GD, vc, PM, OS, Libraries };
