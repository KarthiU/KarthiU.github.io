import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    git,
    assetflo,
    orbital,
    warg, 
    uw,
    harvard,
    python, 
    c,
    cpp, 
    vscode, 
    postman,
    bobabot, 
    arm, 
    pathfind, 
    sortingalgo,
    surgery, 
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    { 
      id: "experience", 
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Algorithms and Data Structures",
      school: "Waterloo",
      icon: uw,
    },
    { 
      title: "CS50: Introduction to AI",
      school: "Harvard",
      icon: harvard, 
    },
    {
      title: "Digital Computation",
      school: "Waterloo",
      icon: uw,
    },
    { 
      title: "Introduction to Microprocessors and Digital Logic",
      school: "Waterloo",
      icon: uw,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "C",
      icon: cpp,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "VsCode",
      icon: vscode,
    },
    { 
      name: "Postman",
      icon: postman,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer/Server Lead",
      company_name: "AssetFlo Inc",
      icon: assetflo,
      iconBg: "#1b7eb8",
      date: "March 2020 - April 2021",
      points: [
        "Researched and constructed a Machine Learning algorithm as a part of a TinyML solution to integrate into 5G devices for location accuracy",
        "Created various Python scripts to link and interpret 4G device data to MQTT and TCP platforms using related python libraries",
        "Deggued and created solutions for 5G firmware issues in the C codebase of device to ensure product stability"
      ],
    },
    {
      title: "Attitude Determination And Control System Team Member",
      company_name: "UW Orbital",
      icon: orbital,
      iconBg: "#a1e4f3",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developed magnetic torque device model (magnetorquer) to be used for satellite.",
        "Implemented dimensional optimization based on electromagnetic concepts for satellite parts",
        "Collaborated in a functional team to assemble and construct various satellite parts under ADCS team",
      ],
    },
    {
      title: "Computer Vision Team Member",
      company_name: "WARG",
      icon: warg,
      iconBg: "#1b7eb8",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Researched combinations of 3D Computer Vision and Lidar for 3D object detection to help team in  upcoming Aerial Evolution Association of Canada Student UAS Competition",
        "Designed and trained machine learning algorithms with 80+% accuracy with CIFAR-10 and MNIST datasets, implmenting CNN's and feed forward networks"
      ],
    },
  ];
  
  const projects = [
    {
      name: "Sorting Visualizer",
      description:
        "Algorithms built in Python using related libraries that allows the user to select between heap sort, quick sort, bubble sort, and insertion sort. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: sortingalgo,
      source_code_link: "https://github.com/KarthiU/SortingVisualizer",
      
    },
    {
      name: "Pathfinder",
      description:
        "A simple visualizer made via JavaScript and React that allows the user to view dijkstra's algorithm, completed with a basic UI.",
    
      image: pathfind,
      source_code_link: "https://github.com/KarthiU/PathfindingVisualizer",
    }, 
    {
      name: "Torque Optimizer",
      description:
        "Created a script in Python using Numpy, Scipy, and Matplotlib to optimize a 3-degree-of-freedom arm under given conditions.",
      
      image: arm,
      source_code_link: "https://github.com/KarthiU/MinTorqueScript",
    },
    {
      name: "BobaBot",
      description:
        "Programmed in C,  streamlines the task of delivering drinks by eliminating the need for a waiter or deliveryman. Complete with a payment system, PID control (Gyro) and more.",
      
      image: bobabot,
      source_code_link: "https://github.com/KarthiU/BobaBot",
    },
    {
      name: "Surgery Challenge Bot",
      description:
        "2-day challenge to create a robot that could pick up and remove \"bones\" from a human body, using limited equipment. Obtained maximum score for performance",
      image: surgery,
      source_code_link: "https://github.com"
    },
  ];
  
  export { services, technologies, experiences, projects };