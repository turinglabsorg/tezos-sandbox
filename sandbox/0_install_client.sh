wget https://github.com/serokell/tezos-packaging/releases/latest/download/tezos-client
chmod +x tezos-client
mkdir -p $HOME/.local/bin
mv tezos-client $HOME/.local/bin
echo 'export PATH="$HOME/.local/bin:$PATH"' >> $HOME/.bashrc
source $HOME/.bashrc