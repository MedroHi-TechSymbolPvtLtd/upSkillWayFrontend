#!/bin/bash

# Clean old deployment files before copying
rm -rf /home/ec2-user/app/scripts
rm -f /home/ec2-user/app/Dockerfile
rm -f /home/ec2-user/app/nginx.conf
