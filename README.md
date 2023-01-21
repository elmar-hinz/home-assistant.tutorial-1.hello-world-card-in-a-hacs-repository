# Tutorial 1: Hello World Card

## Get started with Home Assistant custom cards and HACS custom repositories!

This tutorial is based upon a fully runnable hello world example displaying the
minimal requirements and the integration of both of them. Please understand
minimal as a reasonable minimum to get started, not as the absolute minimum. You
find the runnable files, that are subject of this tutorial, in the same
directory as this README. Please open them alongside.

## Use this repository as a templalte to create your own instance

As a first step, you should use this repository as a template, to create your
own instance. You can play around end test the whole development cycle with it.
On the [repositories home page on
Github](https://github.com/elmar-hinz/home-assistant.tutorial-1.hello-world-card-in-a-hacs-repository)
there is a bright green button _"Use this templeate"_ to create your own
instance of the repository. (You have to be logged in into Github for this.)

You may also use this approach to get a very simple boilerplate card.

## Installation

The installation is not required at this point to follow along the tutorial, but
you may want to check out the card upfront. Install it like any other custom
HACS card as oppposed to the default HACS repositories.

### Add the repository

Go to _"HACS" > "Frontend"_ and click the the three dots in the upper right hand
corner. Select _"Custom repositories"_ from the dropdown. Paste the home URL of
your repository instance into the field _"Repository"_ and select _"Lovelace"_
as category. Click _"ADD"_.

### Download the repository

The new repository should show up highlighted as _"New repository"_. Select it
and click the _"DOWNLOAD"_ button in the lower right hand corner. If it doesn't
show up, use the button _"+ EXPLORE & DOWNLOAD REPOSITORIES"_ in the lower right
hand corner to search for it. Follow along the prompts. You now find the
installed repository in the _"Frontend"_ tab.

### Check the card is a dashboard resource

Go to _"Settings > Dashboards"_ and click the the three dots in the upper right
hand corner to open _"Resources"_. You should find an entry similar to
`/hacsfiles/<YOUR-REPO-NAME-HERE>/card.js?hacstag=1234567890`.

### Edit the dashboard

TODO

## Tutorial

### What the HACS?

Home Assistant is still missing a package format to organise your setup by
concerns. You could commit your whole `config/` directory into a private git
repository. You still can't share it and it is not organised into packages. As
imperfect as HACS is, it is the closest approach to address this issues.

HACS downloads files, that are bundeled into a git repository addressing a
single concern, and takes care to install them into the appropriate corners of
the Home Assistant configuration.

### Development environment

Overview of our approach:

* Use the Docker core development container.
    - It is most likely up-to-date.
* Use VS Code to run it
    - That's the documented approach for this container.
    - It is widley spread.
    - It can log in into the container.
* Mount your repository from your harddisk.
    - In addition to VS Code you can use your local tool chain.
    - Your repository is also availble, when the container is stopped.
* More specific mount a local directory with your cards' repos to `config/www/dev`.
    - That is well tailored.
    - There is no need to create a new mount per card repository.
    - `www/dev` lives side-by-side with HACS's `www/community`.

### Hello HACSs

```json
{
  "name": "Hello World Card",
  "render_readme": true,
  "content_in_root": true,
  "filename": "card.js"
}
````

The `name` is the name displayed in the HACS store. Setting the capitals to
uppercase gives it a nice header style. Most cards take this choice.

The `render_readme` setting makes this README.md show up not only as the
homepage of the Github repository, but also as the homepage in the HACS store.
If we don't set this, we have to provide a file `info.md` in addition for the store. Too much overhead for a hello world example.

The `content_in_root` setting tells HACS not to expect our card in the default
location of a `dist/` directory. Such a directory makes sense, when the files in
the `dist/` directory are generated from files in a source directory. That is typically `src/`.

The `filename` setting tells HACS wich of all possible files to connect as the
entrypoint, when configuring the package as a dashbaord resource. The name
defaults to the directory name of the git repository, which would be pretty long
in our case. We want something short. `entrypoint.js` would be a very
descriptive name, if we ship multiple files.

### Hello card

#### Configuration

While setting up your card in the dashboard `setConfig()` gets triggered upon
edit with the configuration data. You consume it to set up the internal
configuration of the object. You may want to validate the data, too.

```js
setConfig(config) {
    if (!config.entity) {
        throw new Error('Please define an entity!');
    }
    this.config = config;
}
```

Our card requires an entity. If it is missing, the method throws an error. It
will be catched to be displayed in a friendly format to guide the user.

#### View

```js
set hass(hass) {
    const entityId = this.config.entity;
    const state = hass.states[entityId];
    const stateStr = state ? state.state : 'unavailable';
```

The `hass()` setter gets triggered, when the state of the hass object is
changing. First we extract the information of our interest into constants,
to prepare them for the output.

```js
if (!this.content) {
    this.innerHTML = `
        <ha-card header="Hello ${hass.user.name}!">
            <div class="card-content"></div>
        </ha-card>
    `;
    this.content = this.querySelector('div');
}
```

The HTML enclosure of the card (including the header) gets setup once. It does
not change. Nonetheless we can use the user name here. There is a new instance
per login. The inner `<div>` as a placeholder gets assingend to the content
variable.

```js
this.content.innerHTML = `
    <p>The ${entityId} is ${stateStr}.</p>
`;
```

Only the dynamic node is updated upon each call to minimise changes of the DOM
tree.

## Beyond

