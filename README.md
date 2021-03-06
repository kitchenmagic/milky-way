#Kitchen Magic
---

[Staging Site](http://southeast.kitchenmagic.com).

## Styling
---
- Elements
    + Navigation
        * Primary Navigation: `.km-nav-primary`
    + Modules
        * 
- Helper Classes
  + Button in form field `km-button-inline'

<button class="btn">This is a button</button>


#Sass
---
- ### Variables
    + Layout
    + Color
        * White: `$white`
        * Primary: `$primary-color`
        * Secondary: `$secondary-color`
        * Tertiary: `$tertiary-color`
        * Info: `$info-color`
        * Warning: `$warning-color`
        * Alert: `$alert-color`
    + Layout
        * Row: `$row-width`
        * 
    
- ### Mixins
    + Alignment
        + center: `@include align-center;`


#Icons
---
###Library
[Font Awesome](https://fortawesome.github.io/Font-Awesome/)
`<i class="km-icon [icon class]"></i>`

###Icon Classes
- Menu: `km-icon-menu`
- Search: `km-icon-search`


#Info
Blackout z-index = 100,000


#Hubspot
---

### Modules
**Primary Navigation**
- Type: Advanced Menu
    + Advanced Menu Type: Static
    + Max Levels: 2
    + Orientation: Horizontal
    + Enable Flyouts?: Enable Flyout
    + Menu: Primary Navigation

# jQuery Mobile
- [Panel Documentation](http://api.jquerymobile.com/panel/)







# Commands
---

<br />

##Git Basics
* `git config --[local or global] user.name "[name]"` Set username
* `git config --[local or global] user.email [email address]` Set e-mail address
* `git init` initialize git repository
* `git init “[project name]”` create new project & initialize git repository
* `git init -q “[project name]”`
* `git status` shows status of git
* `git add [filename]` adds file to list of changes to be committed
* `git add .` adds all files that have been changed in the working directory



Message:
---
`git push` 
> warning: push.default is unset; its implicit value has changed in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the traditional behavior, use:
>
> `git config --global push.default matching`
>
> To squelch this message and adopt the new behavior now, use:
>
> `git config --global push.default simple`
>
> When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.
>
> Since Git 2.0, Git defaults to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.
>
> See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)




---
# Foundation Compass Template

The easiest way to get started with Foundation + Compass.

## Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`

## Quickstart

  * [Download this starter compass project and unzip it](https://github.com/zurb/foundation-compass-template/archive/master.zip)
  * Run `bower install` to install the latest version of Foundation
  
Then when you're working on your project, just run the following command:

```bash
bundle exec compass watch
```

## Upgrading

If you'd like to upgrade to a newer version of Foundation down the road just run:

```bash
bower update
```