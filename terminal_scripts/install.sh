# Dev
yarn install

# Api 
(cd api && yarn install)

# Add commnads
echo "Available commands:"
ls $PWD/node_modules/.bin
export PATH=$PATH:$PWD/node_modules/.bin


if [ -z "${COURSE_PLATZI_REACT_AVANCED+xxx}" ]; then 
    ROOT_PATH='export PATH=$PATH'
    echo "
        # curso-platzi-react-avanzado
        COURSE_PLATZI_REACT_AVANCED=true
        $ROOT_PATH:$PWD/node_modules/.bin
        #.................................[/curso-platzi-react-avanzado]
        " >> ~/.profile && source ~/.profile
fi

echo 'source ~/.profile' >> ~/.zshrc

echo 'source ~/.profile' >> ~/.bashrc
