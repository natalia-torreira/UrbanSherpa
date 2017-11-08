# UrbanSherpa

## Setup DEV environment

* Install docker

    https://docs.docker.com/engine/installation/ ([Linux](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04))

* Install docker-compose

    https://docs.docker.com/compose/install/ ([Linux](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-16-04))

* Run docker command without sudo (Linux)

    https://docs.docker.com/engine/installation/linux/linux-postinstall/#manage-docker-as-a-non-root-user

* Clone the repository

    git clone git@github.com:Dave-Agent/UrbanSherpa.git && cd UrbanSherpa

* Build docker images and setup database

    ./install

## Commands

* Run

    ./start

* Finish

    ./finish

* Run command through docker

    ./run npm install

## Ports

app      | port
---------|-----
Manager  | 3000
Api      | 3001
Postgres | 3002
