{
    let funaguchiKikusui = {
        SakeType: 'Honjozo',
        AlcoholContents: '19%',
        MillingRate: '70%',
        VOLUME: '200ml',
        ServingSuggestion: ['On the Rocks', 'Chilled']
    };

    // for inを使ったケース
    console.log('===for-in===');
    for (let sakeProperty in funaguchiKikusui) {
        console.log(sakeProperty);
    }

    //Object.keysを使ったケース
    //Object.keysでプロパティのkeyを取得して各プロパティにアクセス
    console.log('===Object.keys===');
    let objKeys = Object.keys(funaguchiKikusui);
    
    console.log(objKeys);

    //Object.getOwnPropertyNamesを使ったケース
    console.log('===Object.getOwnPropertyNames===');
    let PropertyNames = Object.getOwnPropertyNames(funaguchiKikusui);
    
    console.log(PropertyNames);
}
