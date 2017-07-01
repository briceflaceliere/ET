#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

wget http://download.geofabrik.de/europe/france-latest.osm.pbf  -O $DIR/france-latest.osm.pbf
docker run -t --rm -v $DIR:/data osrm/osrm-backend osrm-extract -p /opt/car.lua /data/france-latest.osm.pbf
docker run -t --rm -v $DIR:/data osrm/osrm-backend osrm-contract /data/france-latest.osrm