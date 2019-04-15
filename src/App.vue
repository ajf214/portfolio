<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<style>
/* CSS RESET */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* global styles */
@import url('https://fonts.googleapis.com/css?family=Crimson+Text|Raleway:700');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
}

p, a {
  font-family: 'Crimson Text', serif;
  font-size: 1.125rem;
  line-height: 1.35;
}

a {
  text-decoration: none;
  color: #333;
}

a:hover {
  text-decoration: underline;
  color: #000;
}

h1, h2, h3, h4, h5 {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
}

h1 {
  font-size: 3rem;
  line-height: 1.25;
}

h2 {
  font-size: 2.25rem;
  line-height: 1.25;
}

h3 {
  font-size: 1.75rem;
  line-height: 1.25
}

h4 {
  font-size: 1.125rem;
  line-height: 1.22222222;
}

@media only screen and (min-width: 800px) {
  p, a {
    line-height: 1.375;
  }
}

@media only screen and (min-width: 1200px) {

}
</style>
