Lux-Base
=====================

Lightweight, React-based boilerplate to get you instantly creating beautiful sites instead of fiddling with foundation. 



### Where'd You Get That?

Clone yer'self da repo right quick 'ere... 

```
git clone git@github.com:lux-capacitor/lux-base.git
```


### How Do I Turn This On?

Build all the whirly-gig doo-dads 'an sech..

```
npm/yarn install (dealers choice..)
npm/yarn start
open http://localhost:9001 (it's over 9000)
```


### But Where's The Cupholder?

Store static assets in the /app sub-folders according to what it is. (Img, Sass, Font, etc)
REMEMBER! -- If you add a new filetype asset, you need to add a corresponding webpack loader!

Common Questions:
 - ["What is a webpack?"](https://webpack.js.org/concepts#loaders)
 - ["What is a loader?"](https://webpack.js.org/concepts#loaders)

```
EXAPMLE : 
	SASS URL : '/app/img/avatar.jpg' - this is where the main img assets for the top level component could live. Further tree-expansion is dealer choice. 

```

Organization is easily redefined by changing where you are (A.) Referencing images from in your sass or (B.) Changing where the IMG elements are referencing in your sub-components. I HIGHLY SUGGEST organizing stylesheets / imagery with the individual componets as you developo, ingesting them where they are used to adhere to a modular approach. If you'd prefer using inline js style sheets like the fine work by done with chroma.js, simply install it (npm i chroma --save) and import it in your components.

I kept choices like that up to you though as this is simply the springboard to get you making commponents in 60 seconds, not to box you into a certain style approach. Each project is unique, don't force yourself to use complex tools should the need not be present.  



### You've Got Some Lint On You...

React ES Lint config set to its recommended settings, feel free to modify it's configuration under the .eslintrc file

```
npm run lint
```
Also note that the .gitignore might seem a bit excessive, but given that I've used this piecemeal for several things I figured I'd just cover the primary bases, can't hurt anything really. 



### Props on Tap:

* [React](https://reactjs.org/)
* [Webpack](https://webpack.js.org/concepts)
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)



### New Phone, Who Dis?

Just some wierdo React-weilding front-end warlock with an unhealthy idol worship for JSON father Douglas Crockford, Brad Frost, and many others in this crazy community of keyboard ninjitsu. I also make neon and other light-based "Lumenist" art, poke me sometime on [Instagram](http://instagram.com/lux_capacitor) or on my site [http://lux-capacitor.com](http://lux-capacitor.com).
