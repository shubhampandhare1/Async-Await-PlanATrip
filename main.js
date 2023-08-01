// Too many promises in life using Async Await

let posts = [];

const createPost = async (post) => {
    return new Promise((resolve) => {
        posts.push(post);
        resolve();
    })
}

const updateLastUserActivityTime = async () => {
    return new Promise((resolve) => {
        if (posts.length == 0) {
            setTimeout(() => {
                console.log('Before creating Post1=>', new Date());
                resolve()
            }, 1000);
        }
        else {
            setTimeout(() => {
                console.log('after creating Post1=>');
                resolve();
            }, 1000);
        }
    })
}

const deletePost = async () => {
    return new Promise((resolve, reject) => {
        if (posts.length > 0) {
            poppedPost = posts.pop();
            resolve(poppedPost);
        }
        else{
            reject('Array is empty')
        }
    })
}


const main1 = async () => {
    try {
        await updateLastUserActivityTime();
        await createPost({title: 'POST1'})
        await createPost({title: 'POST2'})
        await createPost({title: 'POST3'})
        await updateLastUserActivityTime();

        console.log(posts);
        console.log('updateLastUserActivityTime=> ',new Date().getTime())
        let deletedPost = await deletePost();
        console.log(deletedPost)        
        console.log(posts);
    } catch(e){
        console.log(e);
    }
}
main1();



// Lets Plan A trip

// buy a car
// lets go to manali
// reached manali
// reached mountain

const buyACar = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Buy a Car')
            resolve();
        }, 7000);
    })
}

const planATrip = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Lets Go to Manali');
            resolve();
        }, 3000);
    })
}

const atManali = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('Reached Manali');
            resolve('Reached Manali');
        }, 1000);
    })
}

const mountain = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('Reached Mountain');
            resolve('Reached Mountain');
        }, 2000);
    })
}

const main2 = async () => {
    try {
        await buyACar();
        await planATrip();
        const msg1 = await atManali();
        console.log(msg1);
        const msg = await mountain();
        console.log(msg);
    } catch (e) {
        console.log(e);
    }
}

main2();