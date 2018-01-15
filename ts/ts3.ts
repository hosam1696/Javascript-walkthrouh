let course = import('./course');

async function AsyncFunc() {
    const ServerClass = new (await course).Server();

    console.log(ServerClass.title)
}



AsyncFunc();

