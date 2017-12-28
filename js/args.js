+function arg() {
    console.log([].slice.call(arguments))
    console.log(Array.isArray(arguments))
}(4,1,2,3)


+function arg1(...args) {
    console.log(Array.isArray(args))
    console.log(args.map(s => '-' + s + '-').join(' <love> '))
}('hosam', 'menna')

