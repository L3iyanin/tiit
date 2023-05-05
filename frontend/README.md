## Frontend Structure:

### React Components:
- use `Pascal Case` for component name.
- For pages components put it inside: `src/pages` 
- For components that are used by pages put inside: `src/components/<PageName>`.
- For reusable components like buttons and input... put it inside: `src/components/UI`.
- For images that used as src of \<img src="" /> put it inside: `public/imgs`
- For images that are used by CSS, sass as backgrounds put it inside: `src/assets/backgrounds`
- For icons put inside: `src/assets/icons`

### Styling Components:
- First of all, we are using `tailwind` so it is much better to use tailwind classes and styling instead of your own
- For CSS classes use `Kebab case`
- For creating your own styling:
   - if the styling you wanna add is for buttons put in a class inside the file `src/styles/includes/_buttons.scss`
   - if the styling you wanna add is for inputs put in a class inside the file `src/styles/includes/_inputs.scss`
   - the same thing for other `tags`
   - if you don't find the file of the tag you wanna style create it inside `src/styles/includes` with an underscore in front of the file name and import it into `global.scss` file inside `src/styles`
   - [why add underscore in front of file name](https://stackoverflow.com/questions/34889962/why-put-in-front-of-the-file-name-or-in-scss-css#:~:text=The%20_%20(underscore)%20is%20a,compiled%20on%20a%20single%20file.)

### React Routing:
For adding new route go to `src/routes/Router.tsx` file and add you route inside `BrowserRouter` and `Routes` in `Route` Component# bluepmg


# ecomvite
