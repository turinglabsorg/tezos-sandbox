# Download the contract:
wget https://gitlab.com/tezos/tezos/raw/mainnet/src/bin_client/test/contracts/attic/id.tz
# Run origination:
tezos-client originate contract hello-id transferring 0 from bob running id.tz --init "\"hello world\"" --burn-cap 1 --force