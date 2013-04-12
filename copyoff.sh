#!/bin/bash

ps -ef | egrep "nc -l 568[2-3]" | awk '{print $3, $2}' | xargs kill
