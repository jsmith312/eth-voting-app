#!/bin/bash
echo "starting local blockchain"

ganache-cli \
    --networkId=4334 \
    --port="8545" \
    --gasLimit=8000000 \
    --gasPrice=4000000000;