#!/bin/bash
docker stop reactapp || true
docker rm reactapp || true
docker pull 488479524661.dkr.ecr.ap-south-1.amazonaws.com/upskillway:latest
docker run -d -p 80:80 --name upskillway 488479524661.dkr.ecr.ap-south-1.amazonaws.com/upskillway:latest
