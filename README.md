# Honeybook Demonstration Page
### By Travis Lawrence (October 2016)
- A little take home coding exercise

#### Setup
Use the npm package [`http-server`](https://github.com/indexzero/http-server) to run this web app locally.
```
npm install http-server
```
From the root directory then run:
```
http-server .
```
You can then access the site via `0.0.0.0:8080`

#### Compile SASS
This demonstration compiles CSS using [SASS - CSS Compiler](http://sass-lang.com/). To compile the `.scss` files locally you will need to have the SASS gem installed (may require `sudo`):
```
gem install sass
```
To compile the CSS, run the following command from the project root directory:
```
sass public/sass/style.scss:public/css/style.css
```
When actively developing on the project, use the `--watch` flag to continuously compile CSS when a change is detected in a SASS file:
```
sass --watch public/sass:public/css/
```

##### Enjoy
