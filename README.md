# Tutorial 1: Hello World Card

## Get started with Home Assistant custom cards and HACS custom repositories!

This tutorial is based upon a fully runnable hello world example displaying the
minimal requirements and the integration of both of them. Please understand
minimal as a reasonable minimum to get started, not as the absolute minimum.

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

### Why HACS?

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

### Hello HACS

### Hello card

## Beyond

