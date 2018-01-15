import {readFile, existsSync} from 'fs'

console.log(existsSync(__dirname+'/list.json'))
readFile(__dirname+'/list.json', {encoding: 'utf8'}, (err, df)=>{
    let s = JSON.stringify(df,null,'')
    console.log(s.toString())
})

