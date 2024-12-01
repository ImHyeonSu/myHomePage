// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
  // AWS Sidebar
  awsSidebar: [{ type: "autogenerated", dirName: "aws" }],
  // docker Sidebar
  dockerSidebar: [{ type: "autogenerated", dirName: "docker" }],
  // git Sidebar
  gitSidebar: [{ type: "autogenerated", dirName: "git" }],
  // go Sidebar
  goSidebar: [{ type: "autogenerated", dirName: "go" }],
  // html Sidebar
  htmlSidebar: [{ type: "autogenerated", dirName: "html_css" }],
  // javascript Sidebar
  javascriptSidebar: [{ type: "autogenerated", dirName: "javascript" }],
  // MySQL Sidebar
  MySQLSidebar: [{ type: "autogenerated", dirName: "MySQL" }],
  // python Sidebar
  pythonSidebar: [{ type: "autogenerated", dirName: "python" }],
  // react Sidebar
  reactSidebar: [{ type: "autogenerated", dirName: "react" }],
  // react Sidebar
  swiftSidebar: [{ type: "autogenerated", dirName: "swift" }],
  // react Sidebar
  VueSidebar: [{ type: "autogenerated", dirName: "Vue" }],
  // react Sidebar
  othersSidebar: [{ type: "autogenerated", dirName: "others" }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;